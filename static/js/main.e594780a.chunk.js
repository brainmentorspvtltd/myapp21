(this.webpackJsonpgreetapp=this.webpackJsonpgreetapp||[]).push([[0],{14:function(t,e,s){"use strict";s.r(e);var n=s(3),a=s(4),c=s(5),r=s(8),i=s(7),o=s(1),l=s(0),u=function(t){var e=t.txt,s=t.name,n=t.input,a="Type ".concat(e);return Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:e}),Object(l.jsx)("input",{onChange:function(t){n(t,s)},className:"form-control",type:"text",placeholder:a})]})},j=function(t){var e="btn ".concat(t.myclass);return Object(l.jsxs)("button",{onClick:t.call,className:e,children:[t.text," "]})},p=function(t){return Object(l.jsxs)("h2",{children:[t.msg," "]})},b=function(){return Object(l.jsx)("h1",{className:"alert-info text-center",children:"Greet App"})},h=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){var t;return Object(a.a)(this,s),(t=e.call(this)).inputs={first:"",last:""},t.message="",t.state={message:t.message,a:10,b:20},console.log("State ",t.state),t}return Object(c.a)(s,[{key:"properCase",value:function(t){return t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()}},{key:"sayWelcome",value:function(){var t=this.properCase(this.inputs.first),e=this.properCase(this.inputs.last);this.message="Welcome ".concat(t," ").concat(e),this.setState(Object(n.a)(Object(n.a)({},this.state),{},{message:this.message})),console.log(this.message)}},{key:"takeInput",value:function(t,e){this.inputs[e]=t.target.value}},{key:"render",value:function(){return console.log("Render Called..."),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{}),Object(l.jsx)(u,{name:"first",input:this.takeInput.bind(this),txt:"First Name"}),Object(l.jsx)(u,{name:"last",input:this.takeInput.bind(this),txt:"Last Name"}),Object(l.jsx)("br",{}),Object(l.jsx)(j,{call:this.sayWelcome.bind(this),myclass:"btn-primary",text:"Greet"})," \xa0",Object(l.jsx)(j,{myclass:"btn-secondary",text:"Clear All"}),Object(l.jsx)(p,{msg:this.state.message})]})}}]),s}(o.Component),m=function(){return Object(l.jsx)(h,{})},x=s(6);s.n(x).a.render(Object(l.jsx)(m,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e594780a.chunk.js.map