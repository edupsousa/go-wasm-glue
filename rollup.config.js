import tsPlugin from "rollup-plugin-typescript2";
import typescript from "typescript";
import pkg from "./package.json";

const deps = Object.keys(
  Object.assign({}, pkg.peerDependencies, pkg.dependencies)
);

const buildPlugins = [
  tsPlugin({
    typescript,
  }),
];

const esmBuilds = [
  {
    input: "src/index.ts",
    output: {
      file: pkg.browser,
      format: "es",
      sourcemap: true,
    },
    external: (id) =>
      deps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
    plugins: [...buildPlugins],
  },
];

const cjsBuilds = [
  {
    input: "src/index.ts",
    output: { file: pkg.main, format: "cjs", sourcemap: true },
    external: (id) =>
      deps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
    plugins: [...buildPlugins],
  },
];

export default [...esmBuilds, ...cjsBuilds];
