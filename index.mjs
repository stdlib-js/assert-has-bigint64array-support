// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint64array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-bigint@esm/index.mjs";var n="function"==typeof BigInt64Array?BigInt64Array:null,i=t,s=r,e=n;var a=function(){var t;if("function"!=typeof e)return!1;try{return t=new e(["9007199254740991","9007199254740993"]),i(t)&&s(t[0])&&"9007199254740991"===t[0].toString()&&s(t[1])&&"9007199254740993"===t[1].toString()}catch(t){return!1}};export{a as default};
//# sourceMappingURL=index.mjs.map
