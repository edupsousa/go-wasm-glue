// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
//
// This file and dependencies are mostly based on the original
// "go_wasm_exec.js" file from the Go project.

export type { JsGo } from "./jsGo";
export { createJsGo } from "./jsGo";
export { createWasmInstance } from "./utils";
export { isGoWasmInstance } from "./instance";
