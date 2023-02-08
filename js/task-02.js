const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const fruitElems = [];
const itemElem = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const fruitElem = document.createElement("li");
  fruitElem.textContent = ingredient;
  fruitElem.classList.add("item");
  fruitElems.push(fruitElem);
}
itemElem.append(...fruitElems);
