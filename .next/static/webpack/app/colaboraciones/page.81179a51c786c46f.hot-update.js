"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/colaboraciones/page",{

/***/ "(app-pages-browser)/./src/app/colaboraciones/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/colaboraciones/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collaborations; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_collaborationCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/collaborationCard */ \"(app-pages-browser)/./src/components/collaborationCard.tsx\");\n/* harmony import */ var _utils_collaborationData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/collaborationData */ \"(app-pages-browser)/./src/app/utils/collaborationData.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Collaborations() {\n    _s();\n    const { publickey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    if (!publickey) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            _utils_collaborationData__WEBPACK_IMPORTED_MODULE_3__.dataTest.length == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-16 flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl text-center font-bold\",\n                        children: \"Parece que a\\xfan no has colaborado con ning\\xfan evento\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-center mt-5 mb font-bold\",\n                        children: \"\\xa1Explora los \\xfaltimos eventos en Solana y participa como colaborador!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/\",\n                        className: \"bg-indigo-300 w-50 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400\",\n                        children: \"Explorar eventos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, this),\n            _utils_collaborationData__WEBPACK_IMPORTED_MODULE_3__.dataTest.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl text-center font-bold\",\n                        children: \"Tus Colaboraciones\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-center mt-5 mb font-bold\",\n                        children: \"Recolecta tus recompenzas una vez finalizado el evento\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 px-10 mb-10 xl:grid-cols-4 sm:grid-cols-2\",\n                children: _utils_collaborationData__WEBPACK_IMPORTED_MODULE_3__.dataTest.map((event, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_collaborationCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        event_title: event.event_title,\n                        tokens_amount: event.tokens_amount,\n                        event_closed: event.event_closed\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\app\\\\colaboraciones\\\\page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Collaborations, \"/xEtlPSDp8ZgKQA1AxVKzhVYGAg=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = Collaborations;\nvar _c;\n$RefreshReg$(_c, \"Collaborations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29sYWJvcmFjaW9uZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDa0M7QUFDVDtBQUNHO0FBSTFDLFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRix1RUFBU0E7SUFFL0IsSUFBSSxDQUFDRSxXQUFVLENBQ2Y7SUFDQSxxQkFDRSw4REFBQ0M7O1lBQ0lKLDhEQUFRQSxDQUFDSyxNQUFNLElBQUksbUJBQ2xCLDhEQUFDRDtnQkFBSUUsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFpQzs7Ozs7O2tDQUMvQyw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXlDOzs7Ozs7a0NBQ3ZELDhEQUFDUixpREFBSUE7d0JBQUNXLE1BQUs7d0JBQUlILFdBQVU7a0NBQTBHOzs7Ozs7Ozs7Ozs7WUFLcklOLDhEQUFRQSxDQUFDSyxNQUFNLEdBQUcsbUJBQ2hCLDhEQUFDRDtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFpQzs7Ozs7O2tDQUMvQyw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQXlDOzs7Ozs7Ozs7Ozs7MEJBRzNELDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDWk4sOERBQVFBLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDcEIsOERBQUNiLHFFQUFpQkE7d0JBRWhCYyxhQUFhRixNQUFNRSxXQUFXO3dCQUM5QkMsZUFBZUgsTUFBTUcsYUFBYTt3QkFDbENDLGNBQWNKLE1BQU1JLFlBQVk7dUJBSDNCSDs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQjtHQWxDd0JWOztRQUNBRCxtRUFBU0E7OztLQURUQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbGFib3JhY2lvbmVzL3BhZ2UudHN4PzU1YTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENvbGxhYm9yYXRpb25DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvY29sbGFib3JhdGlvbkNhcmRcIjtcclxuaW1wb3J0IHsgZGF0YVRlc3QgfSBmcm9tIFwiLi4vdXRpbHMvY29sbGFib3JhdGlvbkRhdGFcIjtcclxuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsYWJvcmF0aW9ucygpIHtcclxuICBjb25zdCB7IHB1YmxpY2tleSB9ID0gdXNlV2FsbGV0KClcclxuXHJcbiAgaWYgKCFwdWJsaWNrZXkpeztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICB7IGRhdGFUZXN0Lmxlbmd0aCA9PSAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5QYXJlY2UgcXVlIGHDum4gbm8gaGFzIGNvbGFib3JhZG8gY29uIG5pbmfDum4gZXZlbnRvPC9oMT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBtdC01IG1iIGZvbnQtYm9sZFwiPsKhRXhwbG9yYSBsb3Mgw7psdGltb3MgZXZlbnRvcyBlbiBTb2xhbmEgeSBwYXJ0aWNpcGEgY29tbyBjb2xhYm9yYWRvciE8L2gzPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tMzAwIHctNTAgdGV4dC1ibGFjayBtdC01IGZvbnQtc2VtaWJvbGQgcHgtNCBweS0xIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNDAwXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBsb3JhciBldmVudG9zXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICkgfVxyXG4gICAgICAge2RhdGFUZXN0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNlwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+VHVzIENvbGFib3JhY2lvbmVzPC9oMT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIG10LTUgbWIgZm9udC1ib2xkXCI+UmVjb2xlY3RhIHR1cyByZWNvbXBlbnphcyB1bmEgdmV6IGZpbmFsaXphZG8gZWwgZXZlbnRvPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgcHgtMTAgbWItMTAgeGw6Z3JpZC1jb2xzLTQgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgIHtkYXRhVGVzdC5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sbGFib3JhdGlvbkNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGV2ZW50X3RpdGxlPXtldmVudC5ldmVudF90aXRsZX1cclxuICAgICAgICAgICAgICB0b2tlbnNfYW1vdW50PXtldmVudC50b2tlbnNfYW1vdW50fVxyXG4gICAgICAgICAgICAgIGV2ZW50X2Nsb3NlZD17ZXZlbnQuZXZlbnRfY2xvc2VkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkNvbGxhYm9yYXRpb25DYXJkIiwiZGF0YVRlc3QiLCJ1c2VXYWxsZXQiLCJDb2xsYWJvcmF0aW9ucyIsInB1YmxpY2tleSIsImRpdiIsImxlbmd0aCIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJocmVmIiwibWFwIiwiZXZlbnQiLCJpbmRleCIsImV2ZW50X3RpdGxlIiwidG9rZW5zX2Ftb3VudCIsImV2ZW50X2Nsb3NlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/colaboraciones/page.tsx\n"));

/***/ })

});