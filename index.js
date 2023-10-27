const outputDisplay = document.getElementById("output");
const equalsTo = document.getElementById("equalsTo");

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

const clear = document.getElementById("clear");
const allClear = document.getElementById("all-clear");

var n1 = "";
var n2 = "";
var op = "";

const updateDisplay = () => {
  result = `${n1}${op}${n2}`;
  outputDisplay.textContent = result;
};
const clearAll = () => {
  n1 = "";
  n2 = "";
  op = "";
  result = "";
  updateDisplay();
};

const calculate = () => {
  let a = Number(n1);
  let b = Number(n2);
  let sum = 0;
  if (op == "÷") {
    op = "/";
  }
  switch (op) {
    case "+":
      sum = a + b;
      break;
    case "-":
      sum = a - b;
      break;
    case "x":
      sum = a * b;
      break;
    case "/":
      sum = a / b;
      break;
    case "%":
      sum = a % b;
      break;
  }
  console.log(sum);
  
  sum = sum.toFixed(2);

  result = sum;
  n1 = result;
  op = "";
  n2 = "";

  updateDisplay();
};

var result = "00";
outputDisplay.value = result;

number.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target);
    const clickedButtonText = e.target.value;

    if (op === "") {
      if (n1.includes(".") && clickedButtonText === ".") {
      } else {
        n1 += clickedButtonText;
        console.log("n1: " + n1);
      }
    } else {
      if (n2.includes(".") && clickedButtonText === ".") {
      } else {
        n2 += clickedButtonText;
        console.log("n2: " + n2);
      }
    }

    updateDisplay();
    console.log("Text clicked: " + clickedButtonText);
  });
});
operator.forEach((e) => {
  e.addEventListener("click", (e) => {
    const clickedButtonText = e.target.textContent;
    console.log("result:", result);
    console.log("clickedButtonText:", clickedButtonText);

    if (n1 === "") {
      outputDisplay.value = "Enter number";
    } else {
      if (n2 == "") {
        op = clickedButtonText;
      } else if (n2 != "") {
        calculate();
      }

      op = clickedButtonText;
      console.log("op: " + op);

      updateDisplay();
    }
    console.log("Text clicked: " + clickedButtonText);
  });
});

allClear.addEventListener("click", () => {
  clearAll();
});

clear.addEventListener("click", () => {
  if (n2 != "") {
    n2 = n2.slice(0, -1);
  } else if (op != "") {
    op = op.slice(0, -1);
  } else {
    n1 = n1.slice(0, -1);
  }
  result = result.slice(0, -1);
  outputDisplay.textContent = result;
});

equalsTo.addEventListener("click", () => {
  calculate();
});
