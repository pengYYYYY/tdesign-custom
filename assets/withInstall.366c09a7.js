import{t as f,V as o,i as b}from"./index.7bc89517.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function c(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,e)}return r}function l(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(e){b(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function P(t,n){var r,e=t,a=(e==null||(r=e.options)===null||r===void 0?void 0:r.name)||e.name;return e.install=function(s,u){var p={prefix:"t"},O=l(l({},p),u),v=f(p.prefix),i=a.replace(v,"").replace("-mapprops","");i=f(O.prefix)+i,s.component(i,t)},n&&o&&(o._installedPlugins||[]).indexOf(n)===-1&&o.use(n),t}export{P as w};
