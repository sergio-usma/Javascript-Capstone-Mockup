"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 62.5%;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #333;\n}\n\nbody {\n  font-size: 1.6rem;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: #333;\n}\n\nheader {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\nnav {\n  max-width: 1024px;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2rem 1rem;\n}\n\nnav ul {\n  width: 100%;\n  margin-left: 2vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 1rem;\n}\n\nnav ul li {\n  font-weight: 400;\n  margin: 0 5%;\n}\n\nmain {\n  background: linear-gradient(-45deg, #081f37, #5fc9f3, #2e79ba, #1e549f);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n.wrapper {\n  max-width: 1040px;\n  margin: auto;\n  padding: 5rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));\n  gap: 2.5rem;\n  justify-content: center;\n  place-items: center;\n}\n\n.wrapper__card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 400px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.wrapper__card:hover {\n  transform: scale(1.01);\n  transition: all 0.1s ease-out;\n}\n\n.wrapper__card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n.wrapper__card__details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.wrapper__card__details__title {\n  font-size: 1.6rem;\n}\n\n.wrapper__card__details__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper__card__details__likes-btn {\n  font-size: 2rem;\n  background-color: #fff;\n  border-radius: 10px;\n  border-style: none;\n  color: white;\n  -webkit-text-stroke: 1px darkgray;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.wrapper__card__details__likes-btn:hover {\n  transform: scale(1.1);\n  color: red;\n  -webkit-text-stroke: unset;\n}\n\n.likes-btn--active {\n  font-size: 2rem;\n  background-color: #fff;\n  border-radius: 10px;\n  border-style: none;\n  color: red;\n  -webkit-text-stroke: unset;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.likes-btn--active:hover {\n  transform: scale(1.1);\n}\n\n.wrapper__card__comments-btn,\n.card__btn {\n  width: 100%;\n  height: 40px;\n  margin-top: 1rem;\n  font-weight: 600;\n  color: white;\n  background-color: dodgerblue;\n  border-style: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.card-btn:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  transform: scale(1.01);\n}\n\n.card-btn:active {\n  background-color: royalblue;\n}\n\n.pop-up--active {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3vh 0;\n  background: linear-gradient(-45deg, #081f37, #5fc9f3, #2e79ba, #1e549f);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  z-index: 50;\n}\n\n.hidden {\n  display: none;\n}\n\n.pop-up__container {\n  position: relative;\n  width: 90%;\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.pop-up__container__close-btn {\n  position: absolute;\n  top: 2.8rem;\n  right: 3rem;\n  font-size: 2rem;\n  font-weight: 900;\n  border-radius: 10px;\n  border-style: none;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-shadow: 0 0 30px darkgray;\n}\n\n.pop-up__container__close-btn:hover {\n  color: orangered;\n  transform: rotate(180deg) scale(1.1);\n}\n\n.pop-up__container__img {\n  width: 100%;\n  height: 40%;\n  min-height: 200px;\n  max-height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.pop-up__container__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.pop-up__container__content__title,\nh3 {\n  font-size: 2rem;\n  margin: 1rem auto;\n}\n\n.pop-up__container__content__details {\n  width: 100%;\n  display: grid;\n  grid-auto-columns: 1fr 1fr;\n  grid-template-areas:\n    \"1 3\"\n    \"2 4\";\n  column-gap: 1rem;\n  font-size: 1.6rem;\n  padding: 0 1rem;\n}\n\n.bold-text {\n  font-weight: 600;\n}\n\n.pop-up__container__log {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0 1rem;\n}\n\n.pop-up__container__log__entries {\n  width: 100%;\n  max-height: 120px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.pop-up__btn {\n  width: 100%;\n  height: 40px;\n  margin-top: 1rem;\n  font-weight: 600;\n  color: white;\n  font-size: 1.6rem;\n  background-color: dodgerblue;\n  border-style: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.pop-up__btn:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  transform: scale(1.01);\n}\n\n.pop-up__btn:active {\n  background-color: royalblue;\n}\n\n.pop-up__container__form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0 1rem;\n}\n\n.pop-up__container__form form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1.6rem;\n}\n\nform input {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border-style: solid;\n  padding: 0 1rem;\n  font-size: 1.4rem;\n}\n\nform textarea {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  border-style: solid;\n  padding: 1rem;\n  font-size: 1.4rem;\n  resize: none;\n}\n\nfooter {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.footer__section {\n  max-width: 1024px;\n  margin: auto;\n  padding: 20px;\n}\n\n.footer__section__about {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.footer__section__about__logo {\n  margin-right: 2rem;\n}\n\n@media screen and (min-width: 768px) {\n  .pop-up__container {\n    width: 90%;\n    max-width: 900px;\n    padding: 3rem;\n  }\n\n  .pop-up__container__close-btn {\n    top: 4rem;\n    right: 4.6rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_img_1_shrimp_salad_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/1_shrimp-salad.jpg */ \"./src/assets/img/1_shrimp-salad.jpg\");\n/* harmony import */ var _assets_img_2_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/2_chicken-wings.jpg */ \"./src/assets/img/2_chicken-wings.jpg\");\n/* harmony import */ var _assets_img_3_filet_mignon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/3_filet-mignon.jpg */ \"./src/assets/img/3_filet-mignon.jpg\");\n/* harmony import */ var _assets_img_4_vegetable_paella_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/4_vegetable-paella.jpg */ \"./src/assets/img/4_vegetable-paella.jpg\");\n/* harmony import */ var _assets_img_5_mexican_rice_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/5_mexican-rice.jpg */ \"./src/assets/img/5_mexican-rice.jpg\");\n/* harmony import */ var _assets_img_6_tuna_mornay_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/6_tuna-mornay.jpg */ \"./src/assets/img/6_tuna-mornay.jpg\");\n/* harmony import */ var _modules_printCardList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/printCardList.js */ \"./src/modules/printCardList.js\");\n/* harmony import */ var _modules_likesBtn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/likesBtn.js */ \"./src/modules/likesBtn.js\");\n/* harmony import */ var _modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/commentsPopUp.js */ \"./src/modules/commentsPopUp.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst dishesList = [\n  {\n    id: 1,\n    name: 'Shrimp Salad',\n    description: 'Pizza with cheese and tomato',\n    image: './assets/img/1_shrimp-salad.jpg',\n    price: 8,\n    likes: 0,\n  },\n  {\n    id: 2,\n    name: 'Chicken Wings',\n    description: 'Pizza with cheese and tomato',\n    image: './assets/img/2_chicken-wings.jpg',\n    price: 15,\n    likes: 0,\n  },\n  {\n    id: 3,\n    name: 'Filet Mignon',\n    description: 'Pasta with tomato sauce',\n    image: './assets/img/3_filet-mignon.jpg',\n    price: 20,\n    likes: 0,\n  },\n  {\n    id: 4,\n    name: 'Vegetable Paella',\n    description: 'Pizza with cheese and tomato',\n    image: './assets/img/4_vegetable-paella.jpg',\n    price: 10,\n    likes: 0,\n  },\n  {\n    id: 5,\n    name: 'Mexican Rice',\n    description: 'Pizza with cheese and tomato',\n    image: './assets/img/5_mexican-rice.jpg',\n    price: 15,\n    likes: 0,\n  },\n  {\n    id: 6,\n    name: 'Tuna Mornay',\n    description: 'Pasta with tomato sauce',\n    image: './assets/img/6_tuna-mornay.jpg',\n    price: 20,\n    likes: 0,\n  },\n];\n\n(0,_modules_likesBtn_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(dishesList);\n\n(0,_modules_printCardList_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(dishesList);\n\nconst dishesWrapper = document.getElementsByClassName('wrapper')[0];\ndishesWrapper.addEventListener('click', (event) => {\n  const commentsBtn = event.target.closest('.wrapper__card__comments-btn');\n  if (commentsBtn) {\n    const dishIndex = Array.from(dishesWrapper.children).indexOf(\n      commentsBtn.closest('article'),\n    );\n    const dish = dishesList[dishIndex];\n    (0,_modules_commentsPopUp_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(dish);\n  }\n});\n\n\n//# sourceURL=webpack://webpack_template/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsPopUp.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopUp.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction commentsPopUp(dish) {\n    const main = document.querySelector(\"main\");\n\n    const popUp = document.createElement(\"div\");\n    popUp.id = \"pop-up\";\n    popUp.classList.add(\"pop-up--active\");\n    popUp.innerHTML = `\n    <div class=\"pop-up__container\">\n        <img class=\"pop-up__container__img\" src=\"${dish.image}\" alt=\"${dish.name}\" />\n        <div class=\"pop-up__container__close-btn\">\n            <i class=\"bi bi-x-circle\"></i>\n        </div>\n        <div class=\"pop-up__container__content\">\n            <h3 class=\"pop-up__container__content__title\">${dish.name}</h3>\n            <ul class=\"pop-up__container__content__details\">\n                <li><span class=\"bold-text\">Entry: </span> French fries</li>\n                <li><span class=\"bold-text\">Companion: </span>Avocado</li>\n                <li><span class=\"bold-text\">Serving time: </span>~30 min</li>\n                <li><span class=\"bold-text\">Cost: </span>${dish.price} USD</li>\n            </ul>\n        </div>\n\n        <div class=\"pop-up__container__log\">\n            <h3 class=\"pop-up__container__log__title\">Comments</h3>\n            <ul class=\"pop-up__container__log__entries\">\n                <li><span class=\"bold-text\">24/06/2023 Alex:</span> I love that salad!</li>\n                <li><span class=\"bold-text\">25/06/2023 Tania:</span> This dish is very delicious!</li>\n                <li><span class=\"bold-text\">24/06/2023 Alex:</span> I love that salad!</li>\n                <li><span class=\"bold-text\">24/06/2023 Alex:</span> I love that salad!</li>\n            </ul>\n        </div>\n\n        <div class=\"pop-up__container__form\">\n            <h3 class=\"pop-up__container__form__title\">Add a comment</h3>\n            <form action=\"\">\n                <input type=\"text\" placeholder=\"Name\" />\n                <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\n                <button class=\"pop-up__btn\">Submit</button>\n            </form>\n        </div>\n    </div>\n  `;\n\n    const closeBtn = popUp.querySelector(\".pop-up__container__close-btn\");\n\n    closeBtn.addEventListener(\"click\", function () {\n        popUp.classList.add(\"hidden\");\n    });\n\n    main.appendChild(popUp);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopUp);\n\n//# sourceURL=webpack://webpack_template/./src/modules/commentsPopUp.js?");

