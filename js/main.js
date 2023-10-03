/*
main.js
author: Richard Walton
*/

import { fetchData } from "./utilities/fetchData.js";
import PersonCard from "./components/PersonCard.js";
import ModalWindow from "./components/ModalWindow.js";

const personListElement = document.getElementById("personsList");
const modalInsertion = document.getElementById("modal-point");

//poplulates user cards in page
async function populateUsers() {
  //use fetch utility function to get data
  const personData = await fetchData("https://reqres.in/api/users/");

  //create persons
  personListElement.innerHTML = personData.data
    .map((person) => PersonCard(person))
    .join("");

  //add click event listener for every person. Opens up a modal window
  document.querySelectorAll(".person-card").forEach((e) => {
    e.addEventListener("click", async function () {
      const personData = await fetchData(`https://reqres.in/api/users/${e.id}`);
      showModale(personData);
    });
  });
}

function showModale(person) {
  //create modal window
  const modalWindow = ModalWindow(person);

  modalInsertion.innerHTML = modalWindow;

  //add event listener for closing window
  document
    .querySelector("#close-modal-button")
    .addEventListener("click", closeModalWindow);
}

function closeModalWindow() {
  modalInsertion.innerHTML = "";
}

//create users
populateUsers();
