/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let form = document.getElementById("formulario"); //obtener el elemento

  form.addEventListener("submit", envioFormulario); //manipular el elemento
  let alertShown = false;
  // Funcion Alerta
  function alertfunction() {
    if (!alertShown) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("alert", "alert-danger");
      const titleh = document.createElement("h5");
      const textNode = document.createTextNode("Some fields are missing");
      titleh.appendChild(textNode);
      newDiv.appendChild(titleh);
      form.insertBefore(newDiv, form.children[0]);
      alertShown = true; // Marcamos que se ha mostrado la alerta
    }
  }

  //let messageAlerta = document.getElementById("messageAlerta");
  let cardNumber = document.getElementById("cardNumber");
  let cvcNumber = document.getElementById("cvcNumber");
  let inputAmount = document.getElementById("inputAmount");
  let firstName = document.getElementById("inputFirstName");
  let lastName = document.getElementById("inputLastName");
  let city = document.getElementById("inputCity");
  let state = document.getElementById("inputState");
  let postalCode = document.getElementById("inputPostalCode");
  let radios = document.getElementById("radios");
  let radioMastercard = document.getElementById("mastercard");
  let radioVisa = document.getElementById("visa");
  let radioDiscover = document.getElementById("discover");
  let radioAmex = document.getElementById("amex");
  let message = document.getElementById("messageBox");

  function envioFormulario(event) {
    event.preventDefault();
    // Condicion para cambiar color de card
    if (cardNumber.value === "") {
      cardNumber.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      cardNumber.style.background = "white";
    }

    // Condicion para cambiar color de cvc
    if (cvcNumber.value === "") {
      cvcNumber.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      cvcNumber.style.background = "white";
    }

    // Condicion para cambiar color de amount
    if (inputAmount.value === "") {
      inputAmount.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      inputAmount.style.background = "white";
    }

    // Condicion para cambiar color de Fisrt Name
    if (firstName.value === "") {
      firstName.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      firstName.style.background = "white";
    }

    // Condicion para cambiar color de Last Name
    if (lastName.value === "") {
      lastName.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      lastName.style.background = "white";
    }

    // Condicion para cambiar color de city
    if (city.value === "") {
      city.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      city.style.background = "white";
    }

    // Condicion para cambiar color de state
    if (state.value === "Pick a state") {
      state.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      state.style.background = "white";
    }

    // Condicion para cambiar color de postal code
    if (postalCode.value === "") {
      postalCode.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      postalCode.style.background = "white";
    }

    // Condicion para cambiar color de radios
    if (
      radioMastercard.checked ||
      radioVisa.checked ||
      radioAmex.checked ||
      radioDiscover.checked
    ) {
      radios.style.background = "gray";
    } else {
      radios.style.background = "rgb(242, 214, 214)";
      alertfunction();
    }

    // Condicion para cambiar color de message
    if (message.value === "") {
      message.style.background = "rgb(242, 214, 214)";
      alertfunction();
    } else {
      message.style.background = "white";
    }
  }
};
