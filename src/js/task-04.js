// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const onMinusBtn = () => {
   counterValue -= 1;
   value.textContent = counterValue;
};

const onPlusBtn = () => {
   counterValue += 1;
   value.textContent = counterValue;
};

minusBtn.addEventListener("click", onMinusBtn);
plusBtn.addEventListener("click", onPlusBtn);
