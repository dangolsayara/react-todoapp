(this["webpackJsonpreact-todoapp"]=this["webpackJsonpreact-todoapp"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),s=n(6),d=n.n(s),i=(n(12),n(5)),r=n(7),a=n(0),u=function(t){var e=t.setInputText,n=t.todos,o=t.setTodos,c=t.inputText;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:c,type:"text",placeholder:"Add your task",onChange:function(t){e(t.target.value)}}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(r.a)(n),[{text:c,completed:!1,id:1e3*Math.random()}])),e("")},type:"submit",children:"Add"})]})})},j=(n(14),function(t){var e=t.text,n=t.todo,o=t.todos,c=t.setTodos;return Object(a.jsxs)("div",{className:"todo",children:[Object(a.jsx)("li",{className:"todo-item",children:e}),Object(a.jsx)("button",{onClick:function(){c(o.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:"delete"})]})}),l=function(t){var e=t.todos,n=t.setTodos;return Object(a.jsx)("div",{class:"todo-container",children:Object(a.jsx)("ul",{class:"todo-list",children:e.map((function(t){return Object(a.jsx)(j,{setTodos:n,todos:e,todo:t,text:t.text},t.id)}))})})};var b=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)([]),d=Object(i.a)(s,2),r=d[0],j=d[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{todos:r,setTodos:j,inputText:n,setInputText:c}),Object(a.jsx)(l,{todos:r,setTodos:j})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,d=e.getTTFB;n(t),o(t),c(t),s(t),d(t)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.ab00c3a8.chunk.js.map