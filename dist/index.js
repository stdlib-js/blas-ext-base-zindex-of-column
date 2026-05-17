"use strict";var O=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var c=O(function(W,E){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),R=require('@stdlib/strided-base-reinterpret-complex128/dist');function I(e,a,s,l,i,y,C,b,x,q,f,o){var g,j,w,z,u,p,n,v,t,r,m;if(e<=0||a<=0)return-1;if(g=R(s,0),j=R(C,0),l*=2,i*=2,y*=2,b*=2,x*=2,H([l,i])){for(u=e,p=a,m=0;m<p;m++){for(n=y+m*i,t=x,r=0;r<u&&!(g[n]!==j[t]||g[n+1]!==j[t+1]);r++)n+=l,t+=b;if(r===u)return m}return-1}for(u=a,p=e,w=i,z=l-u*i,v=o,r=0;r<u;r++)q[v]=1,v+=f;for(n=y,t=x,m=0;m<p;m++){for(v=o,r=0;r<u;r++)(g[n]!==j[t]||g[n+1]!==j[t+1])&&(q[v]=0),n+=w,v+=f;n+=z,t+=b}for(v=o,r=0;r<u&&q[v]!==1;r++)v+=f;return r===u?-1:r}E.exports=I
});var _=O(function(X,V){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),d=require('@stdlib/strided-base-stride2offset/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=c();function U(e,a,s,l,i,y,C,b,x){var q,f,o;if(!J(e))throw new TypeError(S('nullFx',e));if(K(e)?o=s:o=a,i<F(1,o))throw new RangeError(S('nullIR',F(1,o),i));return P(e)?(q=1,f=i):(q=i,f=1),Q(a,s,l,q,f,0,y,C,d(a,C),b,x,d(s,x))}V.exports=U
});var B=O(function(A,k){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Z=c();Y(T,"ndarray",Z);k.exports=T
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=B(),h,G=M($(__dirname,"./native.js"));L(G)?h=D:h=G;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
