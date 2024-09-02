// VARIABLES
let aNumber;
let bNumber;
let operator;

let display = document.querySelector(".display");
let number = document.querySelector("#seven");


number.addEventListener("click", () => {
display.textContent = display.textContent + number.textContent;
});


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

