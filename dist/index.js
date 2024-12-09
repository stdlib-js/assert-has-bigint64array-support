"use strict";var e=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var a=e(function(v,i){
var p=typeof BigInt64Array=="function"?BigInt64Array:null;i.exports=p
});var g=e(function(B,A){
var y=require('@stdlib/assert-is-bigint64array/dist'),n=require('@stdlib/assert-is-bigint/dist'),u=a(),s="9007199254740991",o="9007199254740993";function I(){var r;if(typeof u!="function")return!1;try{return r=new u([s,o]),y(r)&&n(r[0])&&r[0].toString()===s&&n(r[1])&&r[1].toString()===o}catch(t){return!1}}A.exports=I
});var c=g();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
