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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search_button.png */ \"./src/images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/star_empty.png */ \"./src/images/star_empty.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/star_filled.png */ \"./src/images/star_filled.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #111111;\\n  color: #fff;\\n\\n  min-width: 430px;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\ndialog:-internal-dialog-in-top-layer::backdrop {\\n  background: rgba(0, 0, 0, 0.5);\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1100px;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.main {\\n  margin: 0 auto;\\n  /* min-width: none; */\\n}\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 15%);\\n  grid-column-gap: 142px;\\n  grid-row-gap: 48px;\\n}\\n\\n.header-return-button {\\n  display: none;\\n}\\n\\n@media (max-width: 1170px) {\\n  .item-view {\\n    width: 840px;\\n  }\\n  .item-list {\\n    display: grid;\\n    margin: 48px 0;\\n    grid-template-columns: repeat(3, 15%);\\n    grid-column-gap: 204px;\\n    grid-row-gap: 48px;\\n  }\\n}\\n\\n@media (max-width: 900px) {\\n  .item-view {\\n    width: 670px;\\n  }\\n  .item-list {\\n    display: grid;\\n    margin: 48px 0;\\n    grid-template-columns: repeat(3, 15%);\\n    grid-column-gap: 144px;\\n    grid-row-gap: 48px;\\n  }\\n}\\n\\n@media (max-width: 730px) {\\n  .item-view {\\n    width: 590px;\\n  }\\n  .item-list {\\n    display: grid;\\n    margin: 48px 0;\\n    grid-template-columns: repeat(3, 15%);\\n    grid-column-gap: 115px;\\n    grid-row-gap: 48px;\\n  }\\n\\n  .movie-detail-poster {\\n    display: none;\\n  }\\n\\n  .movie-detail-container {\\n    width: 100%;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n  }\\n\\n  .movie-detail-inner-wrapper {\\n    width: 100%;\\n  }\\n  .movie-detail-info {\\n    width: 100%;\\n  }\\n}\\n\\n@media (max-width: 640px) {\\n  .item-view {\\n    width: 390px;\\n  }\\n  .item-list {\\n    display: grid;\\n    margin: 48px 0;\\n    grid-template-columns: repeat(2, 15%);\\n    grid-column-gap: 152px;\\n    grid-row-gap: 48px;\\n  }\\n\\n  .movie-detail-poster {\\n    display: none;\\n  }\\n\\n  .movie-detail-container {\\n    width: 100%;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n  }\\n\\n  .movie-detail-inner-wrapper {\\n    width: 100%;\\n  }\\n\\n  .movie-detail-info {\\n    width: 100%;\\n  }\\n\\n  .search-box input {\\n    display: none;\\n  }\\n\\n  header.search-bar-only .search-box {\\n    width: 92%;\\n    margin: 0 auto;\\n  }\\n\\n  header.search-bar-only form {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  header.search-bar-only #movie-list-logo {\\n    display: none;\\n  }\\n\\n  header.search-bar-only input {\\n    display: inline-block;\\n    width: 90%;\\n  }\\n\\n  header.search-bar-only .header-return-button {\\n    display: block;\\n    background-color: rgb(243 63 63);\\n    width: 34px;\\n    height: 34px;\\n    border: none;\\n    border-radius: 5px;\\n    margin-right: 6px;\\n    text-align: center;\\n  }\\n}\\n\\n.scroll-to-top-button {\\n  position: fixed;\\n  bottom: 5%;\\n  right: 5%;\\n  display: block;\\n  padding: 10px;\\n  font-size: 30px;\\n  background-color: white;\\n  border-radius: 100px;\\n  box-shadow: -4px 3px 44px 0px rgba(0, 0, 0, 1);\\n  cursor: pointer;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  display: flex;\\n  align-items: end;\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #111111;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 0.1px solid rgba(207, 207, 207, 0.861);\\n  margin-bottom: 48px;\\n\\n  box-shadow: 0 4px 10px -2px rgb(74, 74, 74);\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px 10px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box input {\\n  border: 0;\\n}\\n\\nheader .search-box .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.movie-list-title {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  width: 100%;\\n}\\n\\n.fallback-container {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  display: flex;\\n  flex-direction: column;\\n}\\n.fallback-image {\\n  width: 300px;\\n  margin: 0 auto;\\n}\\n.fallback-message {\\n  font-size: 1.5rem;\\n  text-align: center;\\n  margin-top: 0.5rem;\\n}\\n\\n.fallback-handle-button {\\n  background: #ef7e7e;\\n  color: #fff;\\n  font-weight: bold;\\n  font-size: 16px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 15px auto;\\n\\n  border: none;\\n  padding: 10px 15px;\\n  border-radius: 15px;\\n  width: 100%;\\n}\\n\\n.network-error-fallback-modal {\\n  width: fit-content;\\n}\\n\\n.network-error-fallback-modal h1 {\\n  font-size: 20px;\\n  font-weight: 700;\\n  width: fit-content;\\n  max-width: 0 auto;\\n\\n  margin-bottom: 10px;\\n}\\n\\n/* Movie Detail Modal */\\n.movie-detail-modal {\\n  padding: 0;\\n}\\n\\n.movie-detail-container {\\n  background: #212122;\\n  color: #f1f1f1;\\n  padding: 0;\\n  max-width: 730px;\\n}\\n\\n.movie-detail-hr {\\n  margin: 0;\\n  background-color: rgba(241, 241, 241, 0.25);\\n  border: 0;\\n  height: 0.1px;\\n}\\n\\n.movie-detail-title {\\n  font-size: 18px;\\n  font-weight: 600;\\n\\n  width: fit-content;\\n  margin: 0 auto;\\n\\n  padding: 18px;\\n}\\n\\n.movie-detail-inner-wrapper {\\n  display: flex;\\n  padding: 35px 28px 45px 28px;\\n}\\n\\n.movie-detail-poster {\\n  width: 220px;\\n  height: 330px;\\n  object-fit: cover;\\n\\n  margin-right: 25px;\\n}\\n.movie-detail-info {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.movie-detail-genre {\\n  margin-right: 10px;\\n  font-weight: 200;\\n}\\n\\n.movie-detail-vote {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.movie-detail-star-icon {\\n  width: 20px;\\n  height: 20px;\\n  margin-right: 2.5px;\\n}\\n\\n.movie-detail-overview {\\n  margin-top: 10px;\\n  line-height: 160%;\\n  font-weight: 200;\\n}\\n\\n.flex-box {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.modal-close-button {\\n  position: absolute;\\n  width: 30px;\\n  height: 30px;\\n  top: 11px;\\n  right: 25px;\\n  cursor: pointer;\\n  border: 0;\\n  background-color: transparent;\\n  padding: 0;\\n}\\n\\n.modal-close-button-image {\\n  width: 100%;\\n}\\n\\n.rating-bar {\\n  display: flex;\\n  background-color: #383839;\\n  width: 100%;\\n  padding: 14px 15px;\\n  align-items: center;\\n  border-radius: 16px;\\n  min-width: 360px;\\n\\n  margin-top: 50px;\\n}\\n\\n.rating-label {\\n  margin-right: 10px;\\n  font-weight: 550;\\n}\\n\\n.rating-star-container {\\n  display: flex;\\n}\\n\\n.rating-star {\\n  width: 27px;\\n  height: 27px;\\n}\\n\\n.rating-text {\\n  margin-left: 10px;\\n  font-weight: 200;\\n}\\n\\n.movie-item {\\n  cursor: pointer;\\n  width: fit-content;\\n}\\n\\n.close {\\n  display: none;\\n}\\n\\n/* rating bar */\\ninput.rating-checkbox {\\n  display: none;\\n}\\n\\ninput.rating-checkbox + label {\\n  cursor: pointer;\\n}\\n\\n/* label:before에 체크하기 전 상태 CSS */\\ninput.rating-checkbox + label:before {\\n  width: 27px;\\n  height: 27px;\\n  content: \\\"\\\";\\n  display: inline-block;\\n  background-position: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n}\\n\\n/* label:before에 체크 된 상태 CSS */\\ninput.rating-checkbox:checked + label:before {\\n  width: 27px;\\n  height: 27px;\\n  content: \\\"\\\";\\n  background-repeat: no-repeat;\\n  background-position: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apis/APIClient.ts":
/*!*******************************!*\
  !*** ./src/apis/APIClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ APIClient)\n/* harmony export */ });\n/* harmony import */ var _errors_APIError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/APIError */ \"./src/errors/APIError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass APIClient {\n    constructor(baseUrl, header) {\n        this.baseUrl = new URL(baseUrl);\n        this.header = new Headers(header);\n    }\n    get(path, params) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const url = `${this.baseUrl.toString()}${path}?${params.toString()}`;\n            const response = yield fetch(url, {\n                headers: this.header,\n            });\n            if (response.ok) {\n                const data = yield response.json();\n                return data;\n            }\n            else {\n                throw new _errors_APIError__WEBPACK_IMPORTED_MODULE_0__[\"default\"](response.status);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/APIClient.ts?");

