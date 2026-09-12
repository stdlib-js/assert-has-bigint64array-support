"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(p){throw (t=0, p)}};};var a=e(function(B,i){
var y=typeof BigInt64Array=="function"?BigInt64Array:null;i.exports=y
});var g=e(function(l,A){
var I=require('@stdlib/assert-is-bigint64array/dist'),n=require('@stdlib/assert-is-bigint/dist'),u=a(),s="9007199254740991",o="9007199254740993";function c(){var r;if(typeof u!="function")return!1;try{return r=new u([s,o]),I(r)&&n(r[0])&&r[0].toString()===s&&n(r[1])&&r[1].toString()===o}catch(t){return!1}}A.exports=c
});var f=g();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
