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
    (0,_clearPage__WEBPACK_IMPORTED_MODULE_7__.clearPage)();
    (0,_renderPage__WEBPACK_IMPORTED_MODULE_8__.renderPage)(target.id, _mainPage__WEBPACK_IMPORTED_MODULE_2__.renderMain, _menuPage__WEBPACK_IMPORTED_MODULE_4__.renderMenu, _contactPage__WEBPACK_IMPORTED_MODULE_3__.renderContact);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDRLQUFxRTtBQUNqSCw0Q0FBNEMsOEpBQThEO0FBQzFHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUMsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZ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QTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVPO0FBQ1AsNENBQTRDLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ0E7QUFDTTtBQUNOO0FBQ0E7QUFDVTtBQUNWO0FBQ0U7QUFDMUM7QUFDQSwrREFBYyxDQUFDLGlEQUFZLEVBQUUsaURBQVUsRUFBRSxpREFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLElBQUksdURBQVUsWUFBWSxpREFBVSxFQUFFLGlEQUFVLEVBQUUsdURBQWE7QUFDL0QsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9jbGVhclBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY2luemVsLWRlY29yYXRpdmUtdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvamFzb24tbGV1bmctcG9JN0RlbEZpVkEtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogY2luemVsLWRlY29yYXRpdmUtcmVndWxhciAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXHJcbn1cclxuXHJcbi8qIFZBUklBQkxFUyAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbiAgLS1IRUFERVItQkctQzogIzIzMTEyMztcclxuICAtLUhFQURFUi1BTFQ6ICMyMzExMjM7XHJcbiAgLS1IRUFERVItQUxUMjogYWxpY2VibHVlO1xyXG4gIC0tSEVBREVSLUJUTjogYWxpY2VibHVlO1xyXG4gIC0tUEFHRS1CRy1DOiAjMzkzZTQxO1xyXG4gIC0tUEFHRS1DOiBhbGljZWJsdWU7XHJcbiAgLS1QQUdFLUJHLUMtVDogaHNsYSgzMDAsIDMzJSwgMTAlLCAwLjYzKTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmcjtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUMpO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGdyaWQtY29sdW1uOiAyLzM7XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaGVhZGVyX19saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyX19idXR0b24ge1xyXG4gIGhlaWdodDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiLCBzZXJpZjtcclxufVxyXG5cclxuLmhlYWRlcl9fYnV0dG9uVGV4dCB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC03cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbn1cclxuLmhlYWRlcl9fYnV0dG9uOmhvdmVyIC5oZWFkZXJfX2J1dHRvblRleHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4uaGVhZGVyX19idXR0b246aG92ZXIgLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGVhZGVyX19idXR0b24uYWN0aXZlIC5oZWFkZXJfX2J1dHRvblRleHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxufVxyXG4uaGVhZGVyX19idXR0b24uYWN0aXZlIC5oZWFkZXJfX2J1dHRvblRleHQ6OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogUEFHRSAqL1xyXG5cclxuLnBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDg2dmg7XHJcbiAgY29sb3I6IHZhcigtLVBBR0UtQyk7XHJcbn1cclxuXHJcbi8qIE1BSU4gKi9cclxuXHJcbi5tYWluQ29udGVudFdyYXBwZXIge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB3aWR0aDogY2xhbXAoMzUwcHgsIDg1JSwgNzAwcHgpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYWluSGVhZGluZyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MTVweCkge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MTVweCkge1xyXG4gIC5tYWluSGVhZGluZyB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIH1cclxufVxyXG4ubWFpbkltZyB7XHJcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCAxMDAlLCA0MDBweCk7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1IRUFERVItQlROKTtcclxufVxyXG4ubWFpblAge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxufVxyXG5cclxuLyogTUVOVSAqL1xyXG5cclxuLm1lbnVDb250YWluZXIge1xyXG4gIGhlaWdodDogMDtcclxuICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDkwJSwgNzAwcHgpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVudUhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lbnVIZWFkaW5nIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudUl0ZW0ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUhFQURFUi1CVE4pO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51SXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLm1lbnVJbWcge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudUl0ZW1IZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1lbnVJdGVtRGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLm1lbnVJdGVtUHJpY2Uge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi8qIENPTlRBQ1QgKi9cclxuXHJcbi5jb250YWN0Q29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgbWluLWhlaWdodDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCA4NSUsIDcwMHB4KTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWN0SDIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxufVxyXG4uY29udGFjdEZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuLmxhYmVsIHtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuLmlucHV0IHtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJHLUMpO1xyXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CRy1DKTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jb250YWN0QnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQUxUKTtcclxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMpO1xyXG59XHJcblxyXG4uYWRkcmVzc1dyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmFkZHJlc3Mge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbn1cclxuXHJcbi8qIEZPT1RFUiAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgbWluLWhlaWdodDogNHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xyXG4gIGNvbG9yOiB2YXIoLS1QQUdFLUMpO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuYTphbnktbGluayB7XHJcbiAgY29sb3I6IHZhcigtLUhFQURFUi1CVE4pO1xyXG59XHJcblxyXG4uZm9vdGVyUDpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uZm9vdGVyUDpsYXN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLyogU0NST0xMQkFSICovXHJcblxyXG4ubWFpbkNvbnRlbnRXcmFwcGVyLFxyXG4uY29udGFjdENvbnRhaW5lcixcclxuLm1lbnVDb250YWluZXIge1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLUhFQURFUi1BTFQpIHZhcigtLVBBR0UtQkctQyk7XHJcbn1cclxuLm1haW5Db250ZW50V3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi5tZW51Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmNvbnRhY3RDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLm1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLm1lbnVDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNERBQThFLEVBQUUsNERBQTREO0FBQzlJOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlEQUFrRTtFQUNsRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLHNCQUFz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QUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsY0FBYzs7QUFFZDs7O0VBR0UscUJBQXFCO0VBQ3JCLG1EQUFtRDtBQUNyRDtBQUNBOzs7RUFHRSxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLDRDQUE0QztBQUM5Qzs7QUFFQTs7O0VBR0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaW56ZWwtZGVjb3JhdGl2ZS1yZWd1bGFyIC0gbGF0aW4gKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsIERlY29yYXRpdmVcXFwiO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9jaW56ZWwtZGVjb3JhdGl2ZS12MTQtbGF0aW4tcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWQVJJQUJMRVMgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICAtLUhFQURFUi1CRy1DOiAjMjMxMTIzO1xcclxcbiAgLS1IRUFERVItQUxUOiAjMjMxMTIzO1xcclxcbiAgLS1IRUFERVItQUxUMjogYWxpY2VibHVlO1xcclxcbiAgLS1IRUFERVItQlROOiBhbGljZWJsdWU7XFxyXFxuICAtLVBBR0UtQkctQzogIzM5M2U0MTtcXHJcXG4gIC0tUEFHRS1DOiBhbGljZWJsdWU7XFxyXFxuICAtLVBBR0UtQkctQy1UOiBoc2xhKDMwMCwgMzMlLCAxMCUsIDAuNjMpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvamFzb24tbGV1bmctcG9JN0RlbEZpVkEtdW5zcGxhc2guanBnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAxZnI7XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQyk7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19idXR0b24ge1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVDIpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19idXR0b25UZXh0IHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1BTFQyKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fYnV0dG9uOmhvdmVyIC5oZWFkZXJfX2J1dHRvblRleHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xcclxcbn1cXHJcXG4uaGVhZGVyX19idXR0b246aG92ZXIgLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2J1dHRvbi5hY3RpdmUgLmhlYWRlcl9fYnV0dG9uVGV4dCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxyXFxufVxcclxcbi5oZWFkZXJfX2J1dHRvbi5hY3RpdmUgLmhlYWRlcl9fYnV0dG9uVGV4dDo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIFBBR0UgKi9cXHJcXG5cXHJcXG4ucGFnZSB7XFxyXFxuICBtaW4taGVpZ2h0OiA4NnZoO1xcclxcbiAgY29sb3I6IHZhcigtLVBBR0UtQyk7XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG4ubWFpbkNvbnRlbnRXcmFwcGVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgd2lkdGg6IGNsYW1wKDM1MHB4LCA4NSUsIDcwMHB4KTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gNWZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DLVQpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5IZWFkaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MTVweCkge1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTE1cHgpIHtcXHJcXG4gIC5tYWluSGVhZGluZyB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluSW1nIHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgMTAwJSwgNDAwcHgpO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tSEVBREVSLUJUTik7XFxyXFxufVxcclxcbi5tYWluUCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSAqL1xcclxcblxcclxcbi5tZW51Q29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCA5MCUsIDcwMHB4KTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZW51SGVhZGluZyB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lbnVIZWFkaW5nIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUhFQURFUi1CVE4pO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWcge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbUhlYWRpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtRGVzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1QcmljZSB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRBQ1QgKi9cXHJcXG5cXHJcXG4uY29udGFjdENvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBtaW4taGVpZ2h0OiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgODUlLCA3MDBweCk7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDVmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBBR0UtQkctQy1UKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0SDIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsIERlY29yYXRpdmVcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcclxcbn1cXHJcXG4uY29udGFjdEZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IRUFERVItQkctQyk7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1CRy1DKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1IRUFERVItQlROKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRhY3RCdXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUFMVCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5jb250YWN0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhFQURFUi1BTFQpO1xcclxcbiAgY29sb3I6IHZhcigtLUhFQURFUi1CVE4pO1xcclxcbn1cXHJcXG4uY29udGFjdEJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3NXcmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5hZGRyZXNzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWluLWhlaWdodDogNHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QQUdFLUJHLUMtVCk7XFxyXFxuICBjb2xvcjogdmFyKC0tUEFHRS1DKTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYTphbnktbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tSEVBREVSLUJUTik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJQOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcbi5mb290ZXJQOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFNDUk9MTEJBUiAqL1xcclxcblxcclxcbi5tYWluQ29udGVudFdyYXBwZXIsXFxyXFxuLmNvbnRhY3RDb250YWluZXIsXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1IRUFERVItQUxUKSB2YXIoLS1QQUdFLUJHLUMpO1xcclxcbn1cXHJcXG4ubWFpbkNvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhcixcXHJcXG4ubWVudUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIsXFxyXFxuLmNvbnRhY3RDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluQ29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxcclxcbi5tZW51Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcXHJcXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluQ29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxcclxcbi5tZW51Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcXHJcXG4uY29udGFjdENvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUEFHRS1CRy1DKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbGVhclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gIHBhZ2UuZm9yRWFjaCgocGFnZSkgPT4gcGFnZS5yZW1vdmUoKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG5hbWVQYXR0ZXJuID0gL15bYS16QS1aXFxkXXsyLDIwfSQvO1xyXG4gIGNvbnN0IGVtYWlsUGF0dGVybiA9XHJcbiAgICAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokL2k7XHJcbiAgY29uc3QgbnVtYmVyUGF0dGVybiA9XHJcbiAgICAvXihcXGR7MSwyfVxccz8pP1xcKD9cXGR7Myw0fVxcKT9bXFxzLi1dP1xcZHszLDR9W1xccy4tXT9cXGR7NCw1fSQvO1xyXG5cclxuICBjb25zdCBjb250YWN0UGFnZSA9IGAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UgY29udGFjdFwiIGlkPVwiY29udGFjdFBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjb250YWN0SDJcIj5mYW5jeSBjb250YWN0IHVzITwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInN1Ym1pdFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzcz1cImNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cIm5hbWVcIj5uYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiJHtuYW1lUGF0dGVybn1cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKYWNrIEJsYWNrXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiJHtlbWFpbFBhdHRlcm59XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWx5QGVtYWlsLm5vcGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwibnVtYmVyXCI+cGhvbmUgbnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIiR7bnVtYmVyUGF0dGVybn1cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI1NS01NTUtNTU1LTU1NTVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwidGV4dGFyZWFcIj50ZXh0OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjZcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3RCdXR0b25cIiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3NXcmFwcGVyXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiYWRkcmVzc1RlbFwiPmNhbGwgdXMhOiA0NC00NDQtNDQ0LTQ0NDQ8L3A+XHJcbiAgICAgIDxhZGRyZXNzIGNsYXNzPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgIEZhbmN5IHJlc3RhdXJhbnQgPGJyIC8+XHJcbiAgICAgICAgbWFkZVVwIFN0ci4gMTIzIDxiciAvPlxyXG4gICAgICAgIG1hZGVVcENpdHksIDQ0NDQ0LCBtYWRlVXBDb3VudHJ5XHJcbiAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBjb250YWN0UGFnZSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCBmb290ZXIgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICA8cCBjbGFzcz1cImZvb3RlclBcIj5cclxuICAgICAgTWFkZSBieVxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rhcmtlc3RvZlRpbWVzXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+RGFya1RpbWVzPC9hXHJcbiAgICAgID5cclxuICAgIDwvcD5cclxuICAgIDxwIGNsYXNzPVwiZm9vdGVyUFwiPlxyXG4gICAgICBQaG90byBieVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbmluamFzb24/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5KYXNvbiBMZXVuZzwvYVxyXG4gICAgICA+XHJcbiAgICAgIG9uXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9wb0k3RGVsRmlWQT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlVuc3BsYXNoPC9hXHJcbiAgICAgID5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBmb290ZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgIFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbGlcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFpbkJ1dHRvblwiIGNsYXNzPVwiaGVhZGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyX19idXR0b25UZXh0XCI+aG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19saVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtZW51QnV0dG9uXCIgY2xhc3M9XCJoZWFkZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX2J1dHRvblRleHRcIj5tZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX2xpXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbnRhY3RCdXR0b25cIiBjbGFzcz1cImhlYWRlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlcl9fYnV0dG9uVGV4dFwiPmNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxpemF0aW9uID0gKHBpZWNlMSwgcGllY2UyLCBwaWVjZTMpID0+IHtcclxuICBwaWVjZTEoKTtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5CdXR0b25cIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgcGllY2UyKCk7XHJcbiAgcGllY2UzKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZW5kZXJNYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG1haW5QYWdlID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UgbWFpblwiIGlkPVwibWFpblBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1haW5IZWFkaW5nXCI+ZmFuY3kgaGVhZGluZzwvaDE+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWFpbkltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuLi9pbWcvcGhvdG8tMTU3MjcxNTM3NjcwMS05ODU2ODMxOWZkMGIuYXZpZlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJjaGVmIHdvcmtpbmcgb2YgYSBwbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMyMFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMjBcIlxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1haW5QXCI+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnYSBzZWRcclxuICAgICAgICAgICAgICAgIHV0IHZlbCBpcHNhIGluIGFsaXF1YW0gZXhlcmNpdGF0aW9uZW0gY29uc2VjdGV0dXIgaXVzdG8sIHNhZXBlIGhpY1xyXG4gICAgICAgICAgICAgICAgYWxpcXVpZCwgaWQgY3VtcXVlIHN1c2NpcGl0LCBpbXBlZGl0IGl1cmUgcXVpc3F1YW0gbmVxdWUuIE9kaXQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbSBibGFuZGl0aWlzIHBvcnJvIGF1dCBtYWlvcmVzIGFuaW1pIGZhY2lsaXMgdGVuZXR1clxyXG4gICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBxdWlzcXVhbSwgcXVvIHZlbmlhbSBtb2xsaXRpYSB2ZXJvLCBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgICAgYXNzdW1lbmRhIGRpZ25pc3NpbW9zIGRvbG9ydW0gaXVzdG8gaW4gZXVtLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgbWFpblBhZ2UpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcclxuICBjb25zdCBtZW51UGFnZSA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlIG1lbnVcIiBpZD1cIm1lbnVQYWdlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudUNvbnRhaW5lclwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtZW51SGVhZGluZ1wiPmZhbmN5IGJvbmVhcHBsZXRlYTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtZW51SW1nXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm1lbnVJdGVtSGVhZGluZ1wiPmZhbmN5IGZyZW5jaCB3b3JkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbURlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBtYXhpbWVcclxuICAgICAgICAgIHNpbWlsaXF1ZSB2ZWwgcXVvcyBwcmFlc2VudGl1bSwgZXNzZSBjb3Jwb3JpcyBsaWJlcm8gYWQsIGF0LCBpdXJlXHJcbiAgICAgICAgICBpcHNhbT8gUXVhbSBhdHF1ZSBzYWVwZSBzZXF1aT9cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbVByaWNlXCI+NTAwJDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtZW51SW1nXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm1lbnVJdGVtSGVhZGluZ1wiPmZhbmN5IGZyZW5jaCB3b3JkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbURlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBtYXhpbWVcclxuICAgICAgICAgIHNpbWlsaXF1ZSB2ZWwgcXVvcyBwcmFlc2VudGl1bSwgZXNzZSBjb3Jwb3JpcyBsaWJlcm8gYWQsIGF0LCBpdXJlXHJcbiAgICAgICAgICBpcHNhbT8gUXVhbSBhdHF1ZSBzYWVwZSBzZXF1aT9cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbVByaWNlXCI+NTAwJDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtZW51SW1nXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm1lbnVJdGVtSGVhZGluZ1wiPmZhbmN5IGZyZW5jaCB3b3JkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbURlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBtYXhpbWVcclxuICAgICAgICAgIHNpbWlsaXF1ZSB2ZWwgcXVvcyBwcmFlc2VudGl1bSwgZXNzZSBjb3Jwb3JpcyBsaWJlcm8gYWQsIGF0LCBpdXJlXHJcbiAgICAgICAgICBpcHNhbT8gUXVhbSBhdHF1ZSBzYWVwZSBzZXF1aT9cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbVByaWNlXCI+NTAwJDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJtZW51SW1nXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIiAvPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm1lbnVJdGVtSGVhZGluZ1wiPmZhbmN5IGZyZW5jaCB3b3JkczwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbURlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBtYXhpbWVcclxuICAgICAgICAgIHNpbWlsaXF1ZSB2ZWwgcXVvcyBwcmFlc2VudGl1bSwgZXNzZSBjb3Jwb3JpcyBsaWJlcm8gYWQsIGF0LCBpdXJlXHJcbiAgICAgICAgICBpcHNhbT8gUXVhbSBhdHF1ZSBzYWVwZSBzZXF1aT9cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51SXRlbVByaWNlXCI+NTAwJDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgbWVudVBhZ2UpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9IChpZCwgbWFpbiwgbWVudSwgY29udGFjdCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHN3aXRjaCAoaWQpIHtcclxuICAgIGNhc2UgXCJtYWluQnV0dG9uXCI6XHJcbiAgICAgIG1haW4oKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibWVudUJ1dHRvblwiOlxyXG4gICAgICBtZW51KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImNvbnRhY3RCdXR0b25cIjpcclxuICAgICAgY29udGFjdCgpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJNYWluIH0gZnJvbSBcIi4vbWFpblBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tIFwiLi9tZW51UGFnZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tIFwiLi9pbml0aWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9jbGVhclBhZ2VcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlclBhZ2VcIjtcclxuXHJcbmluaXRpYWxpemF0aW9uKHJlbmRlckhlYWRlciwgcmVuZGVyTWFpbiwgcmVuZGVyRm9vdGVyKTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fYnV0dG9uXCIpO1xyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQuY2xvc2VzdChcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuICAgIGNsZWFyUGFnZSgpO1xyXG4gICAgcmVuZGVyUGFnZSh0YXJnZXQuaWQsIHJlbmRlck1haW4sIHJlbmRlck1lbnUsIHJlbmRlckNvbnRhY3QpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9