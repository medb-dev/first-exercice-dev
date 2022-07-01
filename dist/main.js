/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let users = [\r\n  {\r\n    id: \"123456789\",\r\n    createdDate: \"2021-01-06T00:00:00.000Z\",\r\n    status: \"En validation\",\r\n    firstName: \"Mohamed\",\r\n    lastName: \"Taha\",\r\n    userName: \"mtaha\",\r\n    registrationNumber: \"2584\",\r\n  },\r\n  {\r\n    id: \"987654321\",\r\n    createdDate: \"2021-07-25T00:00:00.000Z\",\r\n    status: \"Validé\",\r\n    firstName: \"Hamid\",\r\n    lastName: \"Orrich\",\r\n    userName: \"horrich\",\r\n    registrationNumber: \"1594\",\r\n  },\r\n  {\r\n    id: \"852963741\",\r\n    createdDate: \"2021-09-15T00:00:00.000Z\",\r\n    status: \"Rejeté\",\r\n    firstName: \"Rachid\",\r\n    lastName: \"Mahidi\",\r\n    userName: \"rmahidi\",\r\n    registrationNumber: \"3576\",\r\n  },\r\n];\r\n\r\n//Selectors\r\n\r\nconst modale_add_user = document.querySelector(\".modale-add-user\");\r\nconst btn_enregistrer = document.querySelector(\"#btn-enregistrer\");\r\nconst btn_ajouter = document.querySelector(\"#btn-ajouter\");\r\n\r\n//events\r\nbtn_ajouter.addEventListener(\"click\", (event) => {\r\n   modale_add_user.style.display = \"block\";\r\n   //clear fields\r\n   event.preventDefault();\r\n  });\r\n  \r\n  modale_add_user.addEventListener(\"click\", (event) => {\r\n    modale_add_user.style.display = \"none\";\r\n    //clear fields\r\n  event.preventDefault();\r\n});\r\n\r\nbtn_enregistrer.addEventListener(\"click\", (event) => {\r\n  event.preventDefault();\r\n});\n\n//# sourceURL=webpack://first-exercice-dev/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;