/***/ }),

/***/ "./src/apis/movieList.ts":
/*!*******************************!*\
  !*** ./src/apis/movieList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail),\n/* harmony export */   \"getPopularMovieList\": () => (/* binding */ getPopularMovieList),\n/* harmony export */   \"getSearchMovieList\": () => (/* binding */ getSearchMovieList)\n/* harmony export */ });\n/* harmony import */ var _APIClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIClient */ \"./src/apis/APIClient.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst BASE_URL = \"https://api.themoviedb.org\";\nconst POPULAR_MOVIE_LIST_PATH = \"/3/movie/popular\";\nconst SEARCH_MOVIE_PATH = `/3/search/movie`;\nconst KOREAN_LANGUAGE = \"ko-KR\";\nconst header = {\n    accept: \"application/json\",\n    Authorization: `Bearer ${\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDNiYWEwNzFiMGZlZGU2NDIzOGQ2MGZlMmNhZGU5NSIsInN1YiI6IjY1ZjNiYzk3NTk1YTU2MDBjZDA0OWVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCUJE3NzPe2R84dPBckieiRbP8AAyqIqU3q2eUacPuU\"}`,\n};\nconst BASE_POSTER_URL = \"https://image.tmdb.org/t/p/w220_and_h330_face\";\nconst parseMovieItem = ({ id, title, poster_path, vote_average, }) => ({\n    id,\n    title,\n    posterSrc: BASE_POSTER_URL + poster_path,\n    voteAverage: vote_average,\n});\nconst parseMovieDetail = ({ id, title, poster_path, vote_average, genres, overview, }) => ({\n    id,\n    title,\n    posterSrc: BASE_POSTER_URL + poster_path,\n    voteAverage: vote_average,\n    genres: genres.map(({ name }) => name),\n    overview,\n});\nconst tmdbAPIClient = new _APIClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"](BASE_URL, header);\nconst getPopularMovieList = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield tmdbAPIClient.get(POPULAR_MOVIE_LIST_PATH, new URLSearchParams({\n        language: KOREAN_LANGUAGE,\n        page: page.toString(),\n    }));\n    return data.results.map(parseMovieItem);\n});\nconst getSearchMovieList = (query, page = 1) => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield tmdbAPIClient.get(SEARCH_MOVIE_PATH, new URLSearchParams({\n        language: KOREAN_LANGUAGE,\n        query,\n        page: page.toString(),\n    }));\n    return data.results.map(parseMovieItem);\n});\nconst getMovieDetail = (movieId) => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield tmdbAPIClient.get(`/3/movie/${movieId}`, new URLSearchParams({\n        language: KOREAN_LANGUAGE,\n    }));\n    return parseMovieDetail(data);\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/movieList.ts?");

/***/ }),

