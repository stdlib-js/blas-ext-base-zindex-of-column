"use strict";var O=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var c=O(function(N,R){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),z=require('@stdlib/strided-base-reinterpret-complex128/dist');function I(o,a,q,s,e,b,p,g,y,f,x,t){var i,j,h,w,u,C,n,v,l,r,m;if(o<=0||a<=0)return-1;if(i=z(q,0),j=z(p,0),s*=2,e*=2,b*=2,g*=2,y*=2,H([s,e])){for(u=o,C=a,m=0;m<C;m++){for(n=b+m*e,l=y,r=0;r<u&&!(i[n]!==j[l]||i[n+1]!==j[l+1]);r++)n+=s,l+=g;if(r===u)return m}return-1}for(u=a,C=o,h=e,w=s-u*e,v=t,r=0;r<u;r++)f[v]=1,v+=x;for(n=b,l=y,m=0;m<C;m++){for(v=t,r=0;r<u;r++)(i[n]!==j[l]||i[n+1]!==j[l+1])&&(f[v]=0),n+=h,v+=x;n+=w,l+=g}for(v=t,r=0;r<u&&f[v]!==1;r++)v+=x;return r===u?-1:r}R.exports=I
});var _=O(function(W,V){
var J=require('@stdlib/blas-base-layout-resolve-str/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),E=require('@stdlib/strided-base-stride2offset/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),P=c();function Q(o,a,q,s,e,b,p,g,y){var f,x,t,i;if(i=J(o),i===null)throw new TypeError(S('2itFx',o));if(K(i)?(t=q,f=e,x=1):(t=a,f=1,x=e),e<F(1,t))throw new RangeError(S('2itIR',F(1,t),e));return P(a,q,s,f,x,0,b,p,E(a,p),g,y,E(q,y))}V.exports=Q
});var B=O(function(X,k){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Y=c();U(T,"ndarray",Y);k.exports=T
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=B(),d,G=$(Z(__dirname,"./native.js"));L(G)?d=M:d=G;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
