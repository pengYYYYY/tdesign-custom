import{U as n,D as l,a as r,b as c,c as m,d as _,e as v,f as g,g as p,h,i as C,j as u,k as x,l as b,m as f,n as D,o as y}from"./index.f39b913d.js";import{n as d}from"./index.7bc89517.js";import{P as S}from"./prism.73899ae1.js";import"./loading.87460b61.js";import"./render-tnode.dfc92ed6.js";import"./dom.0201a9cf.js";import"./config.dabee373.js";var w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("t-space",{attrs:{direction:"vertical"}},[t("div",{staticClass:"loading-attach-demo__title",attrs:{id:"alice"}},[e._v("Hello, I'm Alice. I'm going to be a front-end developer.")]),t("t-loading",{attrs:{attach:"#alice",size:"small",loading:e.loading}}),t("t-switch",{attrs:{customValue:[!0,!1],label:["\u663E\u793A","\u9690\u85CF"]},model:{value:e.loading,callback:function(s){e.loading=s},expression:"loading"}})],1)},k=[];const z={data(){return{loading:!0}}},o={};var N=d(z,w,k,!1,T,"d2eeb706",null,null);function T(e){for(let a in o)this[a]=o[a]}const $=function(){return N.exports}(),I=`<template>
  <t-space direction="vertical">
    <div id="alice" class="loading-attach-demo__title">Hello, I'm Alice. I'm going to be a front-end developer.</div>
    <t-loading attach="#alice" size="small" :loading="loading"></t-loading>

    <t-switch v-model="loading" :customValue="[true, false]" :label="['\u663E\u793A', '\u9690\u85CF']" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
<\/script>

<style scoped>
.loading-attach-demo__title {
  /** \`position: relative\` is required as a parent node */
  position: relative;
  width: 360px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
</style>
`;var L=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"message",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"0%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:e.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u56FE\u6807\u52A0\u8F7D"}},[e._v("\u56FE\u6807\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6587\u5B57\u52A0\u8F7D"}},[e._v("\u6587\u5B57\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u52A0\u8F7D"}},[e._v("\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u52A0\u8F7D"}},[e._v("\u4E0D\u540C\u5C3A\u5BF8\u7684\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6709\u5305\u88F9\u7684\u52A0\u8F7D"}},[e._v("\u6709\u5305\u88F9\u7684\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6709\u5EF6\u65F6\u7684\u52A0\u8F7D"}},[e._v("\u6709\u5EF6\u65F6\u7684\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5168\u5C4F\u52A0\u8F7D"}},[e._v("\u5168\u5C4F\u52A0\u8F7D")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6307\u4EE4\u65B9\u5F0F\u8C03\u7528"}},[e._v("\u6307\u4EE4\u65B9\u5F0F\u8C03\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u51FD\u6570\u65B9\u5F0F\u8C03\u7528"}},[e._v("\u51FD\u6570\u65B9\u5F0F\u8C03\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20"}},[e._v("\u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20")])])])]),t("Usage"),t("h3",{attrs:{id:"\u56FE\u6807\u52A0\u8F7D"}},[e._v("\u56FE\u6807\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u56FE\u6807\u52A0\u8F7D"}})]),t("p",[e._v("\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u53EA\u6709\u56FE\u6807\u663E\u793A\u3002\u9002\u7528\u4E8E\u6253\u5F00\u9875\u9762\u6216\u64CD\u4F5C\u5B8C\u6210\u540E\u6A21\u5757\u5185\u7B49\u5F85\u5237\u65B0\u7684\u52A0\u8F7D\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-base tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexamplebaseCode,"demo-name":"base",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" loading",code:e.DemoexamplebaseCode}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" loading",code:e.DemoexamplebaseCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u6587\u5B57\u52A0\u8F7D"}},[e._v("\u6587\u5B57\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6587\u5B57\u52A0\u8F7D"}})]),t("p",[e._v("\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u6709\u6587\u5B57\u663E\u793A\u3002\u9002\u7528\u4E8E\u6253\u5F00\u9875\u9762\u6216\u64CD\u4F5C\u5B8C\u6210\u540E\u6A21\u5757\u5185\u7B49\u5F85\u5237\u65B0\u7684\u52A0\u8F7D\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-text tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexampletextCode,"demo-name":"text",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"text","component-name":" loading",code:e.DemoexampletextCode}}),t("Codesandbox",{attrs:{"demo-name":"text","component-name":" loading",code:e.DemoexampletextCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampletext")],1)])],1),t("h3",{attrs:{id:"\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u52A0\u8F7D"}},[e._v("\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u52A0\u8F7D"}})]),t("p",[e._v("\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u6709\u6587\u5B57\u548C\u56FE\u6807\u5171\u540C\u663E\u793A\u3002\u9002\u7528\u4E8E\u6253\u5F00\u9875\u9762\u6216\u64CD\u4F5C\u5B8C\u6210\u540E\u9875\u9762\u5185\u7B49\u5F85\u5237\u65B0\u7684\u52A0\u8F7D\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-icon-text tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexampleicontextCode,"demo-name":"icon-text",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"icon-text","component-name":" loading",code:e.DemoexampleicontextCode}}),t("Codesandbox",{attrs:{"demo-name":"icon-text","component-name":" loading",code:e.DemoexampleicontextCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleicontext")],1)])],1),t("h3",{attrs:{id:"\u4E0D\u540C\u5C3A\u5BF8\u7684\u52A0\u8F7D"}},[e._v("\u4E0D\u540C\u5C3A\u5BF8\u7684\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u52A0\u8F7D"}})]),t("p",[e._v("\u5C0F\u5C3A\u5BF8\u9002\u7528\u4E8E\u7EC4\u4EF6\u5185\u52A0\u8F7D\u573A\u666F\uFF0C\u4E2D\u5C3A\u5BF8\u9002\u7528\u4E8E\u5BB9\u5668\u5982\u5361\u7247\u3001\u8868\u683C\u7B49\u533A\u57DF\u7684\u52A0\u8F7D\u573A\u666F\uFF0C\u5927\u5C3A\u5BF8\u9002\u7528\u4E8E\u9875\u9762\u5168\u5C4F\u52A0\u8F7D\u573A\u666F\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-size tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexamplesizeCode,"demo-name":"size",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"size","component-name":" loading",code:e.DemoexamplesizeCode}}),t("Codesandbox",{attrs:{"demo-name":"size","component-name":" loading",code:e.DemoexamplesizeCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplesize")],1)])],1),t("h3",{attrs:{id:"\u6709\u5305\u88F9\u7684\u52A0\u8F7D"}},[e._v("\u6709\u5305\u88F9\u7684\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6709\u5305\u88F9\u7684\u52A0\u8F7D"}})]),t("p",[e._v("Loading \u7EC4\u4EF6\u53EF\u4EE5\u4F5C\u4E3A\u5BB9\u5668\u5305\u88F9\u9700\u8981\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u7684\u5185\u5BB9\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-wrap tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexamplewrapCode,"demo-name":"wrap",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"wrap","component-name":" loading",code:e.DemoexamplewrapCode}}),t("Codesandbox",{attrs:{"demo-name":"wrap","component-name":" loading",code:e.DemoexamplewrapCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplewrap")],1)])],1),t("h3",{attrs:{id:"\u6709\u5EF6\u65F6\u7684\u52A0\u8F7D"}},[e._v("\u6709\u5EF6\u65F6\u7684\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6709\u5EF6\u65F6\u7684\u52A0\u8F7D"}})]),t("p",[e._v("\u8BBE\u7F6E\u6700\u77ED\u5EF6\u8FDF\u54CD\u5E94\u65F6\u95F4\uFF0C\u4F4E\u4E8E\u54CD\u5E94\u65F6\u95F4\u7684\u64CD\u4F5C\u4E0D\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-delay tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexampledelayCode,"demo-name":"delay",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"delay","component-name":" loading",code:e.DemoexampledelayCode}}),t("Codesandbox",{attrs:{"demo-name":"delay","component-name":" loading",code:e.DemoexampledelayCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledelay")],1)])],1),t("h3",{attrs:{id:"\u5168\u5C4F\u52A0\u8F7D"}},[e._v("\u5168\u5C4F\u52A0\u8F7D "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5168\u5C4F\u52A0\u8F7D"}})]),t("p",[e._v("\u5168\u5C4F\u5C55\u793A\u52A0\u8F7D\u72B6\u6001\uFF0C\u963B\u6B62\u7528\u6237\u64CD\u4F5C\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-fullscreen tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexamplefullscreenCode,"demo-name":"fullscreen",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"fullscreen","component-name":" loading",code:e.DemoexamplefullscreenCode}}),t("Codesandbox",{attrs:{"demo-name":"fullscreen","component-name":" loading",code:e.DemoexamplefullscreenCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplefullscreen")],1)])],1),t("h3",{attrs:{id:"\u6307\u4EE4\u65B9\u5F0F\u8C03\u7528"}},[e._v("\u6307\u4EE4\u65B9\u5F0F\u8C03\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6307\u4EE4\u65B9\u5F0F\u8C03\u7528"}})]),t("p",[e._v("\u652F\u6301 "),t("code",[e._v("v-loading")]),e._v(" \u6307\u4EE4\u8C03\u7528 "),t("code",[e._v("Loading")]),e._v("\uFF0C\u53EA\u9700\u8981\u7ED1\u5B9A "),t("code",[e._v("boolean")]),e._v(" \u503C\u5373\u53EF\uFF0C\u652F\u6301 "),t("code",[e._v("fullscreen")]),e._v(" \u548C "),t("code",[e._v("inheritColor")]),e._v(" \u4FEE\u9970\u7B26\uFF0C\u5206\u522B\u5BF9\u5E94\u5176\u5C5E\u6027\u3002")]),t("h3",[e._v("DEMO (\u{1F6A7}\u5EFA\u8BBE\u4E2D\uFF09...")]),t("h3",{attrs:{id:"\u51FD\u6570\u65B9\u5F0F\u8C03\u7528"}},[e._v("\u51FD\u6570\u65B9\u5F0F\u8C03\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u51FD\u6570\u65B9\u5F0F\u8C03\u7528"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-service tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexampleserviceCode,"demo-name":"service",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"service","component-name":" loading",code:e.DemoexampleserviceCode}}),t("Codesandbox",{attrs:{"demo-name":"service","component-name":" loading",code:e.DemoexampleserviceCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleservice")],1)])],1),t("h3",{attrs:{id:"\u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20"}},[e._v("\u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20"}})]),t("p",[e._v("\u53EF\u901A\u8FC7 "),t("code",[e._v("attach")]),e._v(" \u6302\u8F7D\u5230\u6307\u5B9A\u5143\u7D20\u3002")]),t("p",[e._v("\u6CE8\uFF1A\u88AB\u6302\u8F7D\u5143\u7D20\uFF08loading\u7684\u7236\u5143\u7D20\uFF09\u9700\u8BBE\u7F6E\uFF1A"),t("code",[e._v("position: relative;")])]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--loading-attach tdesign-demo-item--loading"},[t("td-doc-demo",{attrs:{code:e.DemoexampleattachCode,"demo-name":"attach",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"attach","component-name":" loading",code:e.DemoexampleattachCode}}),t("Codesandbox",{attrs:{"demo-name":"attach","component-name":" loading",code:e.DemoexampleattachCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleattach")],1)])],1)],1),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"loading"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#loading-props"}},[e._v("Loading Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#loadingplugin"}},[e._v("LoadingPlugin")])])])]),t("h3",{attrs:{id:"loading-props"}},[e._v("Loading Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#loading-props"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("attach")]),t("td",[e._v("String / Function")]),t("td",[e._v("''")]),t("td",[e._v("\u6302\u8F7D\u5143\u7D20\uFF0C\u9ED8\u8BA4\u6302\u8F7D\u5230\u7EC4\u4EF6\u672C\u8EAB\u6240\u5728\u7684\u4F4D\u7F6E\u3002\u6570\u636E\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u9009\u62E9\u5668\u5904\u7406\uFF0C\u8FDB\u884C\u8282\u70B9\u67E5\u8BE2\u3002\u793A\u4F8B\uFF1A'body' \u6216 () => document.body\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("AttachNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5B50\u5143\u7D20\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("default")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5B50\u5143\u7D20\uFF0C\u540C content\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("delay")]),t("td",[e._v("Number")]),t("td",[e._v("0")]),t("td",[e._v("\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF0C\u7528\u4E8E\u9632\u6B62\u8BF7\u6C42\u901F\u5EA6\u8FC7\u5FEB\u5F15\u8D77\u7684\u52A0\u8F7D\u95EA\u70C1\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fullscreen")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u663E\u793A\u4E3A\u5168\u5C4F\u52A0\u8F7D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("indicator")]),t("td",[e._v("Boolean / Slot / Function")]),t("td",[e._v("true")]),t("td",[e._v("\u52A0\u8F7D\u6307\u793A\u7B26\uFF0C\u503C\u4E3A true \u663E\u793A\u9ED8\u8BA4\u6307\u793A\u7B26\uFF0C\u503C\u4E3A false \u5219\u4E0D\u663E\u793A\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6307\u793A\u7B26\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("boolean | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("inheritColor")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u7EE7\u627F\u7236\u5143\u7D20\u989C\u8272")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loading")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("preventScrollThrough")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u5168\u5C4F\u52A0\u8F7D\u6A21\u5F0F\u6709\u6548")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("showOverlay")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u662F\u5426\u9700\u8981\u906E\u7F69\u5C42\uFF0C\u906E\u7F69\u5C42\u5BF9\u5305\u88F9\u5143\u7D20\u624D\u6709\u6548")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("String")]),t("td",[e._v("medium")]),t("td",[e._v("\u5C3A\u5BF8\uFF0C\u793A\u4F8B\uFF1Asmall/medium/large/12px/56px/0.3em")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("text")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u52A0\u8F7D\u63D0\u793A\u6587\u6848\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("zIndex")]),t("td",[e._v("Number")]),t("td",[e._v("-")]),t("td",[e._v("\u6D88\u606F\u901A\u77E5\u5C42\u7EA7\uFF0C\u6837\u5F0F\u9ED8\u8BA4\u4E3A 3500")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"loadingplugin"}},[e._v("LoadingPlugin "),t("a",{staticClass:"header-anchor",attrs:{href:"#loadingplugin"}})]),t("p",[e._v("\u540C\u65F6\u4E5F\u652F\u6301 "),t("code",[e._v("this.$loading")]),e._v("\u3002\u8FD9\u662F\u4E00\u4E2A\u63D2\u4EF6\u51FD\u6570\uFF0C\u53C2\u6570\u5F62\u5F0F\u4E3A\u987A\u5E8F\u53C2\u6570\uFF08\u5F62\u5982\uFF1A(a, b, c)\uFF09\uFF0C\u800C\u975E\u5BF9\u8C61\u53C2\u6570\uFF08\u5F62\u5982\uFF1A({ a, b, c })\uFF09\u3002\u987A\u5E8F\u53C2\u6570\u5982\u4E0B\uFF0C")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570\u7C7B\u578B")]),t("th",[e._v("\u53C2\u6570\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u53C2\u6570\u8BF4\u660E")])])]),t("tbody",[t("tr",[t("td",[e._v("options")]),t("td",[e._v("Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("boolean | TdLoadingProps")])])])])]),t("p",[e._v("\u63D2\u4EF6\u8FD4\u56DE\u503C\uFF1A"),t("code",[e._v("LoadingInstance\u3010interface LoadingInstance { hide: () => void }\u3011")])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173")]),t("ol",{staticClass:"tdesign-toc_list"})]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[e._v("\u5F53\u9875\u9762\u5C40\u90E8\u6216\u5168\u90E8\u5904\u4E8E\u6570\u636E\u5904\u7406\u7684\u7B49\u5F85\u4E2D\uFF0C\u9700\u8981\u8BA9\u7528\u6237\u6E05\u6670\u611F\u77E5\u5230\u5F53\u524D\u72B6\u6001\u65F6\u3002")]),t("h3",{attrs:{id:"\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}},[e._v("\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0E\u9875\u9762\u5E03\u5C40\u76F8\u5173"}})]),t("h5",{attrs:{id:"\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u52A0\u8F7D\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002"}},[e._v("\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u52A0\u8F7D\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u52A0\u8F7D\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("h5"),t("img",{attrs:{src:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/loading-1@2x.png"}}),t("em")])]),t("hr"),t("h5",{attrs:{id:"\u5C40\u90E8\u6587\u672C\u6216\u56FE\u7247\u5143\u7D20\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u5143\u7D20\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002"}},[e._v("\u5C40\u90E8\u6587\u672C\u6216\u56FE\u7247\u5143\u7D20\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u5143\u7D20\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5C40\u90E8\u6587\u672C\u6216\u56FE\u7247\u5143\u7D20\u52A0\u8F7D\u65F6\uFF0C\u4F4D\u4E8E\u5143\u7D20\u5185\u5BB9\u533A\u57DF\u7684\u6B63\u4E2D\u95F4\u3002"}})]),t("div",{staticClass:"legend"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/design/loading-2@2x.png"}})]),t("div",{staticClass:"item"})]),t("h3",{attrs:{id:"\u76F8\u4F3C\u7EC4\u4EF6"}},[e._v("\u76F8\u4F3C\u7EC4\u4EF6 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u76F8\u4F3C\u7EC4\u4EF6"}})]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("\u7EC4\u4EF6\u540D")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./loading"}},[e._v("\u52A0\u8F7D\u4E2D")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u5F53\u9875\u9762\u5C40\u90E8\u6216\u5168\u90E8\u5904\u4E8E\u6570\u636E\u5904\u7406\u7684\u7B49\u5F85\u4E2D\uFF0C\u9700\u8981\u8BA9\u7528\u6237\u6E05\u6670\u611F\u77E5\u5230\u5F53\u524D\u72B6\u6001\u65F6\u3002")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"./progress"}},[e._v("\u8FDB\u5EA6\u6761")])]),t("td",{staticStyle:{"text-align":"left"}},[e._v("\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u65F6\u3002")])])])])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{attrs:{time:"1669534029906"}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},P=[];const F={components:{Usage:n,Demoexamplebase:l,Demoexampletext:r,Demoexampleicontext:c,Demoexamplesize:m,Demoexamplewrap:_,Demoexampledelay:v,Demoexamplefullscreen:g,Demoexampleservice:p,Demoexampleattach:$},data(){return{DemoexamplebaseCode:h,DemoexampletextCode:C,DemoexampleicontextCode:u,DemoexamplesizeCode:x,DemoexamplewrapCode:b,DemoexampledelayCode:f,DemoexamplefullscreenCode:D,DemoexampleserviceCode:y,DemoexampleattachCode:I}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:t}=this.$refs;a&&(a.docInfo={title:"Loading \u52A0\u8F7D\u4E2D",desc:"\u5728\u7F51\u7EDC\u8F83\u6162\u6216\u6570\u636E\u8F83\u591A\u65F6\uFF0C\u8868\u793A\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u7684\u72B6\u6001\u3002"}),document.title="Loading \u52A0\u8F7D\u4E2D | TDesign Custom",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:s})=>this.tab=s),S.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}},i={};var q=d(F,L,P,!1,A,null,null,null);function A(e){for(let a in i)this[a]=i[a]}const R=function(){return q.exports}();export{R as default};
