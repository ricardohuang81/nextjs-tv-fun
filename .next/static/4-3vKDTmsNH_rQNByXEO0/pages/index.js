(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(n,e,t){"use strict";t.r(e);var a=t("ln6h"),c=t.n(a),o=t("O40h"),r=t("MX0m"),s=t.n(r),l=t("q1tI"),i=t.n(l),u=t("3Hq7"),m=t("YFqc"),p=t.n(m),f=t("zgjP"),d=t.n(f),h=function(n){return i.a.createElement(u.a,null,i.a.createElement("h1",{className:"jsx-834034089"},"Doom Patrol"),i.a.createElement("ul",{className:"jsx-834034089"},n.cast.map(function(n,e){return i.a.createElement("li",{key:e+1,className:"jsx-834034089"},i.a.createElement(p.a,{as:"/character/".concat(n.id),href:"/post?id=".concat(n.id)},i.a.createElement("a",{className:"jsx-834034089"},n.name)),i.a.createElement("style",null,"\n            li {\n              list-style: none;\n              margin: 5px 0;\n            }\n\n            a {\n              text-decoration: none;\n              color: #FF1493;\n              font-family: monospace;\n            }\n\n            a:hover {\n              opacity: 0.6;\n            }\n          "))})),i.a.createElement(s.a,{id:"834034089"},["h1.jsx-834034089{font-family:monospace;}","li.jsx-834034089{list-style:none;margin:5px 0;}"]))};h.getInitialProps=Object(o.default)(c.a.mark(function n(){var e,t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d()("https://api.tvmaze.com/shows/36745/cast");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,console.log("Show data fetched. Count: ".concat(t.length)),n.abrupt("return",{cast:t.map(function(n){return n.character})});case 8:case"end":return n.stop()}},n)})),e.default=h},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var n=t("RNiq");return{page:n.default||n}}])},zgjP:function(n,e,t){n.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD","5d41","9da1"]]]);