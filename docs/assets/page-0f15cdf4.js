import{_ as u,l,m as s,o as r,c as d,b as e,w as t,a as _,n as p,r as f,g as c}from"./index-7e0dfc09.js";import g from"./file-26ad7697.js";import P from"./folder-3b6bc6c7.js";import"./el-select-50e5caa5.js";import"./validator-46b4afcb.js";/* empty css                   */import"./index-51657c15.js";const h={components:{ElMenu:l,ElMenuItem:s,Page1:P,Page2:g},data(){return{currentPage:"Page1"}},methods:{handleSelect(a){this.currentPage=a}}};function x(a,v,B,S,o,m){const n=s,i=l;return r(),d("div",null,[e(i,{mode:"horizontal",onSelect:m.handleSelect,"default-active":o.currentPage},{default:t(()=>[e(n,{index:"Page1"},{default:t(()=>[c("文件夹管理")]),_:1}),e(n,{index:"Page2"},{default:t(()=>[c("文件管理")]),_:1})]),_:1},8,["onSelect","default-active"]),_("div",null,[(r(),p(f(o.currentPage)))])])}const b=u(h,[["render",x]]);export{b as default};