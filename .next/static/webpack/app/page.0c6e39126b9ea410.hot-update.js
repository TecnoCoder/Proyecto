"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/wallet-info.tsx":
/*!****************************************!*\
  !*** ./src/components/wallet-info.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction WalletInfo() {\n    _s();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();\n    const { publicKey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getBalance = async ()=>{\n        try {\n            if (!publicKey) {\n                throw new Error(\"Wallet is not Connected\");\n            }\n            const newBalance = await connection.getBalance(publicKey);\n            setBalance(newBalance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL);\n        } catch (e) {\n            alert(\"You're Rate limited for Airdrop\");\n        }\n    };\n    const getAirdropOnClick = async ()=>{\n        try {\n            setIsLoading(true);\n            if (!publicKey) {\n                throw new Error(\"Wallet is not Connected\");\n            }\n            const [latestBlockhash, signature] = await Promise.all([\n                connection.getLatestBlockhash(),\n                connection.requestAirdrop(publicKey, 1 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL)\n            ]);\n            const sigResult = await connection.confirmTransaction({\n                signature,\n                ...latestBlockhash\n            }, \"confirmed\");\n            if (sigResult) {\n                alert(\"Airdrop was confirmed!\");\n            }\n            setIsLoading(false);\n        } catch (e) {\n            alert(\"You are Rate limited for Airdrop\");\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (publicKey) {\n            getBalance();\n        }\n    }, [\n        publicKey,\n        connection,\n        balance\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center p-8 bg-green-100 rounded-lg shadow-md\",\n        children: publicKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-black font-semibold text-2xl\",\n                    children: \"Tu Wallet:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-black font-semibold\",\n                    children: publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-black font-semibold\",\n                    children: [\n                        balance,\n                        \" SOL\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: getAirdropOnClick,\n                            type: \"button\",\n                            className: \"bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis[50%] hover:text-white hover:bg-indigo-400 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: getBalance,\n                            type: \"button\",\n                            className: \"bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis[50%] hover:text-white hover:bg-indigo-400\",\n                            children: \"Actualizar Saldo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n            lineNumber: 64,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"flex flex-col items-center\",\n                    children: \"Conecta tu wallet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton, {\n                    style: {}\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 18\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n            lineNumber: 87,\n            columnNumber: 18\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gianf\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Proyecto\\\\src\\\\components\\\\wallet-info.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(WalletInfo, \"RfNjScJ6GiZt+WAuUpp/Wwcwb3o=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = WalletInfo;\nvar _c;\n$RefreshReg$(_c, \"WalletInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dhbGxldC1pbmZvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3FCO0FBQ0o7QUFDakI7QUFHcEMsU0FBU087O0lBQ3BCLE1BQU0sRUFBRUMsVUFBVSxFQUFDLEdBQUdMLDJFQUFhQTtJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRSxHQUFHTCx1RUFBU0E7SUFFL0IsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBVTtJQUVwRCxNQUFNWSxhQUFhO1FBQ2YsSUFBSTtZQUNBLElBQUksQ0FBQ0wsV0FBVztnQkFDWixNQUFNLElBQUlNLE1BQU07WUFDcEI7WUFDQSxNQUFNQyxhQUFhLE1BQU1SLFdBQVdNLFVBQVUsQ0FBQ0w7WUFDL0NFLFdBQVdLLGFBQWFWLDZEQUFnQkE7UUFFNUMsRUFBRSxVQUFNO1lBQ0pXLE1BQU07UUFDVjtJQUNKO0lBR0EsTUFBTUMsb0JBQW9CO1FBQ3RCLElBQUk7WUFDQUwsYUFBYTtZQUNmLElBQUksQ0FBQ0osV0FBVztnQkFDZCxNQUFNLElBQUlNLE1BQU07WUFDbEI7WUFDQSxNQUFNLENBQUNJLGlCQUFpQkMsVUFBVSxHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztnQkFDckRkLFdBQVdlLGtCQUFrQjtnQkFDN0JmLFdBQVdnQixjQUFjLENBQUNmLFdBQVcsSUFBSUgsNkRBQWdCQTthQUMxRDtZQUNELE1BQU1tQixZQUFZLE1BQU1qQixXQUFXa0Isa0JBQWtCLENBQ25EO2dCQUFFTjtnQkFBVyxHQUFHRCxlQUFlO1lBQUMsR0FDaEM7WUFFRixJQUFJTSxXQUFXO2dCQUNiUixNQUFNO1lBQ1I7WUFDQUosYUFBYTtRQUNmLEVBQUUsVUFBTTtZQUNOSSxNQUFNO1lBQ05KLGFBQWE7UUFDZjtJQUNGO0lBSUZaLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVEsV0FBVztZQUNYSztRQUNKO0lBQ0osR0FBRztRQUFDTDtRQUFXRDtRQUFZRTtLQUFRO0lBR25DLHFCQUNJLDhEQUFDaUI7UUFBS0MsV0FBVTtrQkFDWG5CLDBCQUNHLDhEQUFDb0I7OzhCQUNELDhEQUFDQztvQkFBR0YsV0FBVTs4QkFBb0M7Ozs7Ozs4QkFDbEQsOERBQUNHO29CQUFHSCxXQUFVOzhCQUE0Qm5CLHNCQUFBQSxnQ0FBQUEsVUFBV3VCLFFBQVE7Ozs7Ozs4QkFDN0QsOERBQUNEO29CQUFHSCxXQUFVOzt3QkFBNEJsQjt3QkFBUTs7Ozs7Ozs4QkFDbEQsOERBQUNtQjtvQkFBSUQsV0FBVTs7c0NBQ2YsOERBQUNLOzRCQUNHQyxTQUFTaEI7NEJBQ1RpQixNQUFLOzRCQUNMUCxXQUFVOzs7Ozs7c0NBSVYsOERBQUNLOzRCQUNEQyxTQUFTcEI7NEJBQ1RxQixNQUFLOzRCQUNMUCxXQUFVO3NDQUNUOzs7Ozs7Ozs7Ozs7Ozs7OztpQ0FPSiw4REFBQ0M7WUFBSUQsV0FBVTs7OEJBQ1osOERBQUNFO29CQUFHRixXQUFVOzhCQUE2Qjs7Ozs7OzhCQUU5Qyw4REFBQ3ZCLDhFQUFpQkE7b0JBQUMrQixPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVDO0dBMUZ3QjdCOztRQUNFSix1RUFBYUE7UUFDYkMsbUVBQVNBOzs7S0FGWEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2FsbGV0LWluZm8udHN4PzBjNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHsgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5pbXBvcnQgeyBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldEluZm8oKSB7XHJcbiAgICBjb25zdCB7IGNvbm5lY3Rpb259ID0gdXNlQ29ubmVjdGlvbigpO1xyXG4gICAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IHVzZVdhbGxldCgpXHJcblxyXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIXB1YmxpY0tleSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2FsbGV0IGlzIG5vdCBDb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3QmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShwdWJsaWNLZXkpO1xyXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG5ld0JhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91J3JlIFJhdGUgbGltaXRlZCBmb3IgQWlyZHJvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGdldEFpcmRyb3BPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgIGlmICghcHVibGljS2V5KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBpcyBub3QgQ29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgW2xhdGVzdEJsb2NraGFzaCwgc2lnbmF0dXJlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5nZXRMYXRlc3RCbG9ja2hhc2goKSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZXF1ZXN0QWlyZHJvcChwdWJsaWNLZXksIDEgKiBMQU1QT1JUU19QRVJfU09MKSxcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgY29uc3Qgc2lnUmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5jb25maXJtVHJhbnNhY3Rpb24oXHJcbiAgICAgICAgICAgIHsgc2lnbmF0dXJlLCAuLi5sYXRlc3RCbG9ja2hhc2ggfSxcclxuICAgICAgICAgICAgXCJjb25maXJtZWRcIixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoc2lnUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQWlyZHJvcCB3YXMgY29uZmlybWVkIVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICBhbGVydChcIllvdSBhcmUgUmF0ZSBsaW1pdGVkIGZvciBBaXJkcm9wXCIpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwdWJsaWNLZXkpIHtcclxuICAgICAgICAgICAgZ2V0QmFsYW5jZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3B1YmxpY0tleSwgY29ubmVjdGlvbiwgYmFsYW5jZV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC04IGJnLWdyZWVuLTEwMCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICB7cHVibGljS2V5ID8gKCBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNlbWlib2xkIHRleHQtMnhsXCI+VHUgV2FsbGV0OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+e3B1YmxpY0tleT8udG9TdHJpbmcoKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1zZW1pYm9sZFwiPntiYWxhbmNlfSBTT0w8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dldEFpcmRyb3BPbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTMwMCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIHJvdW5kZWQgYmFzaXNbNTAlXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby00MDAgZGlzYWJsZWQ6YmctZ3JheS0zMDAgZGlzYWJsZWQ6dGV4dC1ncmF5LTYwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRCYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTMwMCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIHJvdW5kZWQgYmFzaXNbNTAlXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby00MDBcIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjdHVhbGl6YXIgU2FsZG9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPkNvbmVjdGEgdHUgd2FsbGV0PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIHN0eWxlPXt7fX0vPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIkxBTVBPUlRTX1BFUl9TT0wiLCJXYWxsZXRJbmZvIiwiY29ubmVjdGlvbiIsInB1YmxpY0tleSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZ2V0QmFsYW5jZSIsIkVycm9yIiwibmV3QmFsYW5jZSIsImFsZXJ0IiwiZ2V0QWlyZHJvcE9uQ2xpY2siLCJsYXRlc3RCbG9ja2hhc2giLCJzaWduYXR1cmUiLCJQcm9taXNlIiwiYWxsIiwiZ2V0TGF0ZXN0QmxvY2toYXNoIiwicmVxdWVzdEFpcmRyb3AiLCJzaWdSZXN1bHQiLCJjb25maXJtVHJhbnNhY3Rpb24iLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJoMiIsInRvU3RyaW5nIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/wallet-info.tsx\n"));

/***/ })

});