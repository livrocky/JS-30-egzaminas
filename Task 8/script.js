/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  //   this.num1 = num1;
  //   this.num2 = num2;

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
// const calc = new Calculator(2, 2);

console.log(calculator.sum(5, 5));
console.log(calculator.subtraction(10, 8));
console.log(calculator.multiplication(9, 5));
console.log(calculator.division(20, 10));

// console.log("Sum===", calc.sum());
// console.log("Subtraction===", calc.subtraction());
// console.log("Multiplication===", calc.multiplication());
// console.log("Division===", calc.division());

// function Calculator(num1, num2) {
//   this.sum = function (num1, num2) {
//     num1 + num2;
//   };
//   //   this.subtraction = num1 - num2;
//   //   this.multiplication = num1 * num2;
//   //   this.division = num1 / num2;
// }
// const calc = new Calculator(5, 15);
// console.log(calc);

// function Calculator(num1, num2) {
//   this.num1 = num1;
//   this.num2 = num2;
//   this.sum = function () {
//     return this.num1 + this.num2;
//     //     this.subtraction = num1 - num2;
//     // this.multiplication = num1 * num2;
//     // this.division = num1 / num2;
//   };
// }

// this.sum = new Calculator(2, 5);
// console.log("calc===", new Calculator(2, 2));
