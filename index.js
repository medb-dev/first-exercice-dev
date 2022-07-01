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
const matricule = document.querySelector("#matricule");

//events
btn_ajouter.addEventListener("click", (event) => {
  event.preventDefault();
  modale_add_user.style.display = "block";
  //clear fields
});

blur_bg.addEventListener("click", (event) => {
  event.preventDefault();
  modale_add_user.style.display = "none";
  //clear fields
});

btn_enregistrer.addEventListener("click", (event) => {
  event.preventDefault();
  modale_add_user.style.display = "none";
  //clear fields
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
  return status === "Validé"
    ? "valide"
    : status === "Rejeté"
    ? "rejected"
    : "on-validation";
}

function renderToDOM(list) {
  users_list.innerHTML = "";
  list.forEach((user) => {
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
  renderToDOM(users);
}
