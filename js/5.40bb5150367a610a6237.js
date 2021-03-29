(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{404:function(e,t,s){},405:function(e,t,s){"use strict";s(404)},406:function(e,t,s){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[t("v-container",{staticClass:"py-0 fill-height"},[t("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}}),this._v(" "),this._t("items"),this._v(" "),t("v-spacer"),this._v(" "),this._t("endItems")],2)],1)};n._withStripped=!0;var a={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},r=s(114),i=Object(r.a)(a,n,[],!1,null,"36ecb3f0",null);i.options.__file="src/vue/page/components/Header.vue";t.a=i.exports},407:function(e,t,s){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"CaseInquiry"},"active-class":"active"}},[this._v("案件查詢")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Report"},"active-class":"active"}},[this._v("報表")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectSite"},"active-class":"active"}},[this._v("檢測站點")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectDate"},"active-class":"active"}},[this._v("檢測日期")])],1)};n._withStripped=!0;var a={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},r=(s(405),s(114)),i=Object(r.a)(a,n,[],!1,null,"8288bad6",null);i.options.__file="src/vue/page/components/Items.vue";t.a=i.exports},408:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e._t("content")],2)};n._withStripped=!0;var a={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var e=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){e.isOpen&&e.$vuetify.breakpoint.mdAndUp&&(e.isOpen=!1)}),300)}},computed:{}},r=s(114),i=Object(r.a)(a,n,[],!1,null,"503b7cf1",null);i.options.__file="src/vue/page/components/Sidebar.vue";t.a=i.exports},440:function(e,t){},442:function(e,t,s){},454:function(e,t){},455:function(e,t){},463:function(e,t,s){"use strict";s(442)},466:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-sheet",[s("Header",{scopedSlots:e._u([{key:"items",fn:function(){return[s("Items",{staticClass:"d-none d-md-flex"})]},proxy:!0},{key:"endItems",fn:function(){return[s("v-btn",{staticClass:"d-none d-md-flex cyan white--text",attrs:{depressed:"",to:"/login"}},[e._v("登出")]),e._v(" "),s("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(t){e.$refs.sidebar.isOpen=!e.$refs.sidebar.isOpen}}})]},proxy:!0}])}),e._v(" "),s("v-main",{staticClass:"main"},[s("v-container",[s("v-toolbar",{staticClass:"my-2",attrs:{flat:""}},[s("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[s("v-text-field",e._g(e._b({staticClass:"mx-2 mt-4",attrs:{label:"起始日期","persistent-hint":"","prepend-icon":"mdi-calendar",color:"cyan"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}},"v-text-field",a,!1),n))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[e._v(" "),s("v-date-picker",{attrs:{"no-title":"",color:"cyan"},on:{change:e.startDate_change},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1),e._v(" "),s("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[s("v-text-field",e._g(e._b({staticClass:"mx-2 mt-4",attrs:{label:"結束日期","persistent-hint":"","prepend-icon":"mdi-calendar",color:"cyan"},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}},"v-text-field",a,!1),n))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),s("v-date-picker",{attrs:{"no-title":"",color:"cyan"},on:{change:e.endDate_change},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1),e._v(" "),s("v-select",{staticClass:"mx-2 mt-4",attrs:{color:"cyan",items:e.statusList,label:"狀態"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[s("div",{staticClass:"fluid w-100 text-truncate"},[e._v(e._s(n.text))])]}},{key:"item",fn:function(t){var n=t.item,a=t.attrs,r=t.on;return[s("v-list-item",e._g(e._b({},"v-list-item",a,!1),r),[s("v-list-item-content",[s("v-list-item-title",{attrs:{id:a["aria-labelledby"]},domProps:{textContent:e._s(n.text)}})],1)],1)]}}]),model:{value:e.statusValue,callback:function(t){e.statusValue=t},expression:"statusValue"}}),e._v(" "),s("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""}},[e._v("查詢")]),e._v(" "),s("v-spacer")],1),e._v(" "),s("v-toolbar",{staticClass:"my-2",attrs:{flat:""}},[s("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:e.csvExport_click}},[e._v("匯出csv")]),e._v(" "),s("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:e.addItem}},[e._v("新增")]),e._v(" "),s("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:e.csvImport_click}},[e._v("匯入csv")])],1),e._v(" "),s("v-data-table",{attrs:{headers:e.headers,items:e.desserts,"items-per-page":15},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[s("div",{staticClass:"ma-2"},[s("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")]),e._v(" "),s("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("mdi-delete")])],1)]}}])})],1)],1),e._v(" "),s("ReportNewItem",{ref:"newItem",on:{save:e.reportNewItem_save}}),e._v(" "),s("ReportEditItem",{ref:"editItem",on:{save:e.reportEditItem_save}}),e._v(" "),s("Sidebar",{ref:"sidebar",scopedSlots:e._u([{key:"content",fn:function(){return[s("div",{staticClass:"d-flex pa-4"},[s("v-btn",{staticClass:"cyan white--text",attrs:{depressed:"",to:"/login"}},[e._v("登出")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-icon",{on:{click:function(t){e.$refs.sidebar.isOpen=!1}}},[e._v("\n          mdi-close\n        ")])],1),e._v(" "),s("Items",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};n._withStripped=!0;var a=s(406),r=s(407),i=s(408),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("v-card",[s("v-card-title",{staticClass:"justify-center"},[s("span",{staticClass:"headline"},[e._v("新增")])]),e._v(" "),s("v-card-text",[s("v-container",[s("div",{staticClass:"row"},[e._l(e.items,(function(t,n){return[s("v-text-field",{key:"item"+n,class:t.class,attrs:{label:t.label,"error-messages":t.errors(e.$v.data[n])},model:{value:e.data[n],callback:function(t){e.$set(e.data,n,t)},expression:"data[key]"}})]}))],2)])],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.cancelItem(e.items)}}},[e._v("\n        取消\n      ")]),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.saveItem(e.items)}}},[e._v("\n        儲存\n      ")])],1)],1)],1)};c._withStripped=!0;var o=s(409),d=s(115),l={mixins:[d.validationMixin],components:{},validations:{data:{name:{required:o.required},id:{required:o.required},license_plate_number:{required:o.required},address:{required:o.required},document_number:{required:o.required},subscribe_date:{required:o.required},extension_date:{required:o.required},detect_location:{required:o.required},detect_status:{required:o.required}}},data:function(){return{data:{},items:{name:{label:"姓名",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},id:{label:"身分證/公司行號",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},license_plate_number:{label:"車牌號",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},address:{label:"地址",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},document_number:{label:"公文號",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},subscribe_date:{label:"預約日期",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},extension_date:{label:"展延日期",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},detect_location:{label:"檢測地點",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},detect_status:{label:"到檢狀態",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}}},show:!1}},mounted:function(){},methods:{reset:function(){this.$v.data.$reset(),this.data={}},cancelItem:function(e){this.show=!1},saveItem:function(e){this.$v.data.$touch(),this.$v.data.$error||(alert("儲存"),this.$emit("save",this.data),this.show=!1)}},computed:{}},u=s(114),v=Object(u.a)(l,c,[],!1,null,"06e9ff54",null);v.options.__file="src/vue/page/components/ReportNewItem.vue";var m=v.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("v-card",[s("v-card-title",{staticClass:"justify-center"},[s("span",{staticClass:"headline"},[e._v("修改")])]),e._v(" "),s("v-card-text",[s("v-container",[s("div",{staticClass:"row"},[e._l(e.items,(function(t,n){return[s("v-text-field",{key:"item"+n,class:t.class,attrs:{label:t.label,"error-messages":t.errors(e.$v.data[n])},model:{value:e.data[n],callback:function(t){e.$set(e.data,n,t)},expression:"data[key]"}})]}))],2)])],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.cancelItem(e.items)}}},[e._v("\n        取消\n      ")]),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.saveItem(e.items)}}},[e._v("\n        儲存\n      ")])],1)],1)],1)};_._withStripped=!0;var f={mixins:[d.validationMixin],components:{},validations:{data:{name:{required:o.required},id:{required:o.required},license_plate_number:{required:o.required},address:{required:o.required},document_number:{required:o.required},subscribe_date:{required:o.required},extension_date:{required:o.required},detect_location:{required:o.required},detect_status:{required:o.required}}},data:function(){return{data:{},items:{name:{label:"姓名",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},id:{label:"身分證/公司行號",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},license_plate_number:{label:"車牌號",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},address:{label:"地址",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},document_number:{label:"公文號",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},subscribe_date:{label:"預約日期",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},extension_date:{label:"展延日期",class:"col-12 col-sm-6",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},detect_location:{label:"檢測地點",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}},detect_status:{label:"到檢狀態",class:"col-12",errors:function(e){if(e.$dirty)return e.required?void 0:"請填寫這個欄位。"}}},show:!1}},mounted:function(){},methods:{reset:function(){this.$v.data.$reset(),this.data={}},update:function(e){for(var t in e)this.data[t]=e[t]},cancelItem:function(e){this.show=!1},saveItem:function(e){this.$v.data.$touch(),this.$v.data.$error||(alert("儲存"),this.$emit("save",this.data),this.show=!1)}},computed:{}},p=Object(u.a)(f,_,[],!1,null,"24081c0c",null);p.options.__file="src/vue/page/components/ReportEditItem.vue";var b=p.exports,x=(s(449),s(438)),h=s.n(x);s(456),s(461),s(462);console.log(h.a);var w={components:{Header:a.a,Items:r.a,Sidebar:i.a,ReportNewItem:m,ReportEditItem:b},data:function(){return{date1:(new Date).toISOString().substr(0,10),date2:(new Date).toISOString().substr(0,10),menu1:!1,menu2:!1,statusValue:{text:"全部",key:"all"},statusList:[{text:"全部",key:"all"},{text:"預約",key:"reservation"},{text:"展延",key:"extension"}],headers:[{text:"姓名",value:"name"},{text:"身分證/公司行號",value:"id"},{text:"車牌號",value:"license_plate_number"},{text:"地址",value:"address"},{text:"公文號",value:"document_number"},{text:"預約日期",value:"subscribe_date"},{text:"展延日期",value:"extension_date"},{text:"檢測地點",value:"detect_location"},{text:"到檢狀態",value:"detect_status"},{text:"動作",value:"actions",sortable:!1}],desserts:[{name:"中文字",id:"056564566666",license_plate_number:"12453",address:"adsasa",document_number:"asd",subscribe_date:"sd",extension_date:"sd",detect_location:"asd",detect_status:"ewe"},{name:"XXX",id:"1",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"2",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"3",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"4",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"5",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"6",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""},{name:"XXX",id:"7",license_plate_number:"",address:"",document_number:"",subscribe_date:"",extension_date:"",detect_location:"",detect_status:""}]}},mounted:function(){},methods:{addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},editItem:function(e){this.$refs.editItem.reset(),this.$refs.editItem.update(e),this.$refs.editItem.show=!0},deleteItem:function(e){},reportNewItem_save:function(e){console.log("aaaa",e)},reportEditItem_save:function(e){console.log("aaaa",e)},startDate_change:function(){},endDate_change:function(){},csvImport_click:function(){new Promise((function(e,t){var s=document.createElement("input");s.type="file",s.accept=".csv",s.addEventListener("change",(function(){var e=new FileReader;e.onload=function(){console.log(e.result)},console.log(s.files[0]),e.readAsText(s.files[0],"big5")})),s.click()})).then((function(e){e=e.split(/[\n]/).filter((function(e){return e})).map((function(e){return e.split(/[,]/)})),console.log(e)}))},csvExport_click:function(){!function(e,t){var s=new Blob(["\ufeff"+e],{type:"text/csv;charset=big5;"}),n=URL.createObjectURL(s),a=document.createElement("a");a.href=n,a.download=t,a.click()}(function(){for(var e=[{text:"姓名",value:"name"},{text:"身分證/公司行號",value:"id"},{text:"車牌號",value:"license_plate_number"},{text:"地址",value:"address"},{text:"公文號",value:"document_number"},{text:"預約日期",value:"subscribe_date"},{text:"展延日期",value:"extension_date"},{text:"檢測地點",value:"detect_location"},{text:"到檢狀態",value:"detect_status"}],t={name:"中文字",id:"056564566666",license_plate_number:"12454545453",address:"地址地址地址",document_number:"asd",subscribe_date:"sd",extension_date:"sd",detect_location:"asd",detect_status:"ewe"},s=e.map((function(e){return e.text}))+"\n",n="",a=0;a<50;a++)n+=e.map((function(e){return t[e.value]})).toString()+"\n";return s+n}(),"資料.csv")}},computed:{}},y=(s(463),Object(u.a)(w,n,[],!1,null,"32121182",null));y.options.__file="src/vue/page/Report.vue";t.default=y.exports}}]);