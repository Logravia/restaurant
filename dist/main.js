/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\n_pageload__WEBPACK_IMPORTED_MODULE_0__.pageFormers.menu();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageFormers\": () => (/* binding */ pageFormers)\n/* harmony export */ });\nconst content = document.querySelector(\".content\");\nconst clearPage = () => {\n  content.replaceChildren();\n};\nconst title = (text, size = 2) => {\n  let title = document.createElement(\"h\" + size);\n  title.textContent = text;\n  content.appendChild(title);\n};\nconst addUnorderedList = list => {\n  let ul = document.createElement(\"ul\");\n  list.forEach(item => {\n    let li = document.createElement(\"li\");\n    li.textContent = item;\n    ul.appendChild(li);\n  });\n  content.appendChild(ul);\n};\nconst navBar = links => {\n  let nav = document.createElement(\"nav\");\n  let ul = document.createElement(\"ul\");\n  links.forEach(link => {\n    let a = document.createElement(\"a\");\n    a.id = link;\n    a.href = \"#\";\n    a.className = \"tab\";\n    let li = document.createElement(\"li\");\n    li.textContent = link;\n    a.appendChild(li);\n    ul.appendChild(a);\n  });\n  content.appendChild(nav.appendChild(ul));\n};\nconst header = () => {\n  title(\"Restaurant\", 1);\n  navBar([\"menu\", \"locations\", \"contacts\"]);\n};\nconst resetPage = () => {\n  clearPage();\n  header();\n  setUpListeners();\n};\nconst menu = () => {\n  resetPage();\n  title(\"Menu\");\n  addUnorderedList([\"Fish\", \"Beer\", \"Potato\"]);\n};\nconst locations = () => {\n  resetPage();\n  title(\"Location\");\n  addUnorderedList([\"Bled\", \"Pecs\", \"Krakow\"]);\n};\nconst contacts = () => {\n  resetPage();\n  title(\"Contacts\");\n  addUnorderedList([\"Vyacheslav\"]);\n};\nconst setUpListeners = () => {\n  document.querySelectorAll(\".tab\").forEach(el => {\n    el.addEventListener('click', e => {\n      let linksTo = e.currentTarget.id;\n      pageFormers[linksTo]();\n    });\n  });\n};\nconst pageFormers = {\n  contacts,\n  menu,\n  locations\n};\n\n\n//# sourceURL=webpack://restaurant/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;