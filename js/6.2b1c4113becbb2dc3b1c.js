(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{418:function(t,e,a){},419:function(t,e,a){},421:function(t,e){},422:function(t,e,a){},459:function(t,e,a){"use strict";a(418)},460:function(t,e,a){"use strict";a(419)},465:function(t,e){},466:function(t,e){},470:function(t,e,a){"use strict";a(422)},474:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"content"},[a("Header"),t._v(" "),a("v-main",{staticClass:"main"},[a("v-container",[a("v-toolbar",{staticClass:"my-2",attrs:{flat:""}},[a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"mx-2 mt-4",attrs:{label:"起始日期","persistent-hint":"","prepend-icon":"mdi-calendar",color:"cyan"},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},"v-text-field",i,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),a("v-date-picker",{attrs:{"no-title":"",color:"cyan"},on:{change:t.startDate_change},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),t._v(" "),a("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"mx-2 mt-4",attrs:{label:"結束日期","persistent-hint":"","prepend-icon":"mdi-calendar",color:"cyan"},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},"v-text-field",i,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),a("v-date-picker",{attrs:{"no-title":"",color:"cyan"},on:{change:t.endDate_change},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1),t._v(" "),a("v-select",{staticClass:"mx-2 mt-4",attrs:{color:"cyan",items:t.statusList,label:"狀態"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[a("div",{staticClass:"fluid w-100 text-truncate"},[t._v(t._s(n.text))])]}},{key:"item",fn:function(e){var n=e.item,i=e.attrs,s=e.on;return[a("v-list-item",t._g(t._b({},"v-list-item",i,!1),s),[a("v-list-item-content",[a("v-list-item-title",{attrs:{id:i["aria-labelledby"]},domProps:{textContent:t._s(n.text)}})],1)],1)]}}]),model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}}),t._v(" "),a("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:t.inquire_click}},[t._v("查詢")]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-toolbar",{staticClass:"my-2",attrs:{flat:""}},[a("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:t.itemExport_click}},[t._v("匯出")]),t._v(" "),a("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:t.addItem}},[t._v("新增")]),t._v(" "),a("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:t.itemImport_click}},[t._v("匯入")])],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.items,loading:t.dataLoading,"loading-text":"載入中...",page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[t._v(t._s(t.dataLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("div",{staticClass:"ma-2"},[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")]),t._v(" "),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("mdi-delete")])],1)]}},{key:"footer",fn:function(e){var n=e.props;return[!t.dataLoading&&t.items.length?a("Pagination",{attrs:{length:t.items.length,page:t.page,pageCount:n.pagination.pageCount,itemsPerPage:t.itemsPerPage},on:{"update:page":function(e){t.page=e},"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}}}):t._e()]}}])})],1)],1),t._v(" "),a("ReportNewItem",{ref:"newItem",on:{save:t.reportNewItem_save}}),t._v(" "),a("ReportEditItem",{ref:"editItem",on:{save:t.reportEditItem_save}}),t._v(" "),a("v-dialog",{model:{value:t.importBool,callback:function(e){t.importBool=e},expression:"importBool"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"headline"},[t._v("匯入資料")])]),t._v(" "),a("v-card-text",[a("v-data-table",{attrs:{headers:t.mainHeaders,items:t.importItems,page:t.importPage,"items-per-page":t.importItemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.importPage=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[t._v("空資料")])]},proxy:!0},{key:"footer",fn:function(e){var n=e.props;return[t.importItems.length?a("Pagination",{attrs:{length:t.importItems.length,page:t.importPage,pageCount:n.pagination.pageCount,itemsPerPage:t.importItemsPerPage},on:{"update:page":function(e){t.importPage=e},"update:itemsPerPage":function(e){t.importItemsPerPage=e},"update:items-per-page":function(e){t.importItemsPerPage=e}}}):t._e()]}}])})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItems(t.importItems)}}},[t._v("\n          取消\n        ")]),t._v(" "),t.importItems.length?a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItems(t.importItems)}}},[t._v("\n          儲存\n        ")]):t._e()],1)],1)],1),t._v(" "),a("v-overlay",{attrs:{value:t.running}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("執行中...")])],1)],1)};n._withStripped=!0;var i=a(408),s=a.n(i),r=a(403),o=a(426),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"headline"},[t._v("新增")])]),t._v(" "),a("v-card-text",[a("v-container",[a("div",{staticClass:"row"},t._l(t.items,(function(e,n){return a("TableItem",{key:"item"+n,staticClass:"pa-1",attrs:{data:t.data,items:t.items,name:n,item:e}})})),1)])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};c._withStripped=!0;var l=a(405),d=a(404),u=a(411),m=a(399),v=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d$/.test(t)},p={mixins:[d.validationMixin],components:{TableItem:u.a},validations:{data:{casenum:{required:l.required},name:{required:l.required},id:{required:l.required},carnum:{required:l.required},address:{required:l.required},reserv:{dateFormat:v},extend:{dateFormat:v},county:{},station:{},result:{}}},data:function(){var t=this;return{data:{},items:{casenum:{label:"公文號",class:"col-12",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},name:{label:"姓名",class:"col-12",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},id:{label:"身分證/公司行號",class:"col-12 col-sm-6",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},carnum:{label:"車牌號",class:"col-12 col-sm-6",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",class:"col-12",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},reserv:{label:"預約日期",class:"col-12 col-sm-6",type:"date-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateFormat?void 0:"請填寫正確格式YYYY-MM-DD"}},extend:{label:"展延日期",class:"col-12 col-sm-6",type:"date-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateFormat?void 0:"請填寫正確格式YYYY-MM-DD"}},county:{label:"縣市",class:"col-12",type:"select",list:[],loading:!1,change:function(t,e,a){delete t.station;var n=e.station;n.promise&&(n.promise.cancel(),n.promise=null),n.list=[],n.loading=!0,n.promise=Object(m.d)(t.county),n.promise.then((function(t){n.loading=!1,n.list=t}))}},station:{label:"檢測站點",class:"col-12",type:"select",display:function(t){return t.county},list:[],loading:!1,promise:null},result:{label:"檢測結果",class:"col-12"}},show:!1}},mounted:function(){var t=this;this.items.county.loading=!0,Object(m.c)().then((function(e){t.items.county.loading=!1,t.items.county.list=e}))},methods:{resetData:function(){for(var t in this.data={},this.items)this.data[t]=""},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){this.$v.data.$touch(),this.$v.data.$error||(this.$emit("save",this.data),this.show=!1)}},computed:{}},f=(a(459),a(115)),h=Object(f.a)(p,c,[],!1,null,"06e9ff54",null);h.options.__file="src/vue/page/components/ReportNewItem.vue";var g=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"headline"},[t._v("修改")])]),t._v(" "),a("v-card-text",[a("v-container",[a("div",{staticClass:"row"},t._l(t.items,(function(e,n){return a("TableItem",{key:"item"+n,staticClass:"pa-1",attrs:{data:t.data,items:t.items,name:n,item:e}})})),1)])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};_._withStripped=!0;var y=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d$/.test(t)},x={mixins:[d.validationMixin],components:{TableItem:u.a},validations:{data:{name:{},id:{required:l.required},carnum:{required:l.required},address:{},reserv:{dateFormat:y},extend:{dateFormat:y},county:{},station:{},result:{}}},data:function(){var t=this;return{originalData:{},data:{},items:{name:{label:"姓名",class:"col-12"},id:{label:"身分證/公司行號",class:"col-12 col-sm-6",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},carnum:{label:"車牌號",class:"col-12 col-sm-6",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",class:"col-12"},reserv:{label:"預約日期",class:"col-12 col-sm-6",type:"date-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateFormat?void 0:"請填寫正確格式YYYY-MM-DD"}},extend:{label:"展延日期",class:"col-12 col-sm-6",type:"date-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateFormat?void 0:"請填寫正確格式YYYY-MM-DD"}},county:{label:"縣市",class:"col-12",type:"select",list:[],loading:!1,change:function(t,e,a){delete t.station;var n=e.station;n.promise&&(n.promise.cancel(),n.promise=null),n.list=[],n.loading=!0,n.promise=Object(m.d)(t.county),n.promise.then((function(t){n.loading=!1,n.list=t}))}},station:{label:"檢測站點",class:"col-12",type:"select",display:function(t){return t.county},list:[],loading:!1,promise:null},result:{label:"檢測結果",class:"col-12"}},show:!1}},mounted:function(){var t=this;this.items.county.loading=!0,Object(m.c)().then((function(e){t.items.county.loading=!1,t.items.county.list=e}))},methods:{put:function(t){if(this.originalData=JSON.parse(JSON.stringify(t)),this.data=JSON.parse(JSON.stringify(t)),this.data.county){var e=this.items.station;e.promise&&(e.promise.cancel(),e.promise=null),e.list=[],e.loading=!0,e.promise=Object(m.d)(this.data.county),e.promise.then((function(t){e.loading=!1,e.list=t}))}},reset:function(){this.$v.data.$reset(),this.data={}},cancelItem:function(t){this.show=!1},saveItem:function(t){if(this.$v.data.$touch(),!this.$v.data.$error){this.show=!1;var e={},a=!1;for(var n in this.originalData){var i=this.originalData[n],s=this.data[n];void 0!==i&&void 0!==s&&i!==s&&(a=!0,e[n]=s)}a&&this.$emit("save",this.originalData.id,e)}}},computed:{}},b=(a(460),Object(f.a)(x,_,[],!1,null,"24081c0c",null));b.options.__file="src/vue/page/components/ReportEditItem.vue";var I=b.exports,w=a(409),k=a.n(w),$=a(467),P=a.n($),S=a(468),C=a.n(S),q=a(469),D=a.n(q),O=function(){function t(){if(C()(this,t),!(this instanceof t))return new t;this.SheetNames=[],this.Sheets={},this.wopts={bookType:"xlsx",bookSST:!1,type:"binary"}}return D()(t,[{key:"appendSheet",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sheet".concat(this.SheetNames.length+1);this.SheetNames=[].concat(s()(this.SheetNames),[e]),this.Sheets[e]=t}},{key:"toBlob",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.wopts;function e(t){for(var e=new ArrayBuffer(t.length),a=new Uint8Array(e),n=0;n!==t.length;++n)a[n]=255&t.charCodeAt(n);return e}var a=k.a.write(this,t),n=new Blob([e(a)],{type:"application/octet-stream"});return n}},{key:"isEmpty",value:function(){return!this.SheetNames.length&&JSON.stringify("{}"===this.Sheets)}}]),t}(),j={components:{Header:r.a,Pagination:o.a,ReportNewItem:g,ReportEditItem:I},data:function(){return{page:1,itemsPerPage:15,importPage:1,importItemsPerPage:15,date1:(new Date).toISOString().substr(0,10),date2:(new Date).toISOString().substr(0,10),menu1:!1,menu2:!1,statusValue:{text:"全部",key:"all"},statusList:[{text:"全部",key:"all"},{text:"預約",key:"reservation"},{text:"展延",key:"extension"}],importBool:!1,headers:[{text:"公文號",value:"casenum"},{text:"姓名",value:"name"},{text:"身分證/公司行號",value:"id"},{text:"車牌號",value:"carnum"},{text:"地址",value:"address"},{text:"預約日期",value:"reserv"},{text:"展延日期",value:"extend"},{text:"檢測縣市",value:"county"},{text:"檢測站點",value:"station"},{text:"檢測結果",value:"result"},{text:"動作",value:"actions",sortable:!1}],items:[],importItems:[],dataLoading:!1,running:!1}},mounted:function(){},methods:{county_change:function(){this.stationUpdate()},stationUpdate:function(){var t=this;this.stationList=[],this.stationLoading=!0,api_getStationList(this.countyValue).then((function(e){t.stationLoading=!1,t.stationList=e}))},updateInquire:function(){var t=this;this.dataLoading||(this.dataLoading=!0,Object(m.f)(this.date1,this.date2).then((function(e){t.dataLoading=!1,t.items=e})))},addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},editItem:function(t){this.$refs.editItem.reset(),this.$refs.editItem.put(t),this.$refs.editItem.show=!0},deleteItem:function(t){Object(m.b)(t.id).then((function(){console.log("delete")}))},reportNewItem_save:function(t){var e=this;this.running=!0,Object(m.j)(t).then((function(){e.running=!1,console.log("new",t)}))},reportEditItem_save:function(t,e){var a=this,n=this.items.find((function(e){return e.id===t}));for(var i in e)void 0!==n[i]&&(n[i]=e[i]);this.running=!0,Object(m.h)(t,e).then((function(){a.running=!1,console.log("edit",e)}))},startDate_change:function(){},endDate_change:function(){},itemImport_click:function(){var t=this;new Promise((function(t,e){var a=document.createElement("input");a.type="file",a.accept=".xls,.xlsx",a.addEventListener("change",(function(){var e=new FileReader;e.onload=function(){var a=k.a.read(e.result,{type:"array"}),n=a.Sheets[a.SheetNames[0]];t(n)},e.readAsArrayBuffer(a.files[0])})),a.click()})).then((function(e){"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").every((function(a){var n=e[a+"1"];if(!n)return!1;var i=t.mainHeaders.find((function(t){return t.text===n.v}));return i&&(n.v=n.h=n.w=i.value),!0})),t.importItems=k.a.utils.sheet_to_json(e),t.importBool=!0}))},itemExport_click:function(){var t,e,a,n,i,r,o,c;i=this.mainHeaders,r=this.items,o=i.map((function(t){return t.text})),c=r.map((function(t){return i.map((function(e){return t[e.value]}))})),t=[o].concat(s()(c)),e="資料.xlsx",a=k.a.utils.aoa_to_sheet(t),(n=new O).appendSheet(a,"mySheet"),P.a.saveAs(n.toBlob(),e)},cancelItems:function(){this.importBool=!1,this.importItems=[]},saveItems:function(){var t=this,e=[].concat(s()(this.importItems),s()(this.items));this.importBool=!1,this.running=!0,Object(m.k)(e).then((function(){t.running=!1,t.items=e,t.importItems=[]}))},inquire_click:function(){this.updateInquire()}},computed:{mainHeaders:function(){return this.headers.filter((function(t){return-1==="actions".indexOf(t.value)}))}}},N=(a(470),Object(f.a)(j,n,[],!1,null,"32121182",null));N.options.__file="src/vue/page/Report.vue";e.default=N.exports}}]);