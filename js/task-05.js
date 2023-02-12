const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector("#name-output");
 textInput.addEventListener("input", () =>  {
   
    nameOutput.textContent = textInput.value || "Anonymous";

 });