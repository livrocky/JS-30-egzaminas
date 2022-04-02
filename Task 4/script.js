/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const outputEl = document.getElementById("output");

async function getCars() {
  const resp = await fetch(ENDPOINT);
  const data = await resp.json();
  renderCars(data, outputEl);
}
getCars();

function renderCars(carsArr, dest) {
  dest.innerHTML = "";
  carsArr.forEach((cObj) => {
    dest.append(showCars(cObj));
  });
}
function showCars(carObj) {
  const divEl = document.createElement("div");
  console.log("divEl===", divEl);
  divEl.className = "card";
  divEl.innerHTML = `
    <h2 class="brand">${carObj.brand}</h2>
    <p class="model">${carObj.models.join(", ")}.</p>
    `;
  return divEl;
}