/***/ "./src/components/MovieDetailModal.ts":
/*!********************************************!*\
  !*** ./src/components/MovieDetailModal.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieDetailModal)\n/* harmony export */ });\n/* harmony import */ var _apis_movieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../apis/movieList */ \"./src/apis/movieList.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images */ \"./src/images/index.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _RatingBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RatingBar */ \"./src/components/RatingBar.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\ncustomElements.define(\"rating-bar\", _RatingBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nclass MovieDetailModal extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor({ targetId, movieDetailModalState, movieDetail, }) {\n        super({ targetId });\n        this.movieDetailModalState = movieDetailModalState;\n        this.movieDetail = movieDetail || null;\n    }\n    getTemplate() {\n        const movieDetail = this.movieDetail;\n        if (!movieDetail) {\n            return `\n      <dialog id=\"movie-detail-modal\" class=\"movie-detail-modal\">\n        <div class=\"movie-detail-container\">\n          <p>영화 정보가 없습니다.</p>\n        </div>\n      </dialog>\n      `;\n        }\n        const { id, title, posterSrc, genres, voteAverage, overview } = movieDetail;\n        return `\n    <dialog id=\"movie-detail-modal\" class=\"movie-detail-modal\">\n    <div class=\"movie-detail-container\">\n      <h1 class=\"movie-detail-title\">\n        ${title}\n      </h1>\n      <button id=\"modal-close-button\" class=\"modal-close-button\" type=\"button\">\n        <img class=\"modal-close-button-image\" src=\"${_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalCloseButton}\" />\n      </button>\n      <hr class=\"movie-detail-hr\" />\n      <div class=\"movie-detail-inner-wrapper\">\n        <img class=\"movie-detail-poster\" src=${posterSrc} />\n        <div class=\"movie-detail-info\">\n          <div>\n            <div class=\"flex-box\">\n              <p class=\"movie-detail-genre\">${genres.join(\", \")}</p>\n              <p class=\"movie-detail-vote\"><img class=\"movie-detail-star-icon\" src=\"${_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].starFilled}\" />${voteAverage}</p>\n            </div>\n            <p class=\"movie-detail-overview\">${overview || \"🎬 영화 줄거리 정보가 없습니다\"}</p>\n          </div>\n          <rating-bar movieId=\"${id}\"></rating-bar>\n        </div>\n      </div>\n    </div>\n    </dialog>\n    `;\n    }\n    onInitialized() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { isOpen, movieId } = this.movieDetailModalState.get();\n            if (isOpen) {\n                const movieDetail = yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_0__.getMovieDetail)(movieId);\n                this.movieDetail = movieDetail;\n                this.render();\n                this.openModal();\n            }\n        });\n    }\n    setEvent() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"modal-close-button\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.closeModal.bind(this));\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-detail-modal\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", this.handleModalClick.bind(this));\n    }\n    openModal() {\n        var _a, _b;\n        (_b = (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(this.targetId)) === null || _a === void 0 ? void 0 : _a.querySelector(\"dialog\")) === null || _b === void 0 ? void 0 : _b.showModal();\n    }\n    closeModal() {\n        var _a, _b;\n        this.movieDetail = null;\n        (_b = (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(this.targetId)) === null || _a === void 0 ? void 0 : _a.querySelector(\"dialog\")) === null || _b === void 0 ? void 0 : _b.close();\n    }\n    handleModalClick(event) {\n        const $dialog = event.target;\n        if ($dialog.nodeName === \"DIALOG\") {\n            this.closeModal();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieDetailModal.ts?");

/***/ }),

/***/ "./src/components/MovieHeader.ts":
/*!***************************************!*\
  !*** ./src/components/MovieHeader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieHeader)\n/* harmony export */ });\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images */ \"./src/images/index.ts\");\n\n\n\nconst MOVIE_QUERY_MIN_LENGTH = 1;\nconst MOVIE_QUERY_MAX_LENGTH = 500;\nclass MovieHeader extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, queryState }) {\n        super({ targetId });\n        this.queryState = queryState;\n    }\n    getTemplate() {\n        return `\n      <h1 id=\"movie-list-logo\"><img src=\"${_images__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logo}\" alt=\"MovieList 로고\" /></h1>\n      <button id=\"header-return-button\" class=\"header-return-button\">⏎</button>\n      <div class=\"search-box\">\n          <form id=\"search-form\">\n            <input name=\"search-query\" type=\"text\" placeholder=\"검색\" />\n            <button class=\"search-button\">검색</button>\n          </form>\n      </div>\n  `;\n    }\n    setEvent() {\n        var _a, _b;\n        const $form = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-form\");\n        $form === null || $form === void 0 ? void 0 : $form.addEventListener(\"submit\", (event) => this.handleSearchMovie(event, $form));\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"movie-list-logo\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.handleLogoClick.bind(this));\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"header-return-button\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", this.removeSearchBarOnly.bind(this));\n    }\n    handleSearchMovie(event, form) {\n        event.preventDefault();\n        const $header = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(this.targetId);\n        if (window.innerWidth <= 640 &&\n            !$header.classList.contains(\"search-bar-only\")) {\n            return $header.classList.add(\"search-bar-only\");\n        }\n        const { isValid, message } = this.validateSearchQuery(form[\"search-query\"].value);\n        if (!isValid) {\n            alert(message);\n            return;\n        }\n        const searchQuery = form[\"search-query\"].value;\n        this.queryState.set(searchQuery);\n    }\n    handleLogoClick() {\n        this.queryState.reset();\n        const $searchForm = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-form\");\n        $searchForm === null || $searchForm === void 0 ? void 0 : $searchForm.reset();\n    }\n    removeSearchBarOnly() {\n        const $header = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(this.targetId);\n        console.log($header);\n        $header.classList.remove(\"search-bar-only\");\n    }\n    validateSearchQuery(searchQuery) {\n        const searchQueryLength = searchQuery.length;\n        if (searchQueryLength < MOVIE_QUERY_MIN_LENGTH) {\n            return {\n                isValid: false,\n                message: `검색어는 ${MOVIE_QUERY_MIN_LENGTH}자 이상 입력해주세요.`,\n            };\n        }\n        if (searchQueryLength > MOVIE_QUERY_MAX_LENGTH) {\n            return {\n                isValid: false,\n                message: `검색어는 ${MOVIE_QUERY_MAX_LENGTH}자 이하로 입력해주세요.`,\n            };\n        }\n        return { isValid: true };\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieHeader.ts?");

/***/ }),

