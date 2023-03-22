// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

const validLength = Number(input.dataset.length);

function onCheckValidLength(event) {
   if (Number(event.currentTarget.value.length === validLength)) {
      input.classList.add("valid");
   } else {
      input.classList.add("invalid");
   }
}

input.addEventListener("blur", onCheckValidLength);
