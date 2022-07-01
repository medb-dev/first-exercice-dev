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

//Selectors

const modale_add_user = document.querySelector(".modale-add-user");
const btn_enregistrer = document.querySelector("#btn-enregistrer");
const btn_ajouter = document.querySelector("#btn-ajouter");

//events
btn_ajouter.addEventListener("click", (event) => {
   modale_add_user.style.display = "block";
   //clear fields
   event.preventDefault();
  });
  
  modale_add_user.addEventListener("click", (event) => {
    modale_add_user.style.display = "none";
    //clear fields
  event.preventDefault();
});

btn_enregistrer.addEventListener("click", (event) => {
  event.preventDefault();
});