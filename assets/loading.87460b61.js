import{s as h,i as c}from"./index.7bc89517.js";import{g as v,m as y,r as f,b as S}from"./render-tnode.dfc92ed6.js";import{g as _,a as P,r as j}from"./dom.0201a9cf.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function p(e,t){var n=Object.keys(t);n.forEach(function(o){e.style[o]=t[o]})}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function N(){var e=navigator,t=e.userAgent,n=t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1,o=t.indexOf("Trident")>-1&&t.indexOf("rv:11.0")>-1;if(n){var s=new RegExp("MSIE (\\d+\\.\\d+);"),a=t.match(s);if(!a)return-1;var i=parseFloat(a[1]);return i<7?6:i}return o?11:Number.MAX_SAFE_INTEGER}function k(e){return h(e!=null?e:"").length}function B(e,t,n){return h(n!=null?n:"").slice().length===t?n:h(e!=null?e:"").slice(0,t).join("")}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(o){c(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function L(e){var t,n,o,s,a={};if(!!e){var i=(t=window)===null||t===void 0||(n=t.getComputedStyle)===null||n===void 0?void 0:n.call(t,e),u=i.color,w=i.fontSize,r=(o=window)===null||o===void 0||(s=o.navigator)===null||s===void 0?void 0:s.userAgent,C=/Safari/.test(r)&&!/Chrome/.test(r),O=/(?=.*iPhone)[?=.*MicroMessenger]/.test(r)&&!/Chrome/.test(r),b=/Mobile/.test(r);if((C||O)&&!b&&(a={transformOrigin:"-1px -1px",transform:"scale(".concat(parseInt(w,10)/14,")")}),u&&N()>11){var l=u.match(/[\d.]+/g),x=l?"rgba(".concat(l[0],", ").concat(l[1],", ").concat(l[2],", 0)"):"";p(e,d(d({},a),{},{background:"conic-gradient(from 90deg at 50% 50%,".concat(x," 0deg, ").concat(u," 360deg)")}))}else p(e,d(d({},a),{},{background:""}))}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var T=v("loading"),z=y(T).extend({name:"TLoadingGradient",mounted:function(){var t=this;this.$nextTick(function(){t.updateColor()})},updated:function(){this.updateColor()},methods:{updateColor:function(){var t=this.$refs.circle;L(t)}},render:function(){var t=arguments[0],n=["".concat(this.classPrefix,"-loading__gradient"),"".concat(this.classPrefix,"-icon-loading")];return t("svg",{class:n,attrs:{viewBox:"0 0 14 14",version:"1.1",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg"}},[t("foreignObject",{attrs:{x:"1",y:"1",width:"12",height:"12"}},[t("div",{class:"".concat(this.classPrefix,"-loading__gradient-conic"),ref:"circle"})])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var D={inserted:function(t,n){if(!!n.value){var o=_(n.value);o==null||o.appendChild(t)}}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var F={attach:{type:[String,Function],default:""},content:{type:[String,Function]},default:{type:[String,Function]},delay:{type:Number,default:0},fullscreen:Boolean,indicator:{type:[Boolean,Function],default:!0},inheritColor:Boolean,loading:{type:Boolean,default:!0},preventScrollThrough:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},size:{type:String,default:"medium"},text:{type:[String,Function]},zIndex:{type:Number}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(o){c(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var A=v("loading"),W=y(A).extend({name:"TLoading",props:I({},F),directives:{TransferDom:D},data:function(){return{delayShowLoading:!1}},created:function(){this.delay&&this.countDelay()},watch:{loading:{handler:function(t){t?(this.countDelay(),this.lockFullscreen&&P(document.body,"".concat(this.componentName,"--lock"))):this.lockFullscreen&&j(document.body,"".concat(this.componentName,"--lock"))},immediate:!0}},computed:{styles:function(){var t={};return this.zIndex!==void 0&&(t.zIndex=this.zIndex),["small","medium","large"].includes(this.size)||(t["font-size"]=this.size),t},showText:function(){return Boolean(this.text||this.$scopedSlots.text)},baseClasses:function(){return["".concat(this.componentName,"--center"),this.commonSizeClassName[this.size],c({},"".concat(this.componentName,"--inherit-color"),this.inheritColor)]},hasContent:function(){return Boolean(this.default||this.$scopedSlots.default||this.content||this.$scopedSlots.content)},withContentClasses:function(){return this.baseClasses.concat([this.componentName,"".concat(this.componentName,"--full"),c({},"".concat(this.componentName,"__overlay"),this.showOverlay)])},fullScreenClasses:function(){return[this.componentName,"".concat(this.componentName,"__fullscreen"),"".concat(this.componentName,"--center"),"".concat(this.componentName,"__overlay")]},attachClasses:function(){return this.baseClasses.concat([this.componentName,"".concat(this.componentName,"--full"),c({},"".concat(this.componentName,"__overlay"),this.showOverlay)])},normalClasses:function(){return this.baseClasses.concat([this.componentName])},lockFullscreen:function(){return this.preventScrollThrough&&this.fullscreen},delayCounted:function(){return Boolean(!this.delay||this.delay&&this.delayShowLoading)},showWrapLoading:function(){return this.hasContent&&this.loading&&this.delayCounted},showFullScreenLoading:function(){return this.fullscreen&&this.loading&&this.delayCounted},showAttachedLoading:function(){return this.attach&&this.loading&&this.delayCounted}},methods:{countDelay:function(){var t=this;this.delayShowLoading=!1;var n=setTimeout(function(){t.delayShowLoading=!0,clearTimeout(n)},this.delay)}},render:function(){var t=arguments[0],n=t(z,{attrs:{size:this.size}}),o=this.loading&&f(this,"indicator",n),s=this.showText&&t("div",{class:"".concat(this.classPrefix,"-loading__text")},[f(this,"text")]);return this.fullscreen?this.showFullScreenLoading?t("div",{class:this.fullScreenClasses,style:this.styles,directives:[{name:"transfer-dom",value:this.attach}]},[t("div",{class:this.baseClasses},[o,s])]):null:this.hasContent?t("div",{class:"".concat(this.componentName,"__parent")},[S(this,"default","content"),this.showWrapLoading&&t("div",{class:this.withContentClasses,style:this.styles},[o,s])]):this.attach?this.showAttachedLoading?t("div",{class:this.attachClasses,style:this.styles,directives:[{name:"transfer-dom",value:this.attach}]},[o,s]):void 0:t("div",{class:this.normalClasses,style:this.styles},[o,s])}});export{D as T,W as _,N as a,k as g,B as l,p as s};