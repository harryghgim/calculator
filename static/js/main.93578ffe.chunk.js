(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_gwanghyeongim_Documents_Projects_freecodecamp_frontendprojects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_App_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),Calculator=function Calculator(){var OPERATORS=["/","*","-","+"],_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(_Users_gwanghyeongim_Documents_Projects_freecodecamp_frontendprojects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),str=_useState2[0],setStr=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState4=Object(_Users_gwanghyeongim_Documents_Projects_freecodecamp_frontendprojects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState6=Object(_Users_gwanghyeongim_Documents_Projects_freecodecamp_frontendprojects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),hasDot=_useState6[0],setHasDot=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState8=Object(_Users_gwanghyeongim_Documents_Projects_freecodecamp_frontendprojects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),operator=_useState8[0],setOperator=_useState8[1];function handleDot(_){var e=str.slice(-1),t=OPERATORS.includes(e)?"0.":".";if(hasDot)return!1;setStr((function(_){return _+t})),setHasDot(!0)}function handleNumber(_){var e=_.target.textContent;setStr("0"===str||str===result?e:function(_){return _+e})}function handleEqual(e){var condition=OPERATORS.some((function(_){return str.endsWith(_)}));if(condition)return!1;setResult((function(){return eval(str).toString()})),setStr("".concat(eval(str))),setOperator(null),setHasDot(!1)}function handleAC(_){setStr("0"),setResult("0"),setHasDot(!1),setOperator(null)}function handleBackspace(_){str.match(/.*[/*-+.]$/g)&&setHasDot(!1),setStr((function(_){return str.match(/^-\d$/g)||1===_.length?"0":_.slice(0,-1)}))}var handleOperation=function(_){var e=_.target.textContent;if(str.match(/.*[0-9.]$/g))setStr((function(_){return _+e}));else{var t=(operator+e).match(/^[/*]-$/g);t?(e=t[0],setStr(str.slice(0,-1)+e)):1===operator.length&&operator!==e?setStr((function(_){return _.slice(0,-1)+e})):2===operator.length&&operator!==e&&setStr(str.slice(0,-2)+e)}setOperator(e),setHasDot(!1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"display-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{id:"result",children:result})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{id:"display",children:str})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"numbers",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"seven",number:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"eight",number:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"nine",number:"9"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"four",number:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"five",number:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"six",number:"6"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"one",number:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"two",number:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"three",number:"3"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleNumber,id:"zero",number:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleDot,id:"decimal",number:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Backspace,{handler:handleBackspace})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"operators",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleOperation,id:"divide",number:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleOperation,id:"multiply",number:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleOperation,id:"add",number:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleOperation,id:"subtract",number:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleEqual,id:"equals",number:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Keypad,{handler:handleAC,id:"clear",number:"AC"})]})]})]})},Backspace=function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"backspace",onClick:_.handler,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i",{class:"fas fa-backspace"})})},Keypad=function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:_.handler,id:_.id,children:_.number})};function App(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Calculator,{})}__webpack_exports__.a=App},19:function(_,e,t){},20:function(_,e,t){},29:function(_,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),a=t(5),s=t.n(a),c=(t(19),t(11)),u=t(3),i=t(8),d=t.n(i),o=t(12);function l(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:_})}),500)}))}var O=Object(u.b)("counter/fetchCount",function(){var _=Object(o.a)(d.a.mark((function _(e){var t;return d.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,l(e);case 2:return t=_.sent,_.abrupt("return",t.data);case 4:case"end":return _.stop()}}),_)})));return function(e){return _.apply(this,arguments)}}()),E=Object(u.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(_){_.value+=1},decrement:function(_){_.value-=1},incrementByAmount:function(_,e){_.value+=e.payload}},extraReducers:function(_){_.addCase(O.pending,(function(_){_.status="loading"})).addCase(O.fulfilled,(function(_,e){_.status="idle",_.value+=e.payload}))}}),j=E.actions,m=(j.increment,j.decrement,j.incrementByAmount,E.reducer),D=Object(u.a)({reducer:{counter:m}}),b=t(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(1);s.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(b.a,{store:D,children:Object(P.jsx)(c.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.93578ffe.chunk.js.map