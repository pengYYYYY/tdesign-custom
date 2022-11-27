import{O as C,j as _,g as N,f as S,i as d,V as v}from"./index.7bc89517.js";import{g as j,m as w,a as x,r as u,b as I}from"./render-tnode.dfc92ed6.js";import{g as E}from"./dom.0201a9cf.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var F={closeBtn:{type:[String,Boolean,Function],default:void 0},content:{type:[String,Function]},default:{type:[String,Function]},duration:{type:Number,default:3e3},footer:{type:[String,Function]},icon:{type:[Boolean,Function],default:!0},theme:{type:String,default:"info",validator:function(t){return["info","success","warning","error"].includes(t)}},title:{type:[String,Function]},onCloseBtnClick:Function,onDurationEnd:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function D(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?g(Object(e),!0).forEach(function(r){d(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var T=j("notification"),$=w(T,x()).extend({name:"TNotification",props:D({},F),data:function(){return{timer:null}},created:function(){this.duration&&this.setTimer()},methods:{setTimer:function(){var t=this;!this.duration||(this.timer=Number(setTimeout(function(){t.clearTimer(),t.$emit("duration-end"),t.onDurationEnd&&t.onDurationEnd()},this.duration)))},clearTimer:function(){this.duration&&clearTimeout(this.timer)},close:function(t){this.$emit("close-btn-click",{e:t}),this.onCloseBtnClick&&this.onCloseBtnClick({e:t})},renderIcon:function(t){var e;if(this.icon===!1)return null;if(C(this.icon))e=this.icon(t);else if(this.$scopedSlots.icon)e=this.$scopedSlots.icon(null);else if(this.theme){var r=this.useGlobalIcon({InfoCircleFilledIcon:_,CheckCircleFilledIcon:N}),i=r.InfoCircleFilledIcon,c=r.CheckCircleFilledIcon,a=this.theme==="success"?t(c,{class:"".concat(this.classPrefix,"-is-").concat(this.theme)}):t(i,{class:"".concat(this.classPrefix,"-is-").concat(this.theme)});e=t("div",{class:"".concat(this.componentName,"__icon")},[a])}return e},renderClose:function(){var t=this.$createElement,e=this.useGlobalIcon({CloseIcon:S}),r=e.CloseIcon,i=t(r);return t("span",{class:"".concat(this.classPrefix,"-message__close"),on:{click:this.close}},[u(this,"closeBtn",i)])},renderContent:function(){var t=this.$createElement;return t("div",{class:"".concat(this.componentName,"__content")},[I(this,"default","content")])}},render:function(t){var e=this.renderIcon(t),r=this.renderClose(),i=this.renderContent(),c=u(this,"footer"),a=u(this,"title");return t("div",{class:"".concat(this.componentName),on:{mouseenter:this.clearTimer,mouseleave:this.setTimer}},[e,t("div",{class:"".concat(this.componentName,"__main")},[t("div",{class:"".concat(this.componentName,"__title__wrap")},[t("span",{class:"".concat(this.componentName,"__title")},[a]),r]),i,c])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var k=6e3,o="16px",A={"top-left":{left:o,top:o},"top-right":{right:o,top:o},"bottom-right":{right:o,bottom:o},"bottom-left":{left:o,bottom:o}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function O(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?O(Object(e),!0).forEach(function(r){d(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var B=j("notification"),M=w(B).extend({components:{Notification:$},props:{placement:{type:String,default:"top-right",validator:function(t){return["top-left","top-right","bottom-left","bottom-right"].indexOf(t)>-1}}},data:function(){return{list:[]}},computed:{styles:function(){return p({zIndex:k},A[this.placement])}},methods:{add:function(t){return this.list.push(t),this.list.length-1},remove:function(t){this.list.splice(t,1)},removeAll:function(){this.list=[]},getOffset:function(t){if(!!t)return isNaN(Number(t))?t:"".concat(t,"px")},notificationStyles:function(t){var e={marginBottom:o};return t.offset&&(e.position="relative",e.left=this.getOffset(t.offset[0]),e.top=this.getOffset(t.offset[1])),t.zIndex&&(e["z-index"]=t.zIndex),e},getListeners:function(t){var e=this;return{"close-btn-click":function(){return e.remove(t)},"duration-end":function(){return e.remove(t)}}}},render:function(){var t=this,e=arguments[0];if(!!this.list.length)return e("div",{class:"".concat(this.componentName,"__show--").concat(this.placement),style:this.styles},[this.list.map(function(r,i){return e("t-notification",{key:r.id,style:t.notificationStyles(r),props:p({},r),on:p({},t.getListeners(i))})})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function h(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?y(Object(e),!0).forEach(function(r){d(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var b=0,s=new Map,L=function(t){b+=1;var e=h({placement:"top-right",zIndex:6e3,attach:"body",id:b},t);e.content=t.content?t.content:"";var r=E(e.attach);s.get(r)||s.set(r,{});var i=s.get(r)[e.placement];if(i)i.add(e);else{var c=new M({propsData:{placement:e.placement}});c.add(e),c.$mount(),s.get(r)[e.placement]=c,r.appendChild(c.$el),i=s.get(r)[e.placement]}return new Promise(function(a){i.$nextTick(function(){var m=i.$children;a(m[m.length-1])})})},l=function(t,e){var r=h(h({},e),{},{theme:t});return L(r)},P={info:function(t){return l("info",t)},success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},close:function(t){t.then(function(e){return e.close()})},closeAll:function(){s.forEach(function(t){Object.keys(t).forEach(function(e){t[e].removeAll()})})}},f=l;Object.keys(P).forEach(function(n){f[n]=P[n]});f.install=function(){v.prototype.$notify=f,v.prototype.$notification=f};var V=f;export{V as N};
