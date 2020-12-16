(this.webpackJsonpsandboxr=this.webpackJsonpsandboxr||[]).push([[0],{20:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e(1),r=e.n(o),a=e(9),c=e.n(a),d=e(2),l=e(3);function s(){var n=Object(d.a)(['\n  /* cardTitle */\n\n  position: static;\n  width: 280px;\n  height: 49px;\n  left: 12px;\n  top: 12px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0;\n\n  font-family: "Lora", serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 36px;\n\n  color: #fcfcfc;\n']);return s=function(){return n},n}var h=l.a.div(s());function p(n){var t=n.title;return Object(i.jsx)(h,{children:t})}function u(){var n=Object(d.a)(['\n  /* body */\n\n  position: static;\n  width: 280px;\n  height: 34px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 0px 0px;\n\n  font-family: "Lato", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  //   line-height: 13px;\n\n  color: #fcfcfc;\n']);return u=function(){return n},n}var f=l.a.div(u());function m(n){var t=n.description;return Object(i.jsx)(f,{children:t})}function x(){var n=Object(d.a)(["\n  /* CardBody */\n\n  /* Auto Layout */\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.75em;\n\n  position: relative;\n  width: 299px;\n  height: 125px;\n  margin: 0;\n"]);return x=function(){return n},n}var g=l.a.div(x());function b(n){var t=n.title,e=n.description;return Object(i.jsxs)(g,{children:[Object(i.jsx)(m,{description:e}),Object(i.jsx)(p,{title:t})]})}function j(){var n=Object(d.a)(["\n  position: relative;\n  width: 300px;\n  height: 287px;\n  left: 0px;\n  top: 0px;\n\n  background: url(.jpg);\n  border-radius: 1.25em;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0px 0px;\n"]);return j=function(){return n},n}var v=l.a.div(j());function w(n){var t=n.imgURL;return Object(i.jsx)(v,{children:Object(i.jsx)("img",{src:t})})}function O(){var n=Object(d.a)(["\n  width: 32%;\n  padding-bottom: 3%; /* Same as width, sets height */\n  padding-top: 3%; /* Same as width, sets height */\n  margin-bottom: 2%; /* (100-32*3)/2 */\n\n  display: flex;\n  flex-direction: column;\n  align-items: middle;\n  padding: 0px;\n\n  position: relative;\n  width: 18.75em;\n  height: 25.8125em;\n  left: calc(50% - 18.75em / 2);\n  top: calc(50% - 25.8125em / 2 - 0.5px);\n\n  background: #333333;\n  border: 10px solid #000000;\n  box-shadow: 1.25em 1.25em 0.25em #623cea;\n  border-radius: 1.25em;\n\n  &:hover {\n    box-shadow: 2em 2em 0.25em #623cea;\n  }\n"]);return O=function(){return n},n}var y=l.a.div(O());function L(n){var t=n.cardInfo;return Object(i.jsx)(y,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{imgURL:t.imgURL}),Object(i.jsx)(b,{title:t.title,description:t.description})]})})}e(8);var k=Object.freeze([{title:"{{Lothian, Skyline}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/LothianSky.gif",description:"360 degree memory of a sunrise over a beautiful horse farm in Lothian, MD.",link:"https://lothian-memory.glitch.me"},{title:"{{Sandbox}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/ogsandboxsky.gif",description:"An early project for testing our asset deployment and aframe sky. Featuring Annapolis, MD.",link:"https://angellxr.github.io/oldsandbox/"},{title:"{{Dove Hill}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/dovehill.gif",description:"360 degree memory over a beautiful horse farm in Edgewater, MD.",link:"https://edgewater-dream.glitch.me/"},{title:"{{ChessVR}}",imgURL:"http://www.fillmurray.com/300/280",description:"aframe Chess, because we can.",link:"https://chessvr.glitch.me/"},{title:"{{Hounds, Sunset}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/houndwalk.gif",description:"Aerial view of a Marlboro Hunt Club hound walk, Fall 2020",link:"https://marlboro-hounds.glitch.me/"}]);function R(){var n=Object(d.a)(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  //   width: 1080px;\n\n  /* Smartphones (landscape and portrait) ----------- */\n  @media (min-device-width: 320px) and (max-device-width: 480px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return R=function(){return n},n}var A=l.a.div(R());function S(n){return Object(i.jsx)(A,{children:Object(i.jsx)("div",{class:"cardgrid",children:k.map((function(n){return Object(i.jsx)("a",{href:n.link,children:Object(i.jsxs)("div",{className:"item",children:[" ",Object(i.jsx)(L,{cardInfo:n})," "]})})}))})})}function U(){var n=Object(d.a)(["\n  position: relative;\n  left: 2%;\n  right: 0%;\n  top: 0%;\n  bottom: 1.28%;\n\n  font-family: Lora;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 120px;\n  line-height: 154px;\n  /* identical to box height */\n\n  color: #030303;\n"]);return U=function(){return n},n}var I=l.a.div(U());function C(n){n.props;return Object(i.jsx)(I,{children:"XR Collective"})}var M="375px",z="425px",D="768px",H="1024px",B="1440px",E="2560px";"(min-width: ".concat("320px",")"),"(min-width: ".concat(M,")"),"(min-width: ".concat(z,")"),"(min-width: ".concat(D,")"),"(min-width: ".concat(H,")"),"(min-width: ".concat(B,")"),"(min-width: ".concat(E,")"),"(min-width: ".concat(E,")");var F=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("body",{children:[Object(i.jsx)(C,{}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://angellxr.com/",children:"back to angellxr.com"})}),Object(i.jsx)("div",{children:Object(i.jsx)(S,{})})]})})};e(20);c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))},8:function(n,t,e){}},[[21,1,2]]]);
//# sourceMappingURL=main.531d1463.chunk.js.map