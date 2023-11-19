/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.polygonMumbai\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({\n        apiKey: \"f0267a8d7d5642caa8735db53507eefd\",\n        // apiKey: \"2Y299sur10MnKO1WhEruCpWjikK\",\n        priority: 1\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return(// <div>Hey</div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Extra\\\\BlockChain\\\\uniswap\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Extra\\\\BlockChain\\\\uniswap\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Extra\\\\BlockChain\\\\uniswap\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUVFO0FBQ1U7QUFPWDtBQUUwQztBQUNsQjtBQUV4RCxNQUFNLEVBQUVXLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdMLHNEQUFlLENBQzFDO0lBQUNELHNEQUFtQjtDQUFDLEVBQ3JCO0lBQ0VJLHNFQUFjLENBQUM7UUFDYkksTUFBTSxFQUFFLGtDQUFrQztRQUMxQyx5Q0FBeUM7UUFDekNDLFFBQVEsRUFBRSxDQUFDO0tBQ1osQ0FBQztDQUNILENBQ0Y7QUFFRCxNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHZCx5RUFBaUIsQ0FBQztJQUN2Q2UsT0FBTyxFQUFFLFlBQVk7SUFDckJOLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTU8sV0FBVyxHQUFHVixtREFBWSxDQUFDO0lBQy9CVyxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWSixRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1RLE9BQU8sR0FBR25CLG1EQUFLLENBQUNJLHFFQUFhLEVBQUUsRUFBRTtJQUNyQ2dCLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsU0FBUztRQUN0QkMscUJBQXFCLEVBQUUsTUFBTTtLQUM5QjtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxPQUNFLGlCQUFpQjtrQkFDakIsOERBQUNqQiw4Q0FBVztRQUFDa0IsTUFBTSxFQUFFVCxXQUFXO2tCQUM5Qiw0RUFBQ2Ysc0VBQWtCO1lBQUNRLE1BQU0sRUFBRUEsTUFBTTtZQUFFaUIsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsRUFDZDtDQUNIOztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLW1hcmtldHBsYWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xyXG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcblxyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9pbmZ1cmFcIjtcclxuXHJcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxyXG4gIFtjaGFpbi5wb2x5Z29uTXVtYmFpXSxcclxuICBbXHJcbiAgICBpbmZ1cmFQcm92aWRlcih7XHJcbiAgICAgIGFwaUtleTogXCJmMDI2N2E4ZDdkNTY0MmNhYTg3MzVkYjUzNTA3ZWVmZFwiLFxyXG4gICAgICAvLyBhcGlLZXk6IFwiMlkyOTlzdXIxME1uS08xV2hFcnVDcFdqaWtLXCIsXHJcbiAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgfSksXHJcbiAgXVxyXG4pO1xyXG5cclxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XHJcbiAgYXBwTmFtZTogXCJDdXN0b20gRGV4XCIsXHJcbiAgY2hhaW5zLFxyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyLFxyXG59KTtcclxuXHJcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuICBjb2xvcnM6IHtcclxuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdj5IZXk8L2Rpdj5cclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gdGhlbWU9e215VGhlbWV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XHJcbiAgICA8L1dhZ21pQ29uZmlnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVyZ2UiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1pZG5pZ2h0VGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiaW5mdXJhUHJvdmlkZXIiLCJjaGFpbnMiLCJwcm92aWRlciIsInBvbHlnb25NdW1iYWkiLCJhcGlLZXkiLCJwcmlvcml0eSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();