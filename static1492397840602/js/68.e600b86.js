webpackJsonp([68],{458:function(e,t,s){var a=s(0)(s(514),s(624),null,null);a.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/plugin/select.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},514:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{select7:"",param7:["选择1","选择2","选择3"],select6:"",param6:["选择1","选择2","选择3"],select1:"",param1:["选择1","选择2","选择3"],select2:[],param2:[{title:"选择1",key:"a1"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}],select3:[],param3:[{title:"选择1",key:"a1"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}],select4:null,param4:[{title:"选择1",key:"a1"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}],select5:[],param5:[{title:"选择1",key:"a1"},{title:"选择2",key:"a2"},{title:"选择3",key:"a3"}]}},methods:{gen:function(e){return"<p>标题："+e.title+"<span style=\"float:right\" class='gray1-color'>补充</span></p><p class='gray1-color'>描述："+e.title+"</p>"}},components:{}}},624:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"doc"},[s("h2",[e._v("Select 下拉选择")]),e._v(" "),s("h3",[e._v("普通下拉选择")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select6))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param6},model:{value:e.select6,callback:function(t){e.select6=t},expression:"select6"}})],1)]),e._v(" "),s("h3",[e._v("没有默认请选择选项")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select4))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param4,"null-option":!1},model:{value:e.select4,callback:function(t){e.select4=t},expression:"select4"}})],1)]),e._v(" "),s("h3",[e._v("多选")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select5))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param5,mutiple:!0},model:{value:e.select5,callback:function(t){e.select5=t},expression:"select5"}})],1)]),e._v(" "),s("h3",[e._v("选择对象值")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select1))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param1,type:"object"},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}})],1)]),e._v(" "),s("h3",[e._v("多选对象值")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select3))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param3,mutiple:!0,type:"object"},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}})],1)]),e._v(" "),s("h3",[e._v("限制数量")]),e._v(" "),s("p",[e._v("最多选中2个")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select2))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param2,mutiple:!0,limit:2},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}})],1)]),e._v(" "),s("h3",[e._v("自定义")]),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select6))]),e._v(" "),s("div",{directives:[{name:"width",rawName:"v-width",value:300,expression:"300"}]},[s("Select",{attrs:{datas:e.param6,render:e.gen},model:{value:e.select6,callback:function(t){e.select6=t},expression:"select6"}})],1)]),e._v(" "),s("h3",[e._v("文本类型的下拉")]),e._v(" "),s("p"),e._v(" "),s("div",[s("p",[e._v("选中值："+e._s(e.select7))]),e._v(" "),s("div",[e._v("状态："),s("Select",{attrs:{datas:e.param7,"no-border":!0,"null-option":!1},model:{value:e.select7,callback:function(t){e.select7=t},expression:"select7"}}),e._v("  "),s("span",{staticClass:"text-hover"},[e._v("下载")])],1)])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});