/***/ "./src/components/MovieList/EmptyMovieList.ts":
/*!****************************************************!*\
  !*** ./src/components/MovieList/EmptyMovieList.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmptyMovieList)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ \"./src/images/index.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n\n\n\nclass EmptyMovieList extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor({ targetId, onHomeButton }) {\n        super({ targetId });\n        this.onHomeButton = onHomeButton;\n    }\n    getTemplate() {\n        return `\n    <div class=\"fallback-container\">\n      <img class=\"fallback-image\" src=\"${_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emptyMovieList}\" />\n      <p class=\"fallback-message\">표시할 영화 정보가 없습니다.</p>\n      <button id=\"home-button\" class=\"fallback-handle-button\">초기 화면으로 되돌아가기</button>\n    </div>\n`;\n    }\n    setEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"home-button\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.onHomeButton);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/EmptyMovieList.ts?");

/***/ }),

/***/ "./src/components/MovieList/MovieList.ts":
/*!***********************************************!*\
  !*** ./src/components/MovieList/MovieList.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _templates_movie_generateMovieItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/movie/generateMovieItems */ \"./src/components/templates/movie/generateMovieItems.ts\");\n/* harmony import */ var _templates_error_generateErrorFallbackScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/error/generateErrorFallbackScreen */ \"./src/components/templates/error/generateErrorFallbackScreen.ts\");\n/* harmony import */ var _apis_movieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/movieList */ \"./src/apis/movieList.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _errors_APIError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/APIError */ \"./src/errors/APIError.ts\");\n/* harmony import */ var _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/EventComponent */ \"./src/components/abstract/EventComponent.ts\");\n/* harmony import */ var _EmptyMovieList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmptyMovieList */ \"./src/components/MovieList/EmptyMovieList.ts\");\n/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/throttle */ \"./src/utils/throttle.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\nclass MovieList extends _abstract_EventComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n    constructor({ targetId, queryState, movieDetailModalState, movies = [], skeletonUI, }) {\n        super({ targetId });\n        this.movies = [];\n        this.page = 1;\n        this.isLoading = false;\n        this.isLastPage = false;\n        this.queryState = queryState;\n        this.movieDetailModalState = movieDetailModalState;\n        this.movies = movies;\n        this.skeletonUI = skeletonUI;\n    }\n    getTemplate() {\n        const movieItemsTemplate = (0,_templates_movie_generateMovieItems__WEBPACK_IMPORTED_MODULE_0__.generateMovieItems)(this.movies);\n        return `\n        <div id=\"scroll-to-top-button\" class=\"scroll-to-top-button\">🔝</div>\n        <ul id=\"item-list\" class=\"item-list\">\n          ${movieItemsTemplate}\n        </ul>\n    `;\n    }\n    onInitialized() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                this.skeletonUI.render(this.targetId);\n                this.resetPage();\n                const movies = yield this.fetchMovies(this.page, this.queryState.get());\n                this.movies = movies;\n                if (movies.length === 0) {\n                    this.renderEmptyMovieList();\n                    return;\n                }\n                this.render();\n            }\n            catch (error) {\n                if (error instanceof Error) {\n                    this.catchErrorOnInitialized(error);\n                }\n            }\n        });\n    }\n    setEvent() {\n        var _a, _b, _c;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"item-list\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.handleMovieItemClick.bind(this));\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"watch-more-button\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", this.loadMoreMovies.bind(this));\n        const THROTTLE_DELAY = 500;\n        window.addEventListener(\"scroll\", (0,_utils_throttle__WEBPACK_IMPORTED_MODULE_7__.throttle)(this.handleScroll.bind(this), THROTTLE_DELAY));\n        (_c = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"scroll-to-top-button\")) === null || _c === void 0 ? void 0 : _c.addEventListener(\"click\", this.scrollToTop);\n    }\n    handleMovieItemClick(event) {\n        const $movieItem = event.target.closest(\".movie-item\");\n        if ($movieItem && $movieItem.classList.contains(\"movie-item\")) {\n            const movieId = $movieItem.dataset.movieId;\n            if (movieId) {\n                this.movieDetailModalState.set({\n                    isOpen: true,\n                    movieId: Number(movieId),\n                });\n            }\n        }\n    }\n    handleScroll() {\n        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;\n        const SCROLL_HEIGHT_BUFFER = 400;\n        if (scrollTop + clientHeight + SCROLL_HEIGHT_BUFFER >= scrollHeight) {\n            this.loadMoreMovies();\n        }\n    }\n    scrollToTop() {\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\n    }\n    loadMoreMovies() {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.isLoading || this.isLastPage) {\n                return;\n            }\n            this.isLoading = true;\n            this.skeletonUI.insert(\"item-list\", \"afterend\");\n            this.page += 1;\n            const additionalMovies = yield this.fetchMovies(this.page, this.queryState.get());\n            this.isLoading = false;\n            this.insertMovieItems(additionalMovies);\n            (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"skeleton-movie-item-list\")) === null || _a === void 0 ? void 0 : _a.remove();\n            const MOVIE_COUNT_PER_PAGE = 20;\n            if (additionalMovies.length < MOVIE_COUNT_PER_PAGE) {\n                this.isLastPage = true;\n            }\n        });\n    }\n    resetPage() {\n        this.page = 1;\n    }\n    fetchMovies(page, query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movies = query\n                ? yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_2__.getSearchMovieList)(query, page)\n                : yield (0,_apis_movieList__WEBPACK_IMPORTED_MODULE_2__.getPopularMovieList)(page);\n            return movies;\n        });\n    }\n    renderEmptyMovieList() {\n        const emptyMovieList = new _EmptyMovieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n            targetId: this.targetId,\n            onHomeButton: () => this.queryState.reset(),\n        });\n        emptyMovieList.initialize();\n    }\n    catchErrorOnInitialized(error) {\n        if (error instanceof _errors_APIError__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n            alert(error.message);\n        }\n        else if (error instanceof Error) {\n            alert(\"네트워크가 원활하지 않습니다. 인터넷 연결 확인 후 다시 시도해주세요.\");\n        }\n        const errorTargetElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(this.targetId);\n        if (errorTargetElement instanceof HTMLElement) {\n            errorTargetElement.innerHTML = (0,_templates_error_generateErrorFallbackScreen__WEBPACK_IMPORTED_MODULE_1__.generateErrorFallbackScreen)();\n        }\n    }\n    insertMovieItems(movies) {\n        var _a;\n        const movieItemsTemplate = (0,_templates_movie_generateMovieItems__WEBPACK_IMPORTED_MODULE_0__.generateMovieItems)(movies);\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(\"item-list\")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML(\"beforeend\", movieItemsTemplate);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/MovieList.ts?");

