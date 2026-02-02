// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint64array@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@v0.2.3-esm/index.mjs";var n="function"==typeof BigInt64Array?BigInt64Array:null,i="9007199254740991",s="9007199254740993";function e(){var e;if("function"!=typeof n)return!1;try{return e=new n([i,s]),t(e)&&r(e[0])&&e[0].toString()===i&&r(e[1])&&e[1].toString()===s}catch(t){return!1}}export{e as default};
//# sourceMappingURL=index.mjs.map
