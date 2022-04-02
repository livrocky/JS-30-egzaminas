/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputEl = document.getElementById("search");
const btnEl = document.getElementById("submit-btn");
const formEl = document.querySelector("form");
const poundsDisplay = document.getElementById("pounds");
const gramsDisplay = document.getElementById("grams");
const ouncesDisplay = document.getElementById("ounces");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = inputEl.value;
  console.log("input===", input);
  poundsDisplay.textContent = `${input * 2.2406} Pounds`;
  gramsDisplay.textContent = `${input / 0.001} Grams`;
  ouncesDisplay.textContent = `${input * 35.274} Ounces`;
  const outputEl = document.getElementById("output");
  if (input === " ") outputEl.classList.toggle("displayNone");
});