/***/ }),

/***/ "./src/components/MovieList/MovieListTitle.ts":
/*!****************************************************!*\
  !*** ./src/components/MovieList/MovieListTitle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieListTitle)\n/* harmony export */ });\n/* harmony import */ var _abstract_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseComponent */ \"./src/components/abstract/BaseComponent.ts\");\n\nclass MovieListTitle extends _abstract_BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId, queryState }) {\n        super({ targetId });\n        this.queryState = queryState;\n    }\n    getTemplate() {\n        const query = this.queryState.get();\n        return `\n    <h2 class=\"movie-list-title\">${query ? `\"${query}\" 검색결과` : \"지금 인기 있는 영화\"}</h2>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/MovieListTitle.ts?");

/***/ }),

/***/ "./src/components/RatingBar.ts":
/*!*************************************!*\
  !*** ./src/components/RatingBar.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RatingBar)\n/* harmony export */ });\n/* harmony import */ var _stores_movieRatingsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/movieRatingsStore */ \"./src/stores/movieRatingsStore.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n\n\nconst RATING_STAR_COUNT = 5;\nconst RATING_TO_TEXT = {\n    2: \"2점 최악이에요\",\n    4: \"4점 별로예요\",\n    6: \"6점 보통이에요\",\n    8: \"8점 재미있어요\",\n    10: \"10점 명작이에요\",\n    none: \"별을 눌러 평가해주세요!\",\n};\nconst generateRatingStarsTemplate = (count, fillCount = 0) => {\n    return Array.from({ length: count }).map((_, index) => {\n        const starIndex = index + 1;\n        const isChecked = starIndex <= fillCount;\n        return `\n      <input class=\"rating-checkbox\" type=\"checkbox\" id=\"rating-star-${starIndex}\" value=\"${starIndex * 2}\" ${isChecked ? \"checked\" : \"\"} />\n      <label class=\"rating-start-label\" for=\"rating-star-${starIndex}\"></label>\n      `;\n    });\n};\nclass RatingBar extends HTMLElement {\n    connectedCallback() {\n        this.render();\n        this.setEvent();\n    }\n    render() {\n        this.innerHTML = this.getTemplate();\n    }\n    getTemplate() {\n        const rating = this.myRating();\n        const starFillCount = this.starFillCount(rating);\n        const ratingText = this.ratingText(rating);\n        return `\n    <div class=\"rating-bar\">\n      <p class=\"rating-label\">내 별점</p>\n      <div id=\"rating-star-container\" class=\"rating-star-container\">\n        ${generateRatingStarsTemplate(RATING_STAR_COUNT, starFillCount).join(\"\")}\n      </div>\n      <p id=\"rating-text\" class=\"rating-text\">${ratingText}</p>\n    </div>\n    `;\n    }\n    setEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"rating-star-container\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.handleRatingStarClick.bind(this));\n    }\n    handleRatingStarClick(e) {\n        const target = e.target;\n        if (target.classList.contains(\"rating-checkbox\")) {\n            const rating = parseInt(target.value);\n            this.updateRatingStar(rating);\n            this.updateRatingText(rating);\n            this.updateMovieRatingsStore(rating);\n        }\n    }\n    myRating() {\n        const movieId = Number(this.getAttribute(\"movieId\"));\n        const movieRatings = _stores_movieRatingsStore__WEBPACK_IMPORTED_MODULE_0__.movieRatingsStore.get();\n        return movieRatings.findRating(movieId);\n    }\n    updateRatingStar(rating) {\n        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$$)(\".rating-checkbox\").forEach((star, index) => {\n            const isChecked = index < rating / 2;\n            star.checked = isChecked;\n        });\n    }\n    updateRatingText(rating) {\n        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"rating-text\").textContent = this.ratingText(rating);\n    }\n    ratingText(rating) {\n        if (rating === null) {\n            return RATING_TO_TEXT.none;\n        }\n        return RATING_TO_TEXT[rating];\n    }\n    starFillCount(rating) {\n        return rating ? rating / 2 : 0;\n    }\n    updateMovieRatingsStore(rating) {\n        const movieId = Number(this.getAttribute(\"movieId\"));\n        const movieRatings = _stores_movieRatingsStore__WEBPACK_IMPORTED_MODULE_0__.movieRatingsStore.get();\n        movieRatings.put({ movieId, rating });\n        _stores_movieRatingsStore__WEBPACK_IMPORTED_MODULE_0__.movieRatingsStore.set(movieRatings);\n    }\n}\nRatingBar.observedAttributes = [\"movieId\"];\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/RatingBar.ts?");

/***/ }),

/***/ "./src/components/SkeletonUI.ts":
/*!**************************************!*\
  !*** ./src/components/SkeletonUI.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SkeletonUI)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _templates_movie_generateMovieListSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/movie/generateMovieListSkeleton */ \"./src/components/templates/movie/generateMovieListSkeleton.ts\");\n\n\nclass SkeletonUI {\n    constructor(variant) {\n        this.variant = variant;\n    }\n    render(targetId) {\n        const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(targetId);\n        if (!(element instanceof HTMLElement)) {\n            return;\n        }\n        element.innerHTML = this.generateTemplate();\n    }\n    insert(targetId, position = \"beforeend\") {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(targetId)) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML(position, this.generateTemplate());\n    }\n    generateTemplate() {\n        switch (this.variant) {\n            case \"movie\":\n                return (0,_templates_movie_generateMovieListSkeleton__WEBPACK_IMPORTED_MODULE_1__.generateMovieListSkeleton)();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonUI.ts?");

/***/ }),

