
// const controls = document.querySelector("#controls");
// const boxes = document.querySelector("#boxes");
// const dataDestroy =document.querySelector("[data-destroy]");
// const dataCreate = document.querySelector("[data-create]");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   const newBoxes = "";
//   const firstBox = 30;
//   boxes.innerHTML = "";
//   for (let i = 0; i < amount; i += 1) {
//     newBoxes +
//       `<div class= "box" style = "width: $((firstBox += 10))px; height: $((firstBox += 10))px; backgroundColor:
//       $(getRandomHexColor());"></div>`;
//   }
//   boxes.insertAdjacentElement('beforeend', newBoxes);
// }

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
//   amount = "";
// }
// dataCreate.addEventListener("click", () => {
//   let amount = controls.value;
//   createBoxes(amount);
// });
// dataDestroy.addEventListener("click", destroyBoxes);

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.addEventListener("click", (e) => {
  if (e.target.dataset.create) {
    createBoxes(+controls.querySelector("input").value);
  } else if (e.target.dataset.destroy) {
    destroyBoxes();
  }
});