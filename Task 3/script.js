/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

async function getUsersData() {
  const resp = await fetch(ENDPOINT);
  const props = await resp.json();
  btnEl.addEventListener("click", () => renderData(props, outputEl));
}
getUsersData();

function renderData(dataArr, dest) {
  dest.innerHTML = dataArr
    .map(
      (dataObj) => ` 
    <div class="userCard">
    <p class="login">Login:<span> ${dataObj.login}</span></p>
    <img src="${dataObj.avatar_url}" alt="avatar" class="avatar">
  </div>
    `
    )
    .join("");
}