/***/ "./src/components/abstract/BaseComponent.ts":
/*!**************************************************!*\
  !*** ./src/components/abstract/BaseComponent.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseComponent)\n/* harmony export */ });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/components/abstract/Observer.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass BaseComponent extends _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor({ targetId }) {\n        super();\n        this.targetId = targetId;\n    }\n    update() {\n        this.initialize();\n    }\n    initialize() {\n        this.render();\n    }\n    render() {\n        const element = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(this.targetId);\n        if (!element) {\n            return;\n        }\n        element.innerHTML = this.getTemplate();\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/BaseComponent.ts?");

/***/ }),

/***/ "./src/components/abstract/EventComponent.ts":
/*!***************************************************!*\
  !*** ./src/components/abstract/EventComponent.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventComponent)\n/* harmony export */ });\n/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ \"./src/components/abstract/BaseComponent.ts\");\n\nclass EventComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    initialize() {\n        super.initialize();\n        this.onInitialized();\n    }\n    render() {\n        super.render();\n        this.setEvent();\n    }\n    onInitialized() { }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/EventComponent.ts?");

/***/ }),

/***/ "./src/components/abstract/Observer.ts":
/*!*********************************************!*\
  !*** ./src/components/abstract/Observer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observer)\n/* harmony export */ });\nclass Observer {\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/abstract/Observer.ts?");

/***/ }),

/***/ "./src/components/templates/error/generateErrorFallbackScreen.ts":
/*!***********************************************************************!*\
  !*** ./src/components/templates/error/generateErrorFallbackScreen.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateErrorFallbackScreen\": () => (/* binding */ generateErrorFallbackScreen)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./src/images/index.ts\");\n\nconst generateErrorFallbackScreen = () => {\n    return `\n    <div class=\"fallback-container\">\n      <img class=\"fallback-image\" src=\"${_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].workers}\" />\n      <p class=\"fallback-message\">예상치 못한 오류가 발생했습니다.</p>\n      <p>같은 현상이 반복되면 관리자에게 문의해 주세요 (010-1234-1234)</p>\n      <button class=\"fallback-handle-button\" onclick=\"location.reload()\">새로고침하기</button>\n    </div>\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/error/generateErrorFallbackScreen.ts?");

/***/ }),

/***/ "./src/components/templates/movie/generateMovieItems.ts":
/*!**************************************************************!*\
  !*** ./src/components/templates/movie/generateMovieItems.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMovieItems\": () => (/* binding */ generateMovieItems)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./src/images/index.ts\");\n\nconst generateMovieItem = (movie) => {\n    const { id, title, posterSrc, voteAverage } = movie;\n    return `\n  <li class=\"movie-item\" data-movie-id=\"${id}\">\n    <div class=\"item-card\">\n      <img class=\"item-thumbnail\" src=\"${posterSrc}\" loading=\"lazy\" alt=\"${title}\" />\n      <p class=\"item-title\">${title}</p>\n      <p class=\"item-score\">\n        <img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].starFilled}\" alt=\"별점\" />\n        ${voteAverage}\n      </p>\n    </div>\n  </li>\n  `;\n};\nconst generateMovieItems = (movies) => {\n    return movies.reduce((movieListTemplate, movieInfo) => {\n        return movieListTemplate + generateMovieItem(movieInfo);\n    }, \"\");\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/movie/generateMovieItems.ts?");

/***/ }),

/***/ "./src/components/templates/movie/generateMovieListSkeleton.ts":
/*!*********************************************************************!*\
  !*** ./src/components/templates/movie/generateMovieListSkeleton.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMovieListSkeleton\": () => (/* binding */ generateMovieListSkeleton)\n/* harmony export */ });\nconst MOVIE_ITEM_SKELETON = `\n  <li>\n    <a href=\"#\">\n      <div class=\"item-card\">\n        <div class=\"item-thumbnail skeleton\"></div>\n        <div class=\"item-title skeleton\"></div>\n        <div class=\"item-score skeleton\"></div>\n      </div>\n    </a>\n  </li>\n`;\nconst generateMovieListSkeleton = (count = 20) => {\n    return `\n      <ul id=\"skeleton-movie-item-list\" class=\"item-list\">\n      ${MOVIE_ITEM_SKELETON.repeat(count)}\n      </ul>\n  `;\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/templates/movie/generateMovieListSkeleton.ts?");

/***/ }),

/***/ "./src/domain/MovieRating.ts":
/*!***********************************!*\
  !*** ./src/domain/MovieRating.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieRating)\n/* harmony export */ });\nconst RATING_VALUES = [2, 4, 6, 8, 10];\nclass MovieRating {\n    constructor({ movieId, rating }) {\n        if (!this.isValidRating(rating)) {\n            throw new Error(\"유효하지 않은 평점입니다.\");\n        }\n        this.movieId = movieId;\n        this.rating = rating;\n    }\n    info() {\n        return { movieId: this.movieId, rating: this.rating };\n    }\n    isSameMovie(movieId) {\n        return this.movieId === movieId;\n    }\n    isValidRating(rating) {\n        return RATING_VALUES.includes(rating);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieRating.ts?");

/***/ }),

/***/ "./src/domain/MovieRatings.ts":
/*!************************************!*\
  !*** ./src/domain/MovieRatings.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieRatings)\n/* harmony export */ });\n/* harmony import */ var _MovieRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieRating */ \"./src/domain/MovieRating.ts\");\n\nclass MovieRatings {\n    constructor(ratings = []) {\n        this.ratings = [];\n        this.ratings = ratings;\n    }\n    info() {\n        return this.ratings.map((rating) => rating.info());\n    }\n    put(movieRatingProps) {\n        const { movieId, rating } = movieRatingProps;\n        const updated = this.ratings.filter((r) => !r.isSameMovie(movieId));\n        updated.push(new _MovieRating__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ movieId, rating }));\n        this.ratings = updated;\n    }\n    findRating(movieId) {\n        const targetRating = this.ratings.find((r) => r.isSameMovie(movieId));\n        return targetRating ? targetRating.info().rating : null;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieRatings.ts?");

/***/ }),

