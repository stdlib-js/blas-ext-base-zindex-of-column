"use strict";var O=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var c=O(function(W,E){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),R=require('@stdlib/strided-base-reinterpret-complex128/dist');function I(e,a,q,x,i,y,C,b,s,f,l,o){var g,j,w,z,u,p,n,v,t,r,m;if(e<=0||a<=0)return-1;if(g=R(q,0),j=R(C,0),x*=2,i*=2,y*=2,b*=2,s*=2,H([x,i])){for(u=e,p=a,m=0;m<p;m++){for(n=y+m*i,t=s,r=0;r<u&&!(g[n]!==j[t]||g[n+1]!==j[t+1]);r++)n+=x,t+=b;if(r===u)return m}return-1}for(u=a,p=e,w=i,z=x-u*i,v=o,r=0;r<u;r++)f[v]=1,v+=l;for(n=y,t=s,m=0;m<p;m++){for(v=o,r=0;r<u;r++)(g[n]!==j[t]||g[n+1]!==j[t+1])&&(f[v]=0),n+=w,v+=l;n+=z,t+=b}for(v=o,r=0;r<u&&f[v]!==1;r++)v+=l;return r===u?-1:r}E.exports=I
});var _=O(function(X,V){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),d=require('@stdlib/strided-base-stride2offset/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=c();function U(e,a,q,x,i,y,C,b,s){var f,l,o;if(!J(e))throw new TypeError(S('2itFx',e));if(K(e)?o=q:o=a,i<F(1,o))throw new RangeError(S('2itIR',F(1,o),i));return P(e)?(f=1,l=i):(f=i,l=1),Q(a,q,x,f,l,0,y,C,d(a,C),b,s,d(q,s))}V.exports=U
});var B=O(function(A,k){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Z=c();Y(T,"ndarray",Z);k.exports=T
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=B(),h,G=M($(__dirname,"./native.js"));L(G)?h=D:h=G;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
