import { IMC } from "./index.js";
import * as el from "./elements.js";

const calculateAndShowIMC = () => {
  const weight = el.inputWeight.value;
  const height = el.inputHeight.value / 100;

  if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
    showValidationError();
    return;
  }

  el.errorAlert.classList.add("hide");
  const result = IMC(weight, height);
  showIMCResult(result);
  showIMCModal();
};

const clearInputs = () => {
  el.inputHeight.value = "";
  el.inputWeight.value = "";
};

const showValidationError = () => {
  el.errorAlert.classList.remove("hide");
};

const showIMCResult = (result) => {
  const informationElement = document.querySelector(".information");
  informationElement.textContent = `Seu IMC é de ${result.toFixed(2)}`;
};

const showIMCModal = () => {
  el.showModalIMC.classList.remove("hide");

  el.btnClose.addEventListener("click", () => {
    el.showModalIMC.classList.add("hide");
    clearInputs();
  });
};

document.getElementById("app").addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAndShowIMC();
});