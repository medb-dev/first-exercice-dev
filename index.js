let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];

window.addEventListener("load", (event) => {
  renderToDOM(users);
});

//Selectors
//
const modale_add_user = document.querySelector(".modale-add-user");
const blur_bg = document.querySelector("#blur-bg");
const btn_enregistrer = document.querySelector("#btn-enregistrer");
const btn_ajouter = document.querySelector("#btn-ajouter");
const users_list = document.querySelector("#users-list");
// Inputs
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const username = document.querySelector("#username");
const etat = document.querySelector("#etat");
const date_creation = document.querySelector("#date-creation");
date_creation.valueAsDate = new Date();
const matricule = document.querySelector("#matricule");

//events
btn_ajouter.addEventListener("click", (event) => {
  event.preventDefault();
  resetInputsStyle();
  //clear fields
  nom.value = "";
  prenom.value = "";
  username.value = "";
  date_creation.valueAsDate = new Date();
  matricule.value = "";
  modale_add_user.style.display = "block";
});

blur_bg.addEventListener("click", (event) => {
  event.preventDefault();
  modale_add_user.style.display = "none";
  //clear fields
});

btn_enregistrer.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    inputsValidation(nom.value, prenom.value, username.value, matricule.value)
  )
    addUser(); // Add User To List And Render To Dom
});

// Methods
function getID() {
  let random_id = Math.floor(Math.random() * 10000000) + 100000000;
  users.forEach((user) => {
    if (user.id === random_id) getID();
  });
  return random_id;
}

function getStatusClass(status) {
  return status == "Validé"
    ? "valide"
    : status == "Rejeté"
    ? "rejected"
    : "on-validation";
}

function renderToDOM(list) {
  users_list.innerHTML = "";
  list.forEach((user) => {
    console.log(user.status);
    console.log(getStatusClass(user.status));
    console.log("---------------");
    let row = document.createElement("tr");
    row.id = "" + user.id;
    row.innerHTML = `
      <td scope="row">${user.id}</td>
      <td>${new Date(user.createdDate).toLocaleDateString("en-US")}</td>
      <td>
      <div class="${getStatusClass(user.status)}">${user.status}</div>
      </td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.userName}</td>
      <td>${user.registrationNumber}</td>
      <td>
      <button onclick="deleteUser(${user.id})">
      <i class="delete-btn fa-solid fa-trash-can"></i>
      </button>
      </td>
      `;

    users_list.appendChild(row);
  });
}

function deleteUser(id) {
  const index = users.findIndex((item) => item.id == id);
  users.splice(index, 1);
  renderToDOM(users);
}

function addUser() {
  //Add To Users List
  users.push({
    id: getID().toString(),
    createdDate: date_creation.value,
    status: etat.value,
    firstName: prenom.value,
    lastName: nom.value,
    userName: username.value,
    registrationNumber: matricule.value,
  });

  modale_add_user.style.display = "none";
  // Render To DOM
  renderToDOM(users);
}

function inputsValidation(lastName, firstName, userName, registrationNumber) {
  resetInputsStyle();
  let isValid = true;
  if (
    lastName.lenght < 3 ||
    lastName.lenght > 30 ||
    !isNaN(lastName) ||
    !lastName.trim()
  ) {
    nom.style.borderColor = "#FF0000";
    isValid = false;
  }
  if (
    firstName.lenght < 3 ||
    firstName.lenght > 30 ||
    !isNaN(firstName) ||
    !firstName.trim()
  ) {
    prenom.style.borderColor = "#FF0000";
    isValid = false;
  }
  if (
    userName.lenght < 3 ||
    userName.lenght > 30 ||
    !isNaN(userName) ||
    !userName.trim()
  ) {
    username.style.borderColor = "#FF0000";
    isValid = false;
  }
  if (parseInt(registrationNumber) <= 0 || !registrationNumber.trim()) {
    // console.log(!isNaN(registrationNumber));
    console.log(!registrationNumber.trim());
    console.log(parseInt(registrationNumber) <= 0);

    matricule.style.borderColor = "#FF0000";
    isValid = false;
  }

  //
  if (isValid) {
    nom.style.borderColor = "#5BE881";
    username.style.borderColor = "#5BE881";
    prenom.style.borderColor = "#5BE881";
    matricule.style.borderColor = "#5BE881";
    etat.style.borderColor = "#5BE881";
    date_creation.style.borderColor = "#5BE881";
  }
  setTimeout(() => {}, 1500);
  return isValid;
}

function resetInputsStyle() {
  nom.style.borderColor = "#E0E0E0";
  prenom.style.borderColor = "#E0E0E0";
  username.style.borderColor = "#E0E0E0";
  etat.style.borderColor = "#E0E0E0";
  date_creation.style.borderColor = "#E0E0E0";
  matricule.style.borderColor = "#E0E0E0";
}
