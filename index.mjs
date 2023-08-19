// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint64array@v0.0.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@esm/index.mjs";var n="function"==typeof BigInt64Array?BigInt64Array:null;function i(){var i;if("function"!=typeof n)return!1;try{return i=new n(["9007199254740991","9007199254740993"]),t(i)&&r(i[0])&&"9007199254740991"===i[0].toString()&&r(i[1])&&"9007199254740993"===i[1].toString()}catch(t){return!1}}export{i as default};
//# sourceMappingURL=index.mjs.map
