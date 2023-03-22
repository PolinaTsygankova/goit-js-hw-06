// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inputEl.addEventListener("input", onInputClick);

function onInputClick(event) {
   if (event.currentTarget.value.trim() === "") {
      nameOutput.textContent = "Anonymous";
   } else {
      nameOutput.textContent = event.currentTarget.value;
   }
}
