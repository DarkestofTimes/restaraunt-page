/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cinzel-decorative-v14-latin-regular.woff2 */ "./fonts/cinzel-decorative-v14-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/jason-leung-poI7DelFiVA-unsplash.jpg */ "./img/jason-leung-poI7DelFiVA-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* cinzel-decorative-regular - latin */
@font-face {
  font-display: swap;
  font-family: "Cinzel Decorative";
  font-style: normal;
  font-weight: 200;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* VARIABLES */

:root {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4rem;
  --HEADER-BG-C: #231123;
  --HEADER-ALT: #231123;
  --HEADER-ALT2: aliceblue;
  --HEADER-BTN: aliceblue;
  --PAGE-BG-C: #393e41;
  --PAGE-C: aliceblue;
  --PAGE-BG-C-T: hsla(300, 33%, 10%, 0.63);
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: 50%;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.content {
  display: grid;
  grid-template-rows: 10vh 1fr;
}

/* HEADER */

.header {
  height: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: var(--PAGE-BG-C-T);
  color: var(--HEADER-C);
}

nav {
  grid-column: 2/3;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.header__li {
  list-style-type: none;
}

.header__button {
  height: 10vh;
  width: 100%;
  font-weight: bold;
  font-size: 1.7rem;
  background-color: transparent;
  color: var(--HEADER-ALT2);
  border: none;
  font-family: "Cinzel Decorative", serif;
}

.header__buttonText {
  user-select: none;
  display: inline-block;
  transition: transform 0.3s ease;
}
.header__buttonText::before {
  content: "";
  position: absolute;
  top: -7px;
  width: 100%;
  height: 3px;
  background-color: var(--HEADER-ALT2);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.header__button:hover .header__buttonText {
  transform: translateY(15px);
}
.header__button:hover .header__buttonText::before {
  opacity: 1;
}

.header__button.active .header__buttonText {
  transform: translateY(15px);
}
.header__button.active .header__buttonText::before {
  opacity: 1;
}

/* PAGE */

.page {
  min-height: 86vh;
  color: var(--PAGE-C);
}

/* MAIN */

.mainContentWrapper {
  height: 0;
  min-height: 90%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: clamp(350px, 85%, 700px);
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: 4rem 5fr;
  background-color: var(--PAGE-BG-C-T);
  overflow-y: auto;
  overflow-x: hidden;
}

.mainHeading {
  padding: 1rem;
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 100;
  grid-column: span 1;
  @media (min-width: 915px) {
    grid-column: span 2;
  }
}

@media (min-width: 915px) {
  .mainHeading {
    grid-column: span 2;
  }
}
.mainImg {
  width: clamp(320px, 100%, 400px);
  justify-self: center;
  grid-column: span 1;
  border: 2px solid var(--HEADER-BTN);
}
.mainP {
  padding: 1rem;
  grid-column: span 1;
}

/* MENU */

.menuContainer {
  height: 0;
  min-height: 90%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: clamp(320px, 90%, 700px);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 4rem 5fr;
  background-color: var(--PAGE-BG-C-T);
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.menuHeading {
  padding: 1rem;
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 100;
  grid-column: span 1;
}

@media (min-width: 768px) {
  .menuHeading {
    grid-column: span 2;
  }
}

.menuItem {
  border: 2px solid var(--HEADER-BTN);
  padding: 0.5rem;
  display: grid;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}

.menuItem:hover {
  transform: scale(1.05);
}

.menuImg {
  justify-self: center;
}

.menuItemHeading {
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 100;
}

.menuItemDescription {
  padding: 0.5rem;
}

.menuItemPrice {
  justify-self: end;
  padding-right: 2rem;
}

/* CONTACT */

.contactContainer {
  height: 0;
  min-height: 90%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: clamp(320px, 85%, 700px);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 5fr;
  background-color: var(--PAGE-BG-C-T);
  gap: 1rem;
  overflow-y: auto;
}

.contactH2 {
  padding: 1rem;
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 100;
  grid-column: span 1;
}
.contactForm {
  display: grid;
  gap: 0.5rem;
}
.label {
  padding: 0.3rem;
  font-size: 1.3rem;
}
.input {
  padding: 0.3rem;
  background-color: var(--HEADER-BG-C);
  color: var(--HEADER-BTN);
  border: none;
}
.textarea {
  resize: none;
  padding: 0.5rem;
  font-size: 1.4rem;
  background-color: var(--HEADER-BG-C);
  color: var(--HEADER-BTN);
  border: none;
}
.contactButton {
  font-size: 1.4rem;
  margin: auto;
  width: 40%;
  background-color: var(--HEADER-BTN);
  color: var(--HEADER-ALT);
  border: none;
}
.contactButton:hover {
  background-color: var(--HEADER-ALT);
  color: var(--HEADER-BTN);
}
.contactButton:active {
  background-color: var(--PAGE-BG-C);
}

.addressWrapper {
  padding: 1rem;
}
.address {
  line-height: 1.4rem;
}

/* FOOTER */

.footer {
  min-height: 4vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background-color: var(--PAGE-BG-C-T);
  color: var(--PAGE-C);
  gap: 2rem;
}

a:any-link {
  color: var(--HEADER-BTN);
}

.footerP:first-of-type {
  margin-left: auto;
}
.footerP:last-of-type {
  margin-right: auto;
}

/* SCROLLBAR */

.mainContentWrapper,
.contactContainer,
.menuContainer {
  scrollbar-width: thin;
  scrollbar-color: var(--HEADER-ALT) var(--PAGE-BG-C);
}
.mainContentWrapper::-webkit-scrollbar,
.menuContainer::-webkit-scrollbar,
.contactContainer::-webkit-scrollbar {
  width: 6px;
}

.mainContentWrapper::-webkit-scrollbar-track,
.menuContainer::-webkit-scrollbar-track,
.contactContainer::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.mainContentWrapper::-webkit-scrollbar-thumb,
.menuContainer::-webkit-scrollbar-thumb,
.contactContainer::-webkit-scrollbar-track {
  background-color: var(--PAGE-BG-C);
  border-radius: 3px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* cinzel-decorative-regular - latin */\r\n@font-face {\r\n  font-display: swap;\r\n  font-family: \"Cinzel Decorative\";\r\n  font-style: normal;\r\n  font-weight: 200;\r\n  src: url(\"../fonts/cinzel-decorative-v14-latin-regular.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\r\n}\r\n\r\n/* VARIABLES */\r\n\r\n:root {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 1.4rem;\r\n  --HEADER-BG-C: #231123;\r\n  --HEADER-ALT: #231123;\r\n  --HEADER-ALT2: aliceblue;\r\n  --HEADER-BTN: aliceblue;\r\n  --PAGE-BG-C: #393e41;\r\n  --PAGE-C: aliceblue;\r\n  --PAGE-BG-C-T: hsla(300, 33%, 10%, 0.63);\r\n}\r\n\r\nbody {\r\n  background-image: url(../img/jason-leung-poI7DelFiVA-unsplash.jpg);\r\n  background-position: 50%;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  overflow: hidden;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-rows: 10vh 1fr;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  height: 10vh;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr 1fr;\r\n  background-color: var(--PAGE-BG-C-T);\r\n  color: var(--HEADER-C);\r\n}\r\n\r\nnav {\r\n  grid-column: 2/3;\r\n}\r\n\r\nul {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1rem;\r\n}\r\n\r\n.header__li {\r\n  list-style-type: none;\r\n}\r\n\r\n.header__button {\r\n  height: 10vh;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  font-size: 1.7rem;\r\n  background-color: transparent;\r\n  color: var(--HEADER-ALT2);\r\n  border: none;\r\n  font-family: \"Cinzel Decorative\", serif;\r\n}\r\n\r\n.header__buttonText {\r\n  user-select: none;\r\n  display: inline-block;\r\n  transition: transform 0.3s ease;\r\n}\r\n.header__buttonText::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -7px;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--HEADER-ALT2);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.header__button:hover .header__buttonText {\r\n  transform: translateY(15px);\r\n}\r\n.header__button:hover .header__buttonText::before {\r\n  opacity: 1;\r\n}\r\n\r\n.header__button.active .header__buttonText {\r\n  transform: translateY(15px);\r\n}\r\n.header__button.active .header__buttonText::before {\r\n  opacity: 1;\r\n}\r\n\r\n/* PAGE */\r\n\r\n.page {\r\n  min-height: 86vh;\r\n  color: var(--PAGE-C);\r\n}\r\n\r\n/* MAIN */\r\n\r\n.mainContentWrapper {\r\n  height: 0;\r\n  min-height: 90%;\r\n  margin: auto;\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  width: clamp(350px, 85%, 700px);\r\n  padding: 1rem;\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\r\n  grid-template-rows: 4rem 5fr;\r\n  background-color: var(--PAGE-BG-C-T);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.mainHeading {\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-family: \"Cinzel Decorative\", serif;\r\n  font-weight: 100;\r\n  grid-column: span 1;\r\n  @media (min-width: 915px) {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 915px) {\r\n  .mainHeading {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n.mainImg {\r\n  width: clamp(320px, 100%, 400px);\r\n  justify-self: center;\r\n  grid-column: span 1;\r\n  border: 2px solid var(--HEADER-BTN);\r\n}\r\n.mainP {\r\n  padding: 1rem;\r\n  grid-column: span 1;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menuContainer {\r\n  height: 0;\r\n  min-height: 90%;\r\n  margin: auto;\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  width: clamp(320px, 90%, 700px);\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  grid-template-rows: 4rem 5fr;\r\n  background-color: var(--PAGE-BG-C-T);\r\n  gap: 1rem;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.menuHeading {\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-family: \"Cinzel Decorative\", serif;\r\n  font-weight: 100;\r\n  grid-column: span 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .menuHeading {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n.menuItem {\r\n  border: 2px solid var(--HEADER-BTN);\r\n  padding: 0.5rem;\r\n  display: grid;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.menuItem:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.menuImg {\r\n  justify-self: center;\r\n}\r\n\r\n.menuItemHeading {\r\n  text-align: center;\r\n  font-family: \"Cinzel Decorative\", serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.menuItemDescription {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.menuItemPrice {\r\n  justify-self: end;\r\n  padding-right: 2rem;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contactContainer {\r\n  height: 0;\r\n  min-height: 90%;\r\n  margin: auto;\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  width: clamp(320px, 85%, 700px);\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 4rem 5fr;\r\n  background-color: var(--PAGE-BG-C-T);\r\n  gap: 1rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.contactH2 {\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-family: \"Cinzel Decorative\", serif;\r\n  font-weight: 100;\r\n  grid-column: span 1;\r\n}\r\n.contactForm {\r\n  display: grid;\r\n  gap: 0.5rem;\r\n}\r\n.label {\r\n  padding: 0.3rem;\r\n  font-size: 1.3rem;\r\n}\r\n.input {\r\n  padding: 0.3rem;\r\n  background-color: var(--HEADER-BG-C);\r\n  color: var(--HEADER-BTN);\r\n  border: none;\r\n}\r\n.textarea {\r\n  resize: none;\r\n  padding: 0.5rem;\r\n  font-size: 1.4rem;\r\n  background-color: var(--HEADER-BG-C);\r\n  color: var(--HEADER-BTN);\r\n  border: none;\r\n}\r\n.contactButton {\r\n  font-size: 1.4rem;\r\n  margin: auto;\r\n  width: 40%;\r\n  background-color: var(--HEADER-BTN);\r\n  color: var(--HEADER-ALT);\r\n  border: none;\r\n}\r\n.contactButton:hover {\r\n  background-color: var(--HEADER-ALT);\r\n  color: var(--HEADER-BTN);\r\n}\r\n.contactButton:active {\r\n  background-color: var(--PAGE-BG-C);\r\n}\r\n\r\n.addressWrapper {\r\n  padding: 1rem;\r\n}\r\n.address {\r\n  line-height: 1.4rem;\r\n}\r\n\r\n/* FOOTER */\r\n\r\n.footer {\r\n  min-height: 4vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  place-items: center;\r\n  background-color: var(--PAGE-BG-C-T);\r\n  color: var(--PAGE-C);\r\n  gap: 2rem;\r\n}\r\n\r\na:any-link {\r\n  color: var(--HEADER-BTN);\r\n}\r\n\r\n.footerP:first-of-type {\r\n  margin-left: auto;\r\n}\r\n.footerP:last-of-type {\r\n  margin-right: auto;\r\n}\r\n\r\n/* SCROLLBAR */\r\n\r\n.mainContentWrapper,\r\n.contactContainer,\r\n.menuContainer {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--HEADER-ALT) var(--PAGE-BG-C);\r\n}\r\n.mainContentWrapper::-webkit-scrollbar,\r\n.menuContainer::-webkit-scrollbar,\r\n.contactContainer::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.mainContentWrapper::-webkit-scrollbar-track,\r\n.menuContainer::-webkit-scrollbar-track,\r\n.contactContainer::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.mainContentWrapper::-webkit-scrollbar-thumb,\r\n.menuContainer::-webkit-scrollbar-thumb,\r\n.contactContainer::-webkit-scrollbar-track {\r\n  background-color: var(--PAGE-BG-C);\r\n  border-radius: 3px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearPage.js":
/*!**************************!*\
  !*** ./src/clearPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage)
/* harmony export */ });
const clearPage = () => {
  const page = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".header__button");
  buttons.forEach((button) => button.classList.remove("active"));
  page.forEach((page) => page.remove());
};


/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
const renderContact = () => {
  const header = document.querySelector("#header");
  const namePattern = /^[a-zA-Z\d]{2,20}$/;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
  const numberPattern =
    /^(\d{1,2}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4,5}$/;

  const contactPage = `     
    <div class="page contact" id="contactPage">
        <div class="contactContainer">
            <h2 class="contactH2">fancy contact us!</h2>
            <form action="submit" method="post" class="contactForm">
                <label class="label" for="name">name:</label>
                <input
                class="input"
                id="name"
                type="text"
                required
                pattern="${namePattern}"
                placeholder="Jack Black"
                />
                <label class="label" for="email">email:</label>
                <input
                class="input"
                id="email"
                type="email"
                pattern="${emailPattern}"
                placeholder="emaily@email.nope"
                />
                <label class="label" for="number">phone number:</label>
                <input
                class="input"
                id="number"
                type="number"
                required
                pattern="${numberPattern}"
                placeholder="55-555-555-5555"
                />
                <label class="label" for="textarea">text:</label>
                <textarea
                class="textarea"
                name="contact"
                id="textarea"
                cols="30"
                rows="6"
                placeholder="your message"
                required
                ></textarea>
                <button class="contactButton" type="submit">submit</button>
            </form>
            <div class="addressWrapper">
      <p class="addressTel">call us!: 44-444-444-4444</p>
      <address class="address">
        Fancy restaurant <br />
        madeUp Str. 123 <br />
        madeUpCity, 44444, madeUpCountry
      </address>
        </div>
    </div>`;

  header.insertAdjacentHTML("afterend", contactPage);
};


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter)
/* harmony export */ });
const renderFooter = () => {
  const content = document.querySelector("#content");
  const footer = `
    <div class="footer">
    <p class="footerP">
      Made by
      <a href="https://github.com/DarkestofTimes" target="_blank"
        >DarkTimes</a
      >
    </p>
    <p class="footerP">
      Photo by
      <a
        href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        >Jason Leung</a
      >
      on
      <a
        href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        >Unsplash</a
      >
    </p>
  </div>`;

  content.insertAdjacentHTML("beforeend", footer);
};


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
const renderHeader = () => {
  const content = document.querySelector("#content");
  const header = `
      <div class="header" id="header">
       
        <nav>
          <ul>
            <li class="header__li">
              <button id="mainButton" class="header__button">
                <span class="header__buttonText">home</span>
              </button>
            </li>
            <li class="header__li">
              <button id="menuButton" class="header__button">
                <span class="header__buttonText">menu</span>
              </button>
            </li>
            <li class="header__li">
              <button id="contactButton" class="header__button">
                <span class="header__buttonText">contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>`;

  content.insertAdjacentHTML("afterbegin", header);
};


/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialization: () => (/* binding */ initialization)
/* harmony export */ });
const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#mainButton");
  button.classList.add("active");
  piece2();
  piece3();
};