/***/ "./src/errors/APIError.ts":
/*!********************************!*\
  !*** ./src/errors/APIError.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ APIError)\n/* harmony export */ });\nconst STATUS_CODE_TO_MESSAGE = {\n    400: \"Bad Request: 잘못된 요청입니다. 요청의 구문이 잘못되었습니다.\",\n    401: \"Unauthorized: 인증되지 않은 접근입니다. 인증이 필요합니다.\",\n    403: \"Forbidden: 접근이 거부되었습니다. 권한이 없습니다.\",\n    404: \"Not Found: 해당 자료를 찾을 수 없습니다.\",\n    405: \"Method Not Found: 잘못된 요청입니다.\",\n    406: \"Not Acceptable: 허용되지 않은 요청입니다. 서버가 요청을 수락할 수 없습니다.\",\n    422: \"Unprocessable Entity: 유효하지 않은 요청입니다.\",\n    429: \"Too Many Requests: 너무 많은 요청입니다. 잠시 후 다시 시도해 주세요\",\n    500: \"Internal Server Error: 서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n    501: \"Not Implemented: 서버가 요청을 처리할 수 없습니다. 잠시 후 다시 시도해주세요.\",\n    502: \"Bad Gateway: 게이트웨이 오류가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n    503: \"Service Unavailable: 서버 점검 중입니다. 잠시 후 다시 시도해주세요.\",\n    504: \"Gateway Timeout: 게이트웨이 시간 초과가 발생했습니다. 잠시 후 다시 시도해주세요.\",\n};\nconst isStatusCode = (statusCode) => {\n    return Object.keys(STATUS_CODE_TO_MESSAGE).includes(String(statusCode));\n};\nclass APIError extends Error {\n    constructor(statusCode) {\n        if (!isStatusCode(statusCode)) {\n            throw Error(\"Invalid status code\");\n        }\n        super(STATUS_CODE_TO_MESSAGE[statusCode]);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/errors/APIError.ts?");

/***/ }),

/***/ "./src/images/index.ts":
/*!*****************************!*\
  !*** ./src/images/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./src/images/search_button.png\");\n/* harmony import */ var _star_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.png */ \"./src/images/star_empty.png\");\n/* harmony import */ var _star_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.png */ \"./src/images/star_filled.png\");\n/* harmony import */ var _empty_movie_list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty_movie_list.png */ \"./src/images/empty_movie_list.png\");\n/* harmony import */ var _workers_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workers.png */ \"./src/images/workers.png\");\n/* harmony import */ var _modal_close_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-close-button.png */ \"./src/images/modal-close-button.png\");\n\n\n\n\n\n\n\nconst IMAGES = {\n    logo: _logo_png__WEBPACK_IMPORTED_MODULE_0__,\n    searchButton: _search_button_png__WEBPACK_IMPORTED_MODULE_1__,\n    starEmpty: _star_empty_png__WEBPACK_IMPORTED_MODULE_2__,\n    starFilled: _star_filled_png__WEBPACK_IMPORTED_MODULE_3__,\n    emptyMovieList: _empty_movie_list_png__WEBPACK_IMPORTED_MODULE_4__,\n    workers: _workers_png__WEBPACK_IMPORTED_MODULE_5__,\n    modalCloseButton: _modal_close_button_png__WEBPACK_IMPORTED_MODULE_6__,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IMAGES);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ \"./src/styles/common.css\");\n/* harmony import */ var _components_MovieHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MovieHeader */ \"./src/components/MovieHeader.ts\");\n/* harmony import */ var _states_QueryState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/QueryState */ \"./src/states/QueryState.ts\");\n/* harmony import */ var _components_MovieList_MovieListTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieList/MovieListTitle */ \"./src/components/MovieList/MovieListTitle.ts\");\n/* harmony import */ var _components_MovieList_MovieList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MovieList/MovieList */ \"./src/components/MovieList/MovieList.ts\");\n/* harmony import */ var _components_SkeletonUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SkeletonUI */ \"./src/components/SkeletonUI.ts\");\n/* harmony import */ var _components_MovieDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MovieDetailModal */ \"./src/components/MovieDetailModal.ts\");\n/* harmony import */ var _states_MovieDetailModalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states/MovieDetailModalState */ \"./src/states/MovieDetailModalState.ts\");\n\n\n\n\n\n\n\n\nconst queryState = new _states_QueryState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst movieDetailModalState = new _states_MovieDetailModalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nconst movieHeader = new _components_MovieHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    targetId: \"movie-header-target\",\n    queryState,\n});\nconst movieListTitle = new _components_MovieList_MovieListTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    targetId: \"movie-list-title-target\",\n    queryState,\n});\nconst movieListSkeleton = new _components_SkeletonUI__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"movie\");\nconst movieList = new _components_MovieList_MovieList__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    targetId: \"movie-list-target\",\n    queryState,\n    movieDetailModalState,\n    skeletonUI: movieListSkeleton,\n});\nconst movieDetailModal = new _components_MovieDetailModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    targetId: \"movie-detail-modal-target\",\n    movieDetailModalState,\n});\nqueryState.addObserver(movieListTitle);\nqueryState.addObserver(movieList);\nmovieDetailModalState.addObserver(movieDetailModal);\nmovieHeader.initialize();\nmovieListTitle.initialize();\nmovieList.initialize();\nmovieDetailModal.initialize();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/states/MovieDetailModalState.ts":
/*!*********************************************!*\
  !*** ./src/states/MovieDetailModalState.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieDetailModalState)\n/* harmony export */ });\n/* harmony import */ var _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Observable */ \"./src/states/abstract/Observable.ts\");\n\nclass MovieDetailModalState extends _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(isOpen = false, movieId = 0) {\n        super();\n        this.isOpen = isOpen;\n        this.movieId = movieId;\n    }\n    set({ isOpen, movieId }) {\n        this.isOpen = isOpen;\n        this.movieId = movieId;\n        this.notify();\n    }\n    get() {\n        return { isOpen: this.isOpen, movieId: this.movieId };\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/MovieDetailModalState.ts?");

/***/ }),

