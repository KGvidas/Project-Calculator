// VARIABLES
let aNumber;
let bNumber;
let operator;
let operatorStatus;

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".nmbr");

numbers.forEach(function(number) {
   updateDisplay (number)
    });

function updateDisplay (number) {
    number.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        display.textContent = display.textContent + e.target.textContent;
      });
    }

// FUNCTIONS
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

