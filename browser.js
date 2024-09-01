// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,i=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,o="function"==typeof n?n.toStringTag:"",a=r()?function(e){var r,n,a,c,l;if(null==e)return t.call(e);n=e[o],l=o,r=null!=(c=e)&&i.call(c,l);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=n:delete e[o],a}:function(e){return t.call(e)},c="function"==typeof BigInt64Array,l="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty;function p(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+u(n):u(n)+e,i&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!p(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var y=Math.abs,b=String.prototype.toLowerCase,w=String.prototype.toUpperCase,v=String.prototype.replace,m=/e\+(\d)$/,_=/e-(\d)$/,j=/^(\d+)$/,S=/^(\d+)e/,x=/\.0$/,E=/\.0*e/,I=/(\..*[^0])0*e/;function k(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":y(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=v.call(t,I,"$1e"),t=v.call(t,E,"e"),t=v.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,m,"e+0$1"),t=v.call(t,_,"e-0$1"),e.alternate&&(t=v.call(t,j,"$1."),t=v.call(t,S,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var B=String.fromCharCode,A=Array.isArray;function O(e){return e!=e}function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,i,n,o,a,c,l,s,p,u,g,d;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if("string"==typeof(i=e[l]))a+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,s=0;s<t.length;s++)switch(n=t.charAt(s)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,O(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,O(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=h(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!O(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=O(o)?String(i.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=k(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=f(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,u=i.width,g=i.padRight,d=void 0,(d=u-p.length)<0?p:p=g?p+T(d):T(d)+p)),a+=i.arg||"",c+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(P(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function R(e){var r,t;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var Z,G=Object.prototype,W=G.toString,L=G.__defineGetter__,U=G.__defineSetter__,M=G.__lookupGetter__,X=G.__lookupSetter__;Z=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?s:function(e,r,t){var i,n,o,a;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(M.call(e,r)||X.call(e,r)?(i=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),o="get"in t,a="set"in t,n&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var z=Z;function q(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(e){return"boolean"==typeof e}var H=Boolean,J=Boolean.prototype.toString,K=r();function N(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===a(e)))}function Q(e){return D(e)||N(e)}q(Q,"isPrimitive",D),q(Q,"isObject",N);var Y="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="object"==typeof globalThis?globalThis:null,te=function(e){if(arguments.length){if(!D(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(re)return re;if(Y)return Y;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}();function ie(e){return"bigint"==typeof e}function ne(e){return"object"==typeof e&&"[object BigInt]"===a(e)&&function(e){try{return"bigint"==typeof e.valueOf()}catch(e){return!1}}(e)}function oe(e){return ie(e)||ne(e)}function ae(e){return function(){return e}}q(oe,"isPrimitive",ie),q(oe,"isObject",ne);var ce=ae(!1),le=ae(!1),se=ae(!1);q(ce,"isPrimitive",le),q(ce,"isObject",se);var pe="function"==typeof te.BigInt&&"function"==typeof BigInt&&"bigint"==typeof te.BigInt("1")&&"bigint"==typeof BigInt("1")?oe:ce,ue="function"==typeof BigInt64Array?BigInt64Array:null,fe="9007199254740991",ge="9007199254740993";return function(){var e,r;if("function"!=typeof ue)return!1;try{return e=new ue([fe,ge]),r=e,(c&&r instanceof BigInt64Array||"[object BigInt64Array]"===a(r))&&pe(e[0])&&e[0].toString()===fe&&pe(e[1])&&e[1].toString()===ge}catch(e){return!1}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).hasBigInt64ArraySupport=r();
//# sourceMappingURL=browser.js.map
