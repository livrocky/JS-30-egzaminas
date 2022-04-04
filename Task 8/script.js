/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return this.num1 + this.num2;
  };

  this.subtraction = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return this.num1 - this.num2;
  };
  this.multiplication = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return this.num1 * this.num2;
  };
  this.division = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return this.num1 / this.num2;
  };
}

let calculator = new Calculator();

console.log("sum===", calculator.sum(5, 5));
console.log("subtraction===", calculator.subtraction(10, 8));
console.log("multiplication===", calculator.multiplication(9, 5));
console.log("division===", calculator.division(20, 10));
