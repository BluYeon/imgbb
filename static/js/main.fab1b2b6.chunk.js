(this.webpackJsonpimgbb=this.webpackJsonpimgbb||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),i=n.n(r),s=n(5),o=n.n(s),u=(n(13),n(14),n(4)),j=n.n(u),l=n(6),a=n(2),d=n(7);var b=function(t){var e=t.text,n=t.count,r=i.a.useState("Copy"),s=Object(a.a)(r,2),o=s[0],u=s[1];i.a.useEffect((function(){u("Copy")}),[t]);var j="copy ".concat(n.toString());return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e}),Object(c.jsx)("td",{children:Object(c.jsx)(d.CopyToClipboard,{text:e,children:Object(c.jsx)("button",{id:j,onClick:function(){return u("Copied")},children:o})})})]})};var x=function(t){var e=t.content.map((function(t,e){return Object(c.jsx)(b,{text:t.url,count:e,copytxt:"Copy"},e)}));return Object(c.jsxs)("table",{style:{border:"1px solid black"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Content"}),Object(c.jsx)("th",{children:"Action"})]})}),Object(c.jsx)("tbody",{children:e})]})};var p=function(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1];function s(){return(s=Object(l.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("content").value,n=[],e.split("\n").forEach((function(t,e){t.includes("jpg")?n.push({text:"Copy",url:t.slice(t.indexOf("src=")+5,t.indexOf("jpg")+3)}):n.push({text:"Copy",url:t.slice(t.indexOf("src=")+5,t.indexOf("png")+3)})})),t.next=6,i(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(c.jsx)("textarea",{id:"content",rows:"50",cols:"50"}),Object(c.jsx)("button",{onClick:function(){return s.apply(this,arguments)},children:"Submit"})]}),Object(c.jsx)(x,{content:n})]})};var h=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.fab1b2b6.chunk.js.map