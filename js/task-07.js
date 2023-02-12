const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

const textControl = () => {
   spanText.style.fontSize = inputControl.value + 'px';

};
inputControl.addEventListener("input", textControl);

