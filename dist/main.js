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

eval("let users = [\r\n  {\r\n    id: \"123456789\",\r\n    createdDate: \"2021-01-06T00:00:00.000Z\",\r\n    status: \"En validation\",\r\n    firstName: \"Mohamed\",\r\n    lastName: \"Taha\",\r\n    userName: \"mtaha\",\r\n    registrationNumber: \"2584\",\r\n  },\r\n  {\r\n    id: \"987654321\",\r\n    createdDate: \"2021-07-25T00:00:00.000Z\",\r\n    status: \"Validé\",\r\n    firstName: \"Hamid\",\r\n    lastName: \"Orrich\",\r\n    userName: \"horrich\",\r\n    registrationNumber: \"1594\",\r\n  },\r\n  {\r\n    id: \"852963741\",\r\n    createdDate: \"2021-09-15T00:00:00.000Z\",\r\n    status: \"Rejeté\",\r\n    firstName: \"Rachid\",\r\n    lastName: \"Mahidi\",\r\n    userName: \"rmahidi\",\r\n    registrationNumber: \"3576\",\r\n  },\r\n];\r\n\r\nwindow.addEventListener(\"load\", (event) => {\r\n  renderToDOM(users);\r\n});\r\n\r\n//Selectors\r\n//\r\nconst modale_add_user = document.querySelector(\".modale-add-user\");\r\nconst blur_bg = document.querySelector(\"#blur-bg\");\r\nconst btn_enregistrer = document.querySelector(\"#btn-enregistrer\");\r\nconst btn_ajouter = document.querySelector(\"#btn-ajouter\");\r\nconst users_list = document.querySelector(\"#users-list\");\r\n// Inputs\r\nconst nom = document.querySelector(\"#nom\");\r\nconst prenom = document.querySelector(\"#prenom\");\r\nconst username = document.querySelector(\"#username\");\r\nconst etat = document.querySelector(\"#etat\");\r\nconst date_creation = document.querySelector(\"#date-creation\");\r\nconst matricule = document.querySelector(\"#matricule\");\r\n\r\n//events\r\nbtn_ajouter.addEventListener(\"click\", (event) => {\r\n  modale_add_user.style.display = \"block\";\r\n  //clear fields\r\n  event.preventDefault();\r\n});\r\n\r\nblur_bg.addEventListener(\"click\", (event) => {\r\n  modale_add_user.style.display = \"none\";\r\n  //clear fields\r\n  event.preventDefault();\r\n});\r\n\r\nbtn_enregistrer.addEventListener(\"click\", (event) => {\r\n  modale_add_user.style.display = \"none\";\r\n  //clear fields\r\n  event.preventDefault();\r\n});\r\n\r\n// Methods\r\nfunction getID() {\r\n  let random_id = Math.floor(Math.random() * 10000000) + 100000000;\r\n  users.forEach((user) => {\r\n    if (user.id === random_id) getID();\r\n  });\r\n  return random_id;\r\n}\r\nfunction getStatusClass(status) {\r\n  return status === \"Validé\"\r\n    ? \"valide\"\r\n    : status === \"Rejeté\"\r\n    ? \"rejected\"\r\n    : \"on-validation\";\r\n}\r\n\r\nfunction renderToDOM(list) {\r\n  list.forEach((user) => {\r\n    let row = document.createElement(\"tr\");\r\n    row.id = \"\" + user.id;\r\n    row.innerHTML = `\r\n      <td scope=\"row\">${user.id}</td>\r\n      <td>${new Date(user.createdDate).toLocaleDateString(\"en-US\")}</td>\r\n      <td>\r\n      <div class=\"${getStatusClass(user.status)}\">${user.status}</div>\r\n      </td>\r\n      <td>${user.firstName}</td>\r\n      <td>${user.lastName}</td>\r\n      <td>${user.userName}</td>\r\n      <td>${user.registrationNumber}</td>\r\n      <td>\r\n      <button onclick=\"deleteUser(${user.id})\">\r\n      <i class=\"delete-btn fa-solid fa-trash-can\"></i>\r\n      </button>\r\n      </td>\r\n      `;\r\n\r\n    users_list.appendChild(row);\r\n  });\r\n}\r\n\r\nfunction deleteUser(id) {\r\n  const index = users.findIndex((item) => item.id == id);\r\n  users.splice(index, 1);\r\n  console.log(\"delete btn clicked\");\r\n  const row = document.getElementById(id);\r\n  row.classList.add(\"slideRight\");\r\n  setTimeout(() => {\r\n    row.style.display = \"none\";\r\n  }, 400);\r\n}\r\n\n\n//# sourceURL=webpack://first-exercice-dev/./src/index.js?");

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