/***/ }),

/***/ "./src/modules/likesBtn.js":
/*!*********************************!*\
  !*** ./src/modules/likesBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction likeBtnHandler(dishesList) {\n    const dishesWrapper = document.getElementsByClassName(\"wrapper\")[0];\n    dishesWrapper.addEventListener('click', (event) => {\n        const likeBtn = event.target.closest('.wrapper__card__details__likes-btn');\n        if (likeBtn) {\n            const dishIndex = Array.from(dishesWrapper.children).indexOf(likeBtn.closest('article'));\n            const dish = dishesList[dishIndex];\n            const likesElement = likeBtn.nextElementSibling;\n\n            likeBtn.classList.toggle('likes-btn--active');\n            dish.likes += likeBtn.classList.contains('likes-btn--active') ? 1 : -1;\n\n            likesElement.textContent = `${dish.likes} likes`;\n            console.log(`Added a like to ${dish.id}${dish.name}`)\n        }\n    });\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeBtnHandler);\n\n\n//# sourceURL=webpack://webpack_template/./src/modules/likesBtn.js?");

/***/ }),

/***/ "./src/modules/printCardList.js":
/*!**************************************!*\
  !*** ./src/modules/printCardList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction printDishesList(dishesList) {\n    const dishesWrapper = document.getElementsByClassName(\"wrapper\")[0];\n    dishesWrapper.innerHTML = \"\";\n\n    for (let i = 0; i < dishesList.length; i++) {\n        const dish = dishesList[i];\n        const dishCard = document.createElement(\"article\");\n        dishCard.classList.add(\"wrapper__card\", `card-${i + 1}`);\n        dishCard.innerHTML = `\n      <img class=\"wrapper__card__img\" src=\"${dish.image}\" alt=\"${dish.name}\" />\n      <div class=\"wrapper__card__details\">\n        <h3 class=\"wrapper__card__details__title\">${dish.name}</h3>\n        <div class=\"wrapper__card__details__likes\">\n          <button class=\"wrapper__card__details__likes-btn\"><i class=\"bi bi-heart-fill\"></i></button>\n          <p>${dish.likes} likes</p>\n        </div>\n      </div>\n      <button class=\"wrapper__card__comments-btn card__btn\">Comments</button>\n      <button class=\"wrapper__cards__reservations-btn card__btn\">Reservations</button>\n    `;\n        dishesWrapper.appendChild(dishCard);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printDishesList);\n\n//# sourceURL=webpack://webpack_template/./src/modules/printCardList.js?");

/***/ }),

/***/ "./src/assets/img/1_shrimp-salad.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/1_shrimp-salad.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/1_shrimp-salad.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/1_shrimp-salad.jpg?");

/***/ }),

/***/ "./src/assets/img/2_chicken-wings.jpg":
/*!********************************************!*\
  !*** ./src/assets/img/2_chicken-wings.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/2_chicken-wings.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/2_chicken-wings.jpg?");

/***/ }),

/***/ "./src/assets/img/3_filet-mignon.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/3_filet-mignon.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/3_filet-mignon.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/3_filet-mignon.jpg?");

/***/ }),

/***/ "./src/assets/img/4_vegetable-paella.jpg":
/*!***********************************************!*\
  !*** ./src/assets/img/4_vegetable-paella.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/4_vegetable-paella.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/4_vegetable-paella.jpg?");

/***/ }),

/***/ "./src/assets/img/5_mexican-rice.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/5_mexican-rice.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/5_mexican-rice.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/5_mexican-rice.jpg?");

/***/ }),

/***/ "./src/assets/img/6_tuna-mornay.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/6_tuna-mornay.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/6_tuna-mornay.jpg\";\n\n//# sourceURL=webpack://webpack_template/./src/assets/img/6_tuna-mornay.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);