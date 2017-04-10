webpackJsonp([68],{333:function(t,_,v){var e=v(0)(null,v(476),null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/basic/button.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},476:function(t,_,v){t.exports={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"doc"},[v("h2",[t._v("Button 按钮")]),t._v(" "),v("h3",[t._v("原生class")]),t._v(" "),v("p",[t._v("利用基本的class实现各种button的样式")]),t._v(" "),v("example",{attrs:{demo:"button1"}}),t._v(" "),v("h3",[t._v("组件调用")]),t._v(" "),v("p",[t._v("使用基本的Button组件实现各种button的样式。")]),t._v(" "),v("example",{attrs:{demo:"button2"}}),t._v(" "),v("h3",[t._v("class 集合")]),t._v(" "),t._m(0),t._v(" "),v("h3",[t._v("Button 参数")]),t._v(" "),t._m(1),t._v(" "),v("h3",[t._v("ButtonGroup 参数")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("class")]),t._v(" "),v("th",[t._v("说明")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn")]),t._v(" "),v("td",[t._v("默认的按钮样式")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-{color}")]),t._v(" "),v("td",[t._v("有背景色的按钮，red,green,blue,yellow,primary")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-text-{color}")]),t._v(" "),v("td",[t._v("hover下，文字与边框变色的按钮，red,green,blue,yellow")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-circle")]),t._v(" "),v("td",[t._v("圆角按钮")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-icon-circle")]),t._v(" "),v("td",[t._v("圆形的图标按钮")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-{size}")]),t._v(" "),v("td",[t._v("图标的大小，l, s, xs")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-loading")]),t._v(" "),v("td",[t._v("loading状态下的按钮")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-group")]),t._v(" "),v("td",[t._v("按钮组")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-group-circle")]),t._v(" "),v("td",[t._v("圆角的按钮组")])]),t._v(" "),v("tr",[v("td",[t._v(".h-btn-group-{size}")]),t._v(" "),v("td",[t._v("按钮组的大小，l, s, xs")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("color")]),t._v(" "),v("td",[t._v("背景有颜色的按钮")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("red,green,blue,yellow,primary")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("text-color")]),t._v(" "),v("td",[t._v("hover下，文字与边框变色的按钮")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("red,green,blue,yellow")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("circle")]),t._v(" "),v("td",[t._v("是否是圆角边框")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("loading")]),t._v(" "),v("td",[t._v("是否加载中，将覆盖原有的图标")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("按钮大小")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("l, s, xs")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[t._v("是否是单纯的文字按钮")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("icon")]),t._v(" "),v("td",[t._v("引用icon")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("现有的icon库")]),t._v(" "),v("td",[t._v("-")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("circle")]),t._v(" "),v("td",[t._v("是否是圆角边框")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("按钮大小")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("l, s, xs")]),t._v(" "),v("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0}});