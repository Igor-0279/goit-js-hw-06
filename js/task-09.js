function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

  const button = document.querySelector('.change-color');
  const colorValue = document.querySelector('.color');

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    colorValue.innerHTML = document.body.style.backgroundColor;
  });

console.log(colorValue.innerHTML);