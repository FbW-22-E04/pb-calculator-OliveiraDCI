console.clear();

class Calculator {
  constructor() {
    this.pi = Math.PI;
    this.e = Math.E;
  }

  get piSquare() {
    return 2 * this.pi;
  }

  set circumference(param) {
    console.log("setter (circumference)", (this.piSquare * param).toFixed(2));
  }

  ratio(x, y, width) {
    return (width / y) * x;
  }

  percentage(x, y) {
    return (100 * x) / y;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  modulation(x, y) {
    return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

const calculate = new Calculator();
console.log(calculate.pi);
console.log(calculate.e);
console.log("----------------------------------");
console.log("ratio", calculate.ratio(4, 6, 36));
console.log("percentage", calculate.percentage(8, 10));
console.log("add", calculate.add(2, 3));
console.log("subtract", calculate.subtract(3, 3));
console.log("multiply", calculate.multiply(3, 3));
console.log("divide", calculate.divide(3, 3));
console.log("modulation", calculate.modulation(10, 3));
console.log("elevate", calculate.elevate(2, 4));
console.log("sqrt", calculate.sqrt(16));

console.log("getter (2*PI)", calculate.piSquare);
let radius = 20;
calculate.circumference = radius;