/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
const renderMain = () => {
  const header = document.querySelector("#header");
  const mainPage = `
    <div class="page main" id="mainPage">
        <div class="mainContentWrapper">
            <h1 class="mainHeading">fancy heading</h1>
            <img
                class="mainImg"
                src="../img/photo-1572715376701-98568319fd0b.avif"
                alt="chef working of a plate"
                width="320"
                height="320"
                loading="lazy" />
            <p class="mainP">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sed
                ut vel ipsa in aliquam exercitationem consectetur iusto, saepe hic
                aliquid, id cumque suscipit, impedit iure quisquam neque. Odit,
                totam blanditiis porro aut maiores animi facilis tenetur
                reprehenderit quisquam, quo veniam mollitia vero, consectetur
                assumenda dignissimos dolorum iusto in eum.
            </p>
        </div>
    </div>`;

  header.insertAdjacentHTML("afterend", mainPage);
};


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
const renderMenu = () => {
  const header = document.querySelector("#header");
  const menuPage = `
    <div class="page menu" id="menuPage">
    <div class="menuContainer">
      <h2 class="menuHeading">fancy boneappletea</h2>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
    </div>
  </div>`;

  header.insertAdjacentHTML("afterend", menuPage);
};


/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
const renderPage = (id, main, menu, contact) => {
  const button = document.querySelector(`#${id}`);
  button.classList.add("active");
  switch (id) {
    case "mainButton":
      main();
      break;
    case "menuButton":
      menu();
      break;
    case "contactButton":
      contact();
      break;
  }
};


