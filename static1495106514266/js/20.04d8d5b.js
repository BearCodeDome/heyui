webpackJsonp([20],{527:function(e,t,s){var a=s(0)(s(719),s(961),null,null);a.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/view/panel.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},719:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selectAll:!1,cur:3}},methods:{currentChange:function(e){this.cur=e.cur}},components:{}}},961:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"doc"},[s("h2",[e._v("Panel 面板")]),e._v(" "),s("h3",[e._v("基础调用")]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}]},[e._m(0)]),e._v(" "),s("h3",[e._v("Panel头部自定义")]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:900,expression:"900"}]},[s("div",{staticClass:"h-panel"},[s("div",{staticClass:"h-panel-bar"},[s("span",{staticClass:"h-panel-title"},[e._v("标题")]),e._v(" "),s("div",{staticClass:"h-panel-right"},[s("Search",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],attrs:{placeholder:"查询"}}),s("i",{staticClass:"h-split"}),s("button",{staticClass:"h-btn h-btn-green h-btn-m"},[e._v("查询")])],1)]),e._v(" "),s("div",{staticClass:"h-panel-bar"},[s("Checkbox",{model:{value:e.selectAll,callback:function(t){e.selectAll=t},expression:"selectAll"}},[e._v("全选")]),s("i",{staticClass:"h-split"}),e._v(" "),s("span",{staticClass:"link",attrs:{disabled:!e.selectAll}},[e._v("下载")]),s("i",{directives:[{name:"width",rawName:"v-width",value:10,expression:"10"}],staticClass:"h-split"}),s("span",{staticClass:"link",attrs:{disabled:!e.selectAll}},[e._v("分享")]),e._v(" "),s("i",{staticClass:"h-split"}),e._v(" "),s("DropdownMenu",{attrs:{disabled:!e.selectAll,dict:"simple"}},[s("span",{staticClass:"text-hover",attrs:{disabled:!e.selectAll}},[e._v("更多")])])],1),e._v(" "),e._m(1)])]),e._v(" "),s("h3",[e._v("无边框")]),e._v(" "),s("div",{directives:[{name:"bg-color",rawName:"v-bg-color:gray2",arg:"gray2"},{name:"width",rawName:"v-width",value:400,expression:"400"},{name:"padding",rawName:"v-padding",value:20,expression:"20"}]},[e._m(2)]),e._v(" "),s("h3",[e._v("头部单独调用")]),e._v(" "),s("div",{staticClass:"h-panel-bar"},[s("span",{staticClass:"h-panel-title"},[e._v("标题")]),e._v(" "),s("span",{directives:[{name:"color",rawName:"v-color:gray",arg:"gray"},{name:"font",rawName:"v-font",value:13,expression:"13"}]},[e._v("说明~~")]),e._v(" "),s("div",{staticClass:"h-panel-right"},[s("Search",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],attrs:{placeholder:"查询"}}),s("i",{staticClass:"h-split"}),s("button",{staticClass:"h-btn h-btn-green h-btn-m"},[e._v("查询")])],1)]),e._v(" "),s("div",{staticClass:"h-panel-bar"},[s("Checkbox",{model:{value:e.selectAll,callback:function(t){e.selectAll=t},expression:"selectAll"}},[e._v("全选")]),s("i",{staticClass:"h-split"}),e._v(" "),s("span",{staticClass:"link",attrs:{disabled:!e.selectAll}},[e._v("下载")]),s("i",{directives:[{name:"width",rawName:"v-width",value:10,expression:"10"}],staticClass:"h-split"}),s("span",{staticClass:"link",attrs:{disabled:!e.selectAll}},[e._v("分享")]),e._v(" "),s("i",{staticClass:"h-split"}),e._v(" "),s("DropdownMenu",{attrs:{disabled:!e.selectAll,dict:"simple"}},[s("span",{staticClass:"text-hover",attrs:{disabled:!e.selectAll}},[e._v("更多")])]),e._v(" "),s("div",{staticClass:"h-panel-right"},[s("Pagination",{attrs:{cur:e.cur,total:68,small:!0,layout:"pager"},on:{change:e.currentChange}})],1)],1),e._v(" "),s("div",{staticClass:"h-panel-body"},[e._v("\n    content\n  ")]),e._v(" "),s("div",{directives:[{name:"padding",rawName:"v-padding",value:16,expression:"16"}]},[s("Pagination",{attrs:{cur:e.cur,total:68,small:!0,align:"right"},on:{change:e.currentChange}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-panel"},[s("div",{staticClass:"h-panel-bar"},[s("span",{staticClass:"h-panel-title"},[e._v("标题")]),e._v(" "),s("span",{staticClass:"h-panel-right"},[s("a",[e._v("More")])])]),e._v(" "),s("div",{staticClass:"h-panel-body"},[s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-panel-body"},[s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-panel h-panel-no-border"},[s("div",{staticClass:"h-panel-bar"},[s("span",{staticClass:"h-panel-title"},[e._v("标题")]),e._v(" "),s("span",{staticClass:"h-panel-right"},[s("a",[e._v("More")])])]),e._v(" "),s("div",{staticClass:"h-panel-body"},[s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")]),e._v(" "),s("p",[e._v("content")])])])}]},e.exports.render._withStripped=!0}});