(this["webpackJsonpreact-simple-crud"]=this["webpackJsonpreact-simple-crud"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__2tLzj",modal:"ErrorModal_modal__u9p_E",header:"ErrorModal_header__1Vq3O",content:"ErrorModal_content__3Di-R",actions:"ErrorModal_actions__MiyVk"}},,,,,function(e,t,n){e.exports={card:"Card_card__3RCP-"}},function(e,t,n){e.exports={button:"Button_button__3_O6r"}},function(e,t,n){e.exports={input:"AddUser_input__1ru49"}},function(e,t,n){e.exports={users:"UsersList_users__20W4O"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=(n(17),n(12)),o=n(2),i=n(8),l=n.n(i),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(u.jsx)("button",{className:"".concat(b.a.button," ").concat(e.className),type:e.type||"button",onClick:e.onClick,children:e.children})},O=n(10),h=n.n(O),x=n(3),f=n.n(x),p=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:f.a.backdrop,onClick:e.onCloseError}),Object(u.jsxs)(d,{className:f.a.modal,children:[Object(u.jsx)("header",{className:f.a.header,children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("div",{className:f.a.content,children:Object(u.jsx)("p",{children:e.message})}),Object(u.jsx)("footer",{className:f.a.actions,children:Object(u.jsx)(m,{onClick:e.onCloseError,children:"Okay"})})]})]})},_=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(c.useState)(),O=Object(o.a)(b,2),x=O[0],f=O[1];return Object(u.jsxs)("div",{children:[x&&Object(u.jsx)(p,{title:x.title,message:x.message,onCloseError:function(){f("")}}),Object(u.jsx)(d,{className:h.a.input,children:Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0===r.trim().length||0===l.trim().length)f({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."});else if(+l<1)f({title:"Invalid age",message:"Please enter a valid age (> 0)."});else{var n={name:r,age:l,id:Math.floor(100*Math.random()).toString()};e.onAddUser(n),a(""),j("")}},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{id:"username",type:"text",value:r,onChange:function(e){a(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(u.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(u.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),k=function(e){var t=function(e){console.log(e.name),console.log(e.age),console.log(e.key)};return Object(u.jsx)(d,{className:v.a.users,children:Object(u.jsx)("ul",{children:e.users.map((function(e){return Object(u.jsxs)("li",{onClick:t,children:[e.name," (",e.age," years old)"]},e.id)}))})})},y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{onAddUser:function(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.length>0&&Object(u.jsx)(k,{users:n,onDeleteUser:function(e){r((function(t){return t.filter((function(t){return t.key!==e}))}))}})]})};a.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.4b0871b8.chunk.js.map