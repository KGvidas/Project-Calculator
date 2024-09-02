// VARIABLES
let aNumber;
let bNumber;
let operator;
let operatorStatus = "Off";

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".nmbr");
let op = document.querySelectorAll(".op");
let operateVariable = document.querySelector("#operate");

op.forEach(function(op) {
    updateOpetorStatus(op);
    setOperator(op);
     });

function updateOpetorStatus(op) {
    op.addEventListener("click", () => {
        operatorStatus = "On";
        console.log(operatorStatus);
        updateNumberVariable(operatorStatus,aNumber,bNumber,display)
        clearDisplay(display);
      });
    }

function setOperator(op) {
    op.addEventListener("click",(e) => {
        operator = "e.target.id";
        console.log(e.target.id);
      });
    }

numbers.forEach(function(number) {
   updateDisplay (number)
    });

function updateDisplay (number) {
    number.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        display.textContent = display.textContent + e.target.textContent;
      });
    }

function updateNumberVariable(operatorStatus,aNumber,bNumber,display){
    if (operatorStatus === "Off"){
        aNumber = display.textContent;
        console.log(aNumber);
    } else if (operatorStatus === "On"){
        bNumber = display.textContent;
        console.log(bNumber);
    }
}

function clearDisplay(display){
    display.textContent = ""
}

 operateVariable.addEventListener("click", () => {
    operatorStatus = "Off";
    console.log(operatorStatus);
    updateNumberVariable(operatorStatus,aNumber,bNumber,display)
  });

// BASIC FUNCTIONS
function add(aNumber, bNumber){
    return aNumber + bNumber;
}
function subtract(aNumber, bNumber){
    return aNumber - bNumber;
}
function multiply(aNumber, bNumber){
    return aNumber * bNumber;
}
function divide(aNumber, bNumber){
    return aNumber / bNumber;
}


function operate(aNumber, bNumber, operator){
   switch (operator) {
    case add:
        return add(aNumber, bNumber)
        break;

    case subtract:
        return subtract(aNumber, bNumber)
        break;
        
    case multiply:
        return multiply(aNumber, bNumber)
        break;
    
    case divide:
        return divide(aNumber, bNumber)
        break;
   
    default:
        break;
   }

}

