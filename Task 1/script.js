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

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const outputEl = document.getElementById("output");

  function convertWeight() {
    outputEl.innerHTML = `
   <h2 id="pounds">Pounds:<span> ${inputEl.value * 2.2406} </span>lb.</h2>
   <h2 id="grams">Grams:<span> ${inputEl.value / 0.001} </span>g.</h2>
   <h2 id="ounces">Ounces:<span> ${inputEl.value * 35.274} </span>oz.</h2>
   `;
  }
  convertWeight();
});
