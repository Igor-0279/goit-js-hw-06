//Напиши скрипт, який під час втрати фокусу на інпуті 
// (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті,
//  зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const inputElem = document.querySelector('input');
// console.log(inputElem.dataset.length);

const borderRemove = (event) => {
 let inputText = event.currentTarget.value;
  
 inputText.length !== Number(inputElem.dataset.length)
   ? inputElem.classList.add("invalid")
   : inputElem.classList.remove("invalid") || inputElem.classList.add('valid');
}
inputElem.addEventListener("blur", borderRemove);