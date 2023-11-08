let firstValue = "";
let operator = "";
let secondValue = "";

const displayHistory = document.querySelector(".screen-top");
const display = document.querySelector(".screen-bottom");
const allKeys = document.querySelectorAll(".btn");
const allClearKey = document.querySelector(".all-clear");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");
const decimalKey = document.querySelector(".decimal");
const equalsKey = document.querySelector(".equals");

allClearKey.addEventListener("click", () => {
  display.innerHTML = "";
  firstValue = "";
  secondValue = "";
  operator = "";
  displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
  console.log(firstValue + " " + operator + " " + secondValue);
});

numberKeys.forEach((element) => {
  element.addEventListener("click", () => {
    display.innerHTML += element.innerHTML;

    if (operator == "") {
      firstValue += element.innerHTML;
    } else {
      secondValue += element.innerHTML;
    }
    displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
  });
});

operatorKeys.forEach((element) => {
  element.addEventListener("click", () => {
    if (firstValue != "" && operator == "") {
      display.innerHTML += element.innerHTML;
      operator = element.innerHTML;
      displayHistory.innerHTML =
        firstValue + " " + operator + " " + secondValue;
    }
  });
});

// decimalKey.addEventListener("click", () => {
//   if ((operator = "")) {
//     firstValue += ".";
//     displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
//   } else {
//     secondValue += ".";
//     displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
//   }
//   console.log(firstValue + " " + operator + " " + secondValue);
// });

equalsKey.addEventListener("click", () => {
  let answer = operate(
    operator,
    parseFloat(firstValue),
    parseFloat(secondValue)
  );
  console.log(answer);
  roundedAnswer = roundOf(answer);
  display.innerHTML = roundedAnswer;
  displayHistory.innerHTML =
    firstValue + " " + operator + " " + secondValue + " = " + roundedAnswer;
  firstValue = roundedAnswer;
  operator = "";
  secondValue = "";
});

function showHistory() {
  displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
}

function roundOf(number) {
  return Math.round(number * 100) / 100;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    case "%":
      return modulo(a, b);
    default:
      return null;
  }
}

//math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return null;
  }

  return a % b;
}