/***/ "./src/states/QueryState.ts":
/*!**********************************!*\
  !*** ./src/states/QueryState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QueryState)\n/* harmony export */ });\n/* harmony import */ var _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Observable */ \"./src/states/abstract/Observable.ts\");\n\nclass QueryState extends _abstract_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(query = \"\") {\n        super();\n        this.query = query;\n    }\n    set(query) {\n        this.query = query;\n        this.notify();\n    }\n    get() {\n        return this.query;\n    }\n    reset() {\n        this.set(\"\");\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/QueryState.ts?");

/***/ }),

/***/ "./src/states/abstract/Observable.ts":
/*!*******************************************!*\
  !*** ./src/states/abstract/Observable.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Observable)\n/* harmony export */ });\nclass Observable {\n    constructor() {\n        this.observers = [];\n    }\n    addObserver(observer) {\n        this.observers = [...this.observers, observer];\n    }\n    notify() {\n        this.observers.forEach((observer) => observer.update());\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/states/abstract/Observable.ts?");

/***/ }),

/***/ "./src/stores/DomainStore.ts":
/*!***********************************!*\
  !*** ./src/stores/DomainStore.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomainStore)\n/* harmony export */ });\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ \"./src/stores/Store.ts\");\n\nclass DomainStore {\n    constructor({ key, mapper, store = new _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]() }) {\n        this.key = key;\n        this.mapper = mapper;\n        this.store = store;\n    }\n    get() {\n        try {\n            const item = this.store.get(this.key);\n            return this.mapper.fromJSON(item);\n        }\n        catch (_a) {\n            this.reset();\n            return this.mapper.fromJSON(null);\n        }\n    }\n    set(value) {\n        this.store.set(this.key, this.mapper.toJSON(value));\n    }\n    reset() {\n        this.store.remove(this.key);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/stores/DomainStore.ts?");

/***/ }),

/***/ "./src/stores/Store.ts":
/*!*****************************!*\
  !*** ./src/stores/Store.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n    constructor(storage = localStorage) {\n        this.store = storage;\n    }\n    get(key) {\n        try {\n            const rawData = this.store.getItem(key);\n            return rawData ? JSON.parse(rawData) : null;\n        }\n        catch (_a) {\n            this.store.removeItem(key);\n            return null;\n        }\n    }\n    set(key, value) {\n        const stringifiedValue = value ? JSON.stringify(value) : \"\";\n        this.store.setItem(key, stringifiedValue);\n    }\n    remove(key) {\n        this.store.removeItem(key);\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/stores/Store.ts?");

/***/ }),

/***/ "./src/stores/mappers/MovieRatingsMapper.ts":
/*!**************************************************!*\
  !*** ./src/stores/mappers/MovieRatingsMapper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieRatingsMapper)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/MovieRating */ \"./src/domain/MovieRating.ts\");\n/* harmony import */ var _domain_MovieRatings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/MovieRatings */ \"./src/domain/MovieRatings.ts\");\n\n\nclass MovieRatingsMapper {\n    fromJSON(json) {\n        if (json && !this.isValidData(json)) {\n            throw new Error(\"영화 평가 목록 데이터가 올바르지 않습니다.\");\n        }\n        if (!json) {\n            return new _domain_MovieRatings__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        }\n        return new _domain_MovieRatings__WEBPACK_IMPORTED_MODULE_1__[\"default\"](json.map((props) => new _domain_MovieRating__WEBPACK_IMPORTED_MODULE_0__[\"default\"](props)));\n    }\n    toJSON(target) {\n        return target.info();\n    }\n    isValidData(json) {\n        return Array.isArray(json) && json.every(this.isMovieRatingProps);\n    }\n    isMovieRatingProps(props) {\n        const { movieId, rating } = props;\n        return typeof movieId === \"number\" && typeof rating === \"number\";\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/stores/mappers/MovieRatingsMapper.ts?");

/***/ }),

/***/ "./src/stores/movieRatingsStore.ts":
/*!*****************************************!*\
  !*** ./src/stores/movieRatingsStore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieRatingsStore\": () => (/* binding */ movieRatingsStore)\n/* harmony export */ });\n/* harmony import */ var _DomainStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomainStore */ \"./src/stores/DomainStore.ts\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ \"./src/stores/Store.ts\");\n/* harmony import */ var _mappers_MovieRatingsMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappers/MovieRatingsMapper */ \"./src/stores/mappers/MovieRatingsMapper.ts\");\n\n\n\nconst MOVIE_RATINGS_KEY = \"movieRatings\";\nconst movieRatingsStore = new _DomainStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    key: MOVIE_RATINGS_KEY,\n    mapper: new _mappers_MovieRatingsMapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n    store: new _Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/stores/movieRatingsStore.ts?");

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector) => document.getElementById(selector) || null;\nconst $$ = (selector) => [...document.querySelectorAll(selector)];\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/dom.ts?");

/***/ }),

/***/ "./src/utils/throttle.ts":
/*!*******************************!*\
  !*** ./src/utils/throttle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nconst throttle = (callback, delay) => {\n    let isThrottled = false;\n    return () => {\n        if (isThrottled) {\n            return;\n        }\n        isThrottled = true;\n        setTimeout(() => {\n            callback();\n            isThrottled = false;\n        }, delay);\n    };\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/throttle.ts?");

/***/ }),

/***/ "./src/images/empty_movie_list.png":
/*!*****************************************!*\
  !*** ./src/images/empty_movie_list.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5fb348087acebb01f8b2.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/empty_movie_list.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/modal-close-button.png":
/*!*******************************************!*\
  !*** ./src/images/modal-close-button.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89d4d56da5bd48dfcd26.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/modal-close-button.png?");

/***/ }),

/***/ "./src/images/search_button.png":
/*!**************************************!*\
  !*** ./src/images/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/search_button.png?");

/***/ }),

/***/ "./src/images/star_empty.png":
/*!***********************************!*\
  !*** ./src/images/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_empty.png?");

/***/ }),

/***/ "./src/images/star_filled.png":
/*!************************************!*\
  !*** ./src/images/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/star_filled.png?");

/***/ }),

/***/ "./src/images/workers.png":
/*!********************************!*\
  !*** ./src/images/workers.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fab4bf08c7cce31f0cd4.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/images/workers.png?");

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
/******/ 		__webpack_require__.p = "/javascript-movie-review/dist/";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;