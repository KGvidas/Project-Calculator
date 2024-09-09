// VARIABLES
let aNumber = "";
let bNumber = "";
let operator;
let operatorStatus = "Off";

let delBtn = document.querySelector("#del");
let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".nmbr");
let op = document.querySelectorAll(".op");
let operateVariable = document.querySelector("#operate");
let clearBtn = document.querySelector("#clear");
let decimalsBtn = document.querySelector("#decimals");

// Attach event listeners to decimals button
decimalsBtn.addEventListener("click", () => {
    checkForDecimals();
})

function addDecimals(){
    display.textContent = display.textContent.slice(0, 1) + '.' + display.textContent.slice(1,7);
}

function checkForDecimals(){
    if(!display.textContent || display.textContent[1] === "."){ 
    } else {
        addDecimals();
    }
}


// Jeigu paspaudi du kart // arba * susibugina lygtais us + ar - to nebuna



// Attach event listeners to operator buttons
delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    updateNumberVariable();
})


// Attach event listeners to operator buttons
op.forEach(function(op) {
    checkForOperateSkip(op);
    setOperator(op);
    updateOperatorStatus(op);
});

function updateOperatorStatus(op) {
    op.addEventListener("click", () => {
        console.log(operatorStatus);
        if (operatorStatus === "Off") {
            updateNumberVariable(); // Update aNumber only if operatorStatus is "Off"
            operatorStatus = "On";
        } else if (operatorStatus === "On" && bNumber === "") {
            // Do nothing to avoid setting bNumber to the value of aNumber
        } else if (operatorStatus === "On" && !isNaN(bNumber)) {
            // If bNumber is a valid number, keep operatorStatus "On"
            operatorStatus = "On";
        }
        console.log(operatorStatus);
    });
}


function setOperator(op) {
    op.addEventListener("click", (e) => {
        operator = e.target.id; // Correct assignment
        })
        console.log(operator);
    };

    function checkForOperateSkip(op) {
        op.addEventListener("click", () => {
            if (operatorStatus === "On" && bNumber !== "") {
                aNumber = operate(aNumber, bNumber, operator);
                display.textContent = aNumber;
                operatorStatus = "Off"; // Reset the operator status
                bNumber = "";
    
                console.log("After operation, bNumber: " + bNumber);
                console.log("Operator Status: " + operatorStatus);
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
        aNumber = parseFloat(display.textContent) || aNumber; // Only update if display has a valid number
        console.log("aNumber: " + aNumber);
    } else if (operatorStatus === "On" && display.textContent !== "") {
        bNumber = parseFloat(display.textContent); // Update only if display has content
        console.log("bNumber: " + bNumber);
    }
}


function clearDisplay(display) {
    display.textContent = "";
}

// Event listener for the "operate" button
operateVariable.addEventListener("click", () => {
    if (bNumber === "" || isNaN === bNumber){
        aNumber = parseFloat(display.textContent);
        console.log("aNumber: " + aNumber);
        console.log("bNumber: " + bNumber);
    } else {
    aNumber = operate(aNumber, bNumber, operator); 
    display.textContent = aNumber
    operatorStatus = "Off";
    bNumber = "";
    console.log(bNumber);
    console.log(operatorStatus);
    }
});



clearBtn.addEventListener("click", () => {
    clear();
}
)

function clear(){
    display.textContent = "";
    aNumber = "";
    bNumber = "";
    operatorStatus = "Off"
    operator = "";
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
        return "You failed"; // Handle division by zero
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