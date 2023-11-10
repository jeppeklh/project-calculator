let firstValue = "";
let operator = "";
let secondValue = "";

const displayHistory = document.querySelector(".screen-top");
const display = document.querySelector(".screen-bottom");
const allClearKey = document.querySelector(".all-clear");
const clearKey = document.querySelector(".clear");
const numberKeys = document.querySelectorAll(".number");
const minusButton = document.querySelector(".minus");
const operatorKeys = document.querySelectorAll(".operator");
const decimalKey = document.querySelector(".decimal");
const equalsKey = document.querySelector(".equals");

allClearKey.addEventListener("click", clear);
clearKey.addEventListener("click", clearLogic);
minusButton.addEventListener("click", minusLogic);
equalsKey.addEventListener("click", equalsLogic);
numberKeys.forEach((element) => {
  element.addEventListener("click", () => {
    numberLogic(element);
  });
});
operatorKeys.forEach((element) => {
  element.addEventListener("click", () => {
    operatorLogic(element);
  });
});
decimalKey.addEventListener("click", () => {
  alert("Function coming soon!");
});

//Functions for button/key logic

function clearLogic() {
  if (firstValue != "" && operator == "") {
    firstValue = firstValue.toString().slice(0, -1);
  }

  if (secondValue != "" && operator != "") {
    secondValue = secondValue.toString().slice(0, -1);
  }

  if (secondValue === "" && operator != "") {
    operator = operator.toString().slice(0, -1);
  }
  showHistory();
  updateDisplay();
}

function numberLogic(element) {
  display.innerHTML += element.innerHTML;

  if (operator == "") {
    firstValue += element.innerHTML;
  } else {
    secondValue += element.innerHTML;
  }
}

function minusLogic() {
  if (firstValue === "") {
    firstValue += "-";
  }
  //can't use double minus
  if (operator != "" && operator != "-" && secondValue === "") {
    secondValue += "-";
  }
  updateDisplay();
}

function operatorLogic(element) {
  //also check for double minus
  if (firstValue != "" && firstValue != "-" && operator == "") {
    display.innerHTML += element.innerHTML;
    operator = element.innerHTML;
    showHistory();
  }
}

function equalsLogic() {
  if (operator != "" && secondValue != "") {
    let answer = operate(
      operator,
      parseFloat(firstValue),
      parseFloat(secondValue)
    );
    roundedAnswer = roundOf(answer);
    if (firstValue == "" && secondValue == "") {
      display.innerHTML = "";
      displayHistory.innerHTML = "";
    } else {
      display.innerHTML = roundedAnswer;
      displayHistory.innerHTML =
        firstValue + " " + operator + " " + secondValue + " = " + roundedAnswer;
      console.log(firstValue + " " + operator + " " + secondValue);
      firstValue = roundedAnswer;
      operator = "";
      secondValue = "";
    }
  }
}

function showHistory() {
  displayHistory.innerHTML = firstValue + " " + operator + " " + secondValue;
}

function updateDisplay() {
  display.innerHTML = firstValue + " " + operator + " " + secondValue;
}

function clear() {
  display.innerHTML = "";
  firstValue = "";
  secondValue = "";
  operator = "";
  showHistory();
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
    alert("You cant divide by zero");
    clear();
    return null;
  }

  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    alert("You cant divide by zero");
    clear();
    return null;
  }

  return a % b;
}
