// VARIABLES
let aNumber = "";
let bNumber = "";
let operator;
let operatorStatus = "Off";

let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".nmbr");
let op = document.querySelectorAll(".op");
let operateVariable = document.querySelector("#operate");
let clearBtn = document.querySelector("#clear");

// Attach event listeners to operator buttons
op.forEach(function(op) {
    checkForOperateSkip(op);
    updateOperatorStatus(op);
    setOperator(op);
});

function updateOperatorStatus(op) {
    op.addEventListener("click", () => {
        console.log(operatorStatus);
        updateNumberVariable();
        operatorStatus = "On";
        console.log(operatorStatus);
    });
}

function setOperator(op) {
    op.addEventListener("click", (e) => {
        operator = e.target.id; // Correct assignment
        console.log(operator);
        if( isNaN(aNumber) || isNaN(bNumber)){
            operator = "";
        }})
    };

function checkForOperateSkip(op){
    op.addEventListener("click", () => {
        if (operatorStatus === "On") {
            aNumber = operate(aNumber, bNumber, operator); 
            display.textContent = aNumber
            operatorStatus = "Off";
            bNumber = "";
            console.log(bNumber);
            console.log(operatorStatus);
            } else if (operatorStatus === "Off") {
            }
    });
}


// Attach event listeners to number buttons
numbers.forEach(function(number) {
   updateDisplay(number);
});

function updateDisplay(number) {
    number.addEventListener("click", (e) => {
        if (operatorStatus === "Off") {
            console.log(e.target.textContent);
            display.textContent = display.textContent + e.target.textContent;
        }  else if (operatorStatus === "On" && bNumber === ""){
            display.textContent = "" + e.target.textContent;
        } else if (operatorStatus === "On") {
            console.log(e.target.textContent);
            display.textContent = display.textContent + e.target.textContent;
        }
        updateNumberVariable()
    });
}

function updateNumberVariable() {
    if (operatorStatus === "Off") {
        aNumber = parseFloat(display.textContent); // Parse as number
        console.log("aNumber: " + aNumber);
    } else if (operatorStatus === "On") {
        bNumber = parseFloat(display.textContent); // Parse as number
        console.log("bNumber: " + bNumber);
    }
}

function clearDisplay(display) {
    display.textContent = "";
}

// Event listener for the "operate" button
operateVariable.addEventListener("click", () => {
    aNumber = operate(aNumber, bNumber, operator); 
    display.textContent = aNumber
    operatorStatus = "Off";
    bNumber = "";
    console.log(bNumber);
    console.log(operatorStatus);
});



clearBtn.addEventListener("click", () => {
    clear(display, aNumber, bNumber)
}
)

function clear(display, aNumber, bNumber){
    display.textContent = "";
    aNumber = "";
    bNumber = "";
}

// BASIC FUNCTIONS
function add(aNumber, bNumber) {
    return aNumber + bNumber;
}

function subtract(aNumber, bNumber) {
    return aNumber - bNumber;
}

function multiply(aNumber, bNumber) {
    return aNumber * bNumber;
}

function divide(aNumber, bNumber) {
    if (bNumber === 0) {
        return "Cannot divide by zero"; // Handle division by zero
    }
    return aNumber / bNumber;
}

// OPERATION FUNCTION
function operate(aNumber, bNumber, operator) {
    switch (operator) {
        case "add":
            return add(aNumber, bNumber);

        case "subtract":
            return subtract(aNumber, bNumber);
            
        case "multiply":
            return multiply(aNumber, bNumber);
        
        case "divide":
            return divide(aNumber, bNumber);
       
        default:
            console.log("Invalid operator");
            return null;
    }
}