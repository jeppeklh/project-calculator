let firstValue = "";
let operator = "";
let secondValue = "";

const displayHistory = document.querySelector(".screen-top");
const display = document.querySelector(".screen-bottom");
const allKeys = document.querySelectorAll(".btn");
const allClearKey = document.querySelector(".all-clear");
const clearKey = document.querySelector(".clear");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");

const decimalKey = document.querySelector(".decimal");
const equalsKey = document.querySelector(".equals");

allClearKey.addEventListener("click", () => {
  clear();
});

// clearKey.addEventListener("click", () => {
//   if (firstValue != "" && operator === "") {
//     firstValue.substring(0, firstValue.length - 1);
//   }

//   if (secondValue != "" && operator != "") {
//     secondValue.substring(0, secondValue.length - 1);
//   }
//   showHistory();
// });

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
    //also check for double minus
    if (firstValue != "" && firstValue != "-" && operator == "") {
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
});

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

//pseudo for subtract working as * -1
// if first value is empty
// first value += "-"

// if operator id NOT empty and second value is empty
// second value += "-"

const minusButton = document.querySelector(".minus");

minusButton.addEventListener("click", () => {
  if (firstValue === "") {
    firstValue += "-";
  }
  //can't use double minus
  if (operator != "" && operator != "-" && secondValue === "") {
    secondValue += "-";
  }
  updateDisplay();
});