/***/ }),

/***/ "./fonts/cinzel-decorative-v14-latin-regular.woff2":
/*!*********************************************************!*\
  !*** ./fonts/cinzel-decorative-v14-latin-regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d679d918695980d64b8.woff2";

/***/ }),

/***/ "./img/jason-leung-poI7DelFiVA-unsplash.jpg":
/*!**************************************************!*\
  !*** ./img/jason-leung-poI7DelFiVA-unsplash.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8b162f5cddd04965fe.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialization */ "./src/initialization.js");
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clearPage */ "./src/clearPage.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");










(0,_initialization__WEBPACK_IMPORTED_MODULE_6__.initialization)(_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader, _mainPage__WEBPACK_IMPORTED_MODULE_2__.renderMain, _footer__WEBPACK_IMPORTED_MODULE_5__.renderFooter);

const buttons = document.querySelectorAll(".header__button");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".header__button");
    console.log(deers);
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_7__.clearPage)();
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_8__.renderPage)(target.id, _mainPage__WEBPACK_IMPORTED_MODULE_2__.renderMain, _menuPage__WEBPACK_IMPORTED_MODULE_4__.renderMenu, _contactPage__WEBPACK_IMPORTED_MODULE_3__.renderContact);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDRLQUFxRTtBQUNqSCw0Q0FBNEMsOEpBQThEO0FBQzFHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZ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QTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVPO0FBQ1AsNENBQTRDLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ0E7QUFDTTtBQUNOO0FBQ0E7QUFDVTtBQUNWO0FBQ0U7QUFDMUM7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsaURBQVUsRUFBRSxpREFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsSUFBSSx1REFBVSxZQUFZLGlEQUFVLEVBQUUsaURBQVUsRUFBRSx1REFBYTtBQUMvRCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2NsZWFyUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbml0aWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jaW56ZWwtZGVjb3JhdGl2ZS12MTQtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9qYXNvbi1sZXVuZy1wb0k3RGVsRmlWQS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBjaW56ZWwtZGVjb3JhdGl2ZS1yZWd1bGFyIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cclxufVxyXG5cclxuLyogVkFSSUFCTEVTICovXHJcblxyXG46cm9vdCB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAtLUhFQURFUi1CRy1DOiAjMjMxMTIzO1xyXG4gIC0tSEVBREVSLUFMVDogIzIzMTEyMztcclxuICAtLUhFQURFUi1BTFQyOiBhbGljZWJsdWU7XHJcbiAgLS1IRUFERVItQlROOiBhbGljZWJsdWU7XHJcbiAgLS1QQUdFLUJHLUM6ICMzOTNlNDE7XHJcbiAgLS1QQUdFLUM6IGFsaWNlYmx1ZTtcclxuICAtLVBBR0UtQkctQy1UOiBoc2xhKDMwMCwgMzMlLCAxMCUsIDAuNjMpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMWZyO1xyXG59XHJcblxyXG4vKiBIRUFERVIgKi9cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJfX2xpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2J1dHRvbiB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCIsIHNlcmlmO1xyXG59XHJcblxyXG4uaGVhZGVyX19idXR0b25UZXh0IHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG4uaGVhZGVyX19idXR0b25UZXh0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQUxUMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG4uaGVhZGVyX19idXR0b246aG92ZXIgLmhlYWRlcl9fYnV0dG9uVGV4dCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcbi5oZWFkZXJfX2J1dHRvbjpob3ZlciAuaGVhZGVyX19idXR0b25UZXh0OjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2J1dHRvbi5hY3RpdmUgLmhlYWRlcl9fYnV0dG9uVGV4dCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcbi5oZWFkZXJfX2J1dHRvbi5hY3RpdmUgLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBQQUdFICovXHJcblxyXG4ucGFnZSB7XHJcbiAgbWluLWhlaWdodDogODZ2aDtcclxuICBjb2xvcjogdmFyKC0tUEFHRS1DKTtcclxufVxyXG5cclxuLyogTUFJTiAqL1xyXG5cclxuLm1haW5Db250ZW50V3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHdpZHRoOiBjbGFtcCgzNTBweCwgODUlLCA3MDBweCk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLm1haW5IZWFkaW5nIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkxNXB4KSB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkxNXB4KSB7XHJcbiAgLm1haW5IZWFkaW5nIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgfVxyXG59XHJcbi5tYWluSW1nIHtcclxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDEwMCUsIDQwMHB4KTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUhFQURFUi1CVE4pO1xyXG59XHJcbi5tYWluUCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcblxyXG4vKiBNRU5VICovXHJcblxyXG4ubWVudUNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgOTAlLCA3MDBweCk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcclxuICBnYXA6IDFyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZW51SGVhZGluZyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWVudUhlYWRpbmcge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51SXRlbSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tSEVBREVSLUJUTik7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm1lbnVJdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4ubWVudUltZyB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51SXRlbUhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ubWVudUl0ZW1EZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubWVudUl0ZW1QcmljZSB7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxufVxyXG5cclxuLyogQ09OVEFDVCAqL1xyXG5cclxuLmNvbnRhY3RDb250YWluZXIge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDg1JSwgNzAwcHgpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcclxuICBnYXA6IDFyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3RIMiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcbi5jb250YWN0Rm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG4ubGFiZWwge1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQkctQyk7XHJcbiAgY29sb3I6IHZhcigtLUhFQURFUi1CVE4pO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4udGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhY3RCdXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CVE4pO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1BTFQpO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcclxufVxyXG4uY29udGFjdEJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQyk7XHJcbn1cclxuXHJcbi5hZGRyZXNzV3JhcHBlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uYWRkcmVzcyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxufVxyXG5cclxuLyogRk9PVEVSICovXHJcblxyXG4uZm9vdGVyIHtcclxuICBtaW4taGVpZ2h0OiA0dmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XHJcbiAgY29sb3I6IHZhcigtLVBBR0UtQyk7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG5hOmFueS1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XHJcbn1cclxuXHJcbi5mb290ZXJQOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5mb290ZXJQOmxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKiBTQ1JPTExCQVIgKi9cclxuXHJcbi5tYWluQ29udGVudFdyYXBwZXIsXHJcbi5jb250YWN0Q29udGFpbmVyLFxyXG4ubWVudUNvbnRhaW5lciB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tSEVBREVSLUFMVCkgdmFyKC0tUEFHRS1CRy1DKTtcclxufVxyXG4ubWFpbkNvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhcixcclxuLm1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4ubWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXHJcbi5jb250YWN0Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4ubWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5jb250YWN0Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBOEUsRUFBRSw0REFBNEQ7QUFDOUk7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseURBQWtFO0VBQ2xFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMs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QUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxjQUFjOztBQUVkOzs7RUFHRSxxQkFBcUI7RUFDckIsbURBQW1EO0FBQ3JEO0FBQ0E7OztFQUdFLFVBQVU7QUFDWjs7QUFFQTs7O0VBR0UsNENBQTRDO0FBQzlDOztBQUVBOzs7RUFHRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIGNpbnplbC1kZWNvcmF0aXZlLXJlZ3VsYXIgLSBsYXRpbiAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL2NpbnplbC1kZWNvcmF0aXZlLXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxyXFxufVxcclxcblxcclxcbi8qIFZBUklBQkxFUyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIC0tSEVBREVSLUJHLUM6ICMyMzExMjM7XFxyXFxuICAtLUhFQURFUi1BTFQ6ICMyMzExMjM7XFxyXFxuICAtLUhFQURFUi1BTFQyOiBhbGljZWJsdWU7XFxyXFxuICAtLUhFQURFUi1CVE46IGFsaWNlYmx1ZTtcXHJcXG4gIC0tUEFHRS1CRy1DOiAjMzkzZTQxO1xcclxcbiAgLS1QQUdFLUM6IGFsaWNlYmx1ZTtcXHJcXG4gIC0tUEFHRS1CRy1DLVQ6IGhzbGEoMzAwLCAzMyUsIDEwJSwgMC42Myk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9qYXNvbi1sZXVuZy1wb0k3RGVsRmlWQS11bnNwbGFzaC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1DKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUMik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J1dHRvblRleHQge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4uaGVhZGVyX19idXR0b25UZXh0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC03cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4uaGVhZGVyX19idXR0b246aG92ZXIgLmhlYWRlcl9fYnV0dG9uVGV4dCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxyXFxufVxcclxcbi5oZWFkZXJfX2J1dHRvbjpob3ZlciAuaGVhZGVyX19idXR0b25UZXh0OjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fYnV0dG9uLmFjdGl2ZSAuaGVhZGVyX19idXR0b25UZXh0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fYnV0dG9uLmFjdGl2ZSAuaGVhZGVyX19idXR0b25UZXh0OjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUEFHRSAqL1xcclxcblxcclxcbi5wYWdlIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDg2dmg7XFxyXFxuICBjb2xvcjogdmFyKC0tUEFHRS1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbi5tYWluQ29udGVudFdyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDg1JSwgNzAwcHgpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSA1ZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkhlYWRpbmcge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsIERlY29yYXRpdmVcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkxNXB4KSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5MTVweCkge1xcclxcbiAgLm1haW5IZWFkaW5nIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1haW5JbWcge1xcclxcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCAxMDAlLCA0MDBweCk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1IRUFERVItQlROKTtcXHJcXG59XFxyXFxuLm1haW5QIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgbWluLWhlaWdodDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDkwJSwgNzAwcHgpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVIZWFkaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudUhlYWRpbmcge1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tSEVBREVSLUJUTik7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltZyB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtSGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1EZXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbVByaWNlIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09OVEFDVCAqL1xcclxcblxcclxcbi5jb250YWN0Q29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCA4NSUsIDcwMHB4KTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RIMiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxyXFxufVxcclxcbi5jb250YWN0Rm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5sYWJlbCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuLmlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJHLUMpO1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1CVE4pO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uY29udGFjdEJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQUxUKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRhY3RCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUFMVCk7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XFxyXFxufVxcclxcbi5jb250YWN0QnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzc1dyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtaW4taGVpZ2h0OiA0dmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1QQUdFLUMpO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hOmFueS1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlclA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuLmZvb3RlclA6bGFzdC1vZi10eXBlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogU0NST0xMQkFSICovXFxyXFxuXFxyXFxuLm1haW5Db250ZW50V3JhcHBlcixcXHJcXG4uY29udGFjdENvbnRhaW5lcixcXHJcXG4ubWVudUNvbnRhaW5lciB7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLUhFQURFUi1BTFQpIHZhcigtLVBBR0UtQkctQyk7XFxyXFxufVxcclxcbi5tYWluQ29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcclxcbi5tZW51Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXHJcXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50V3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXFxyXFxuLm1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxcclxcbi5jb250YWN0Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50V3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXFxyXFxuLm1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxcclxcbi5jb250YWN0Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNsZWFyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgcGFnZS5mb3JFYWNoKChwYWdlKSA9PiBwYWdlLnJlbW92ZSgpKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XHJcbiAgY29uc3QgbmFtZVBhdHRlcm4gPSAvXlthLXpBLVpcXGRdezIsMjB9JC87XHJcbiAgY29uc3QgZW1haWxQYXR0ZXJuID1cclxuICAgIC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvaTtcclxuICBjb25zdCBudW1iZXJQYXR0ZXJuID1cclxuICAgIC9eKFxcZHsxLDJ9XFxzPyk/XFwoP1xcZHszLDR9XFwpP1tcXHMuLV0/XFxkezMsNH1bXFxzLi1dP1xcZHs0LDV9JC87XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RQYWdlID0gYCAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZSBjb250YWN0XCIgaWQ9XCJjb250YWN0UGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbnRhY3RIMlwiPmZhbmN5IGNvbnRhY3QgdXMhPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwic3VibWl0XCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwibmFtZVwiPm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCIke25hbWVQYXR0ZXJufVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkphY2sgQmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiZW1haWxcIj5lbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCIke2VtYWlsUGF0dGVybn1cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbHlAZW1haWwubm9wZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJudW1iZXJcIj5waG9uZSBudW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiJHtudW1iZXJQYXR0ZXJufVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjU1LTU1NS01NTUtNTU1NVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJ0ZXh0YXJlYVwiPnRleHQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICByb3dzPVwiNlwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGFjdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1dyYXBwZXJcIj5cclxuICAgICAgPHAgY2xhc3M9XCJhZGRyZXNzVGVsXCI+Y2FsbCB1cyE6IDQ0LTQ0NC00NDQtNDQ0NDwvcD5cclxuICAgICAgPGFkZHJlc3MgY2xhc3M9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgRmFuY3kgcmVzdGF1cmFudCA8YnIgLz5cclxuICAgICAgICBtYWRlVXAgU3RyLiAxMjMgPGJyIC8+XHJcbiAgICAgICAgbWFkZVVwQ2l0eSwgNDQ0NDQsIG1hZGVVcENvdW50cnlcclxuICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgaGVhZGVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIGNvbnRhY3RQYWdlKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgIDxwIGNsYXNzPVwiZm9vdGVyUFwiPlxyXG4gICAgICBNYWRlIGJ5XHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFya2VzdG9mVGltZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5EYXJrVGltZXM8L2FcclxuICAgICAgPlxyXG4gICAgPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJmb290ZXJQXCI+XHJcbiAgICAgIFBob3RvIGJ5XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BuaW5qYXNvbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPkphc29uIExldW5nPC9hXHJcbiAgICAgID5cclxuICAgICAgb25cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3BvSTdEZWxGaVZBP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+VW5zcGxhc2g8L2FcclxuICAgICAgPlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGZvb3Rlcik7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19saVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYWluQnV0dG9uXCIgY2xhc3M9XCJoZWFkZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX2J1dHRvblRleHRcIj5ob21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX2xpXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1lbnVCdXR0b25cIiBjbGFzcz1cImhlYWRlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlcl9fYnV0dG9uVGV4dFwiPm1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbGlcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29udGFjdEJ1dHRvblwiIGNsYXNzPVwiaGVhZGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyX19idXR0b25UZXh0XCI+Y29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBoZWFkZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocGllY2UxLCBwaWVjZTIsIHBpZWNlMykgPT4ge1xyXG4gIHBpZWNlMSgpO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbkJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBwaWVjZTIoKTtcclxuICBwaWVjZTMoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlbmRlck1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XHJcbiAgY29uc3QgbWFpblBhZ2UgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZSBtYWluXCIgaWQ9XCJtYWluUGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibWFpbkhlYWRpbmdcIj5mYW5jeSBoZWFkaW5nPC9oMT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYWluSW1nXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4uL2ltZy9waG90by0xNTcyNzE1Mzc2NzAxLTk4NTY4MzE5ZmQwYi5hdmlmXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImNoZWYgd29ya2luZyBvZiBhIHBsYXRlXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzIwXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyMFwiXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWFpblBcIj5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNlZFxyXG4gICAgICAgICAgICAgICAgdXQgdmVsIGlwc2EgaW4gYWxpcXVhbSBleGVyY2l0YXRpb25lbSBjb25zZWN0ZXR1ciBpdXN0bywgc2FlcGUgaGljXHJcbiAgICAgICAgICAgICAgICBhbGlxdWlkLCBpZCBjdW1xdWUgc3VzY2lwaXQsIGltcGVkaXQgaXVyZSBxdWlzcXVhbSBuZXF1ZS4gT2RpdCxcclxuICAgICAgICAgICAgICAgIHRvdGFtIGJsYW5kaXRpaXMgcG9ycm8gYXV0IG1haW9yZXMgYW5pbWkgZmFjaWxpcyB0ZW5ldHVyXHJcbiAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IHF1aXNxdWFtLCBxdW8gdmVuaWFtIG1vbGxpdGlhIHZlcm8sIGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgICBhc3N1bWVuZGEgZGlnbmlzc2ltb3MgZG9sb3J1bSBpdXN0byBpbiBldW0uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBtYWluUGFnZSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG1lbnVQYWdlID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UgbWVudVwiIGlkPVwibWVudVBhZ2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51Q29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cIm1lbnVIZWFkaW5nXCI+ZmFuY3kgYm9uZWFwcGxldGVhPC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzcz1cIm1lbnVJbWdcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibWVudUl0ZW1IZWFkaW5nXCI+ZmFuY3kgZnJlbmNoIHdvcmRzPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIG1heGltZVxyXG4gICAgICAgICAgc2ltaWxpcXVlIHZlbCBxdW9zIHByYWVzZW50aXVtLCBlc3NlIGNvcnBvcmlzIGxpYmVybyBhZCwgYXQsIGl1cmVcclxuICAgICAgICAgIGlwc2FtPyBRdWFtIGF0cXVlIHNhZXBlIHNlcXVpP1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtUHJpY2VcIj41MDAkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzcz1cIm1lbnVJbWdcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibWVudUl0ZW1IZWFkaW5nXCI+ZmFuY3kgZnJlbmNoIHdvcmRzPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIG1heGltZVxyXG4gICAgICAgICAgc2ltaWxpcXVlIHZlbCBxdW9zIHByYWVzZW50aXVtLCBlc3NlIGNvcnBvcmlzIGxpYmVybyBhZCwgYXQsIGl1cmVcclxuICAgICAgICAgIGlwc2FtPyBRdWFtIGF0cXVlIHNhZXBlIHNlcXVpP1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtUHJpY2VcIj41MDAkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzcz1cIm1lbnVJbWdcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibWVudUl0ZW1IZWFkaW5nXCI+ZmFuY3kgZnJlbmNoIHdvcmRzPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIG1heGltZVxyXG4gICAgICAgICAgc2ltaWxpcXVlIHZlbCBxdW9zIHByYWVzZW50aXVtLCBlc3NlIGNvcnBvcmlzIGxpYmVybyBhZCwgYXQsIGl1cmVcclxuICAgICAgICAgIGlwc2FtPyBRdWFtIGF0cXVlIHNhZXBlIHNlcXVpP1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtUHJpY2VcIj41MDAkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzcz1cIm1lbnVJbWdcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibWVudUl0ZW1IZWFkaW5nXCI+ZmFuY3kgZnJlbmNoIHdvcmRzPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIG1heGltZVxyXG4gICAgICAgICAgc2ltaWxpcXVlIHZlbCBxdW9zIHByYWVzZW50aXVtLCBlc3NlIGNvcnBvcmlzIGxpYmVybyBhZCwgYXQsIGl1cmVcclxuICAgICAgICAgIGlwc2FtPyBRdWFtIGF0cXVlIHNhZXBlIHNlcXVpP1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnVJdGVtUHJpY2VcIj41MDAkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBtZW51UGFnZSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJQYWdlID0gKGlkLCBtYWluLCBtZW51LCBjb250YWN0KSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgc3dpdGNoIChpZCkge1xyXG4gICAgY2FzZSBcIm1haW5CdXR0b25cIjpcclxuICAgICAgbWFpbigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJtZW51QnV0dG9uXCI6XHJcbiAgICAgIG1lbnUoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY29udGFjdEJ1dHRvblwiOlxyXG4gICAgICBjb250YWN0KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlck1haW4gfSBmcm9tIFwiLi9tYWluUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gXCIuL21lbnVQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL2NsZWFyUGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyUGFnZVwiO1xyXG5cclxuaW5pdGlhbGl6YXRpb24ocmVuZGVySGVhZGVyLCByZW5kZXJNYWluLCByZW5kZXJGb290ZXIpO1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19idXR0b25cIik7XHJcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldC5jbG9zZXN0KFwiLmhlYWRlcl9fYnV0dG9uXCIpO1xyXG4gICAgY29uc29sZS5sb2coZGVlcnMpO1xyXG4gICAgY2xlYXJQYWdlKCk7XHJcbiAgICByZW5kZXJQYWdlKHRhcmdldC5pZCwgcmVuZGVyTWFpbiwgcmVuZGVyTWVudSwgcmVuZGVyQ29udGFjdCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=