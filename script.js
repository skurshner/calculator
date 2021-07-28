//  inital variables
let numDisplay = '';
let firstNumber = '';
let secondNumber = '';
let output = '';
let operator = '';
let numberFocus = 1;

// detect function buttons
const addbtn = document.getElementById('add');
const subtractbtn = document.getElementById('subtract');
const multiplybtn = document.getElementById('multiply');
const dividebtn = document.getElementById('divide');
const operatebtn = document.getElementById('operate');
const clearbtn = document.getElementById('clear');

// detect number buttons
const numBtns = document.querySelectorAll(".number")

// detect display
const display = document.querySelector('h1');

// operator function 
function operate (operator,firstNumber,secondNumber) {
    if (firstNumber !== '' && secondNumber !== '') {
        if (operator === "+") {
            output = add(firstNumber,secondNumber);
            truncate()
        } else if (operator === "-") {
            output = subtract(firstNumber,secondNumber);
            truncate()
        } else if (operator === "*") {
            output = multiply(firstNumber,secondNumber);
            truncate()
        } else if (operator === "/") {
            if (secondNumber === 0) {
                displayValue('nice try');
            } else {
                output = divide(firstNumber,secondNumber);
                truncate()
            }
        }
        numberFocus = 2;
        numDisplay = '';
    }
}

// truncate display if necessary
function truncate (number) {
    if (output > 9999999) {
        displayValue("too big");
    } else {
        displayValue(parseFloat((output).toFixed(4)));   
    }
}

// basic calculator functions

    // add
    add = (firstNumber,secondNumber) => firstNumber + secondNumber;

    // subtract
    subtract = (firstNumber,secondNumber) => firstNumber - secondNumber;

    // multiply
    multiply = (firstNumber,secondNumber) => firstNumber * secondNumber;

    // divide 
    divide = (firstNumber,secondNumber) => firstNumber / secondNumber;

// add values to number variables
    function addToFirstNumber (number) {
        numDisplay = numDisplay.concat(number);
        displayValue(numDisplay);
        firstNumber = parseFloat(numDisplay);
        console.log("First number is " + firstNumber);
    }

    function addToSecondNumber (number) {
        numDisplay = numDisplay.concat(number);
        displayValue(numDisplay);
        secondNumber = parseFloat(numDisplay);
        console.log("Second number is " + secondNumber);
    }

// clear entered numbers on display
function clearBtn () {
    numDisplay = '';
    displayValue(0);
    if (numberFocus === 1){
        firstNumber = '';
    } else {
        firstNumber = '';
        secondNumber = '';
        numberFocus = 1;
    }  
}

// show entered numbers on display
function displayValue(n) {
    display.textContent = n;
}

// function buttons
    addbtn.addEventListener('click', () => {
        numDisplay = '';
        operator = "+";
        numberFocus = 2;
        console.log(operator)
    });

    subtractbtn.addEventListener('click', () => {
        numDisplay = '';
        operator = "-";
        numberFocus = 2;
        console.log(operator)
    });

    multiplybtn.addEventListener('click', () => {
        numDisplay = '';
        operator = "*";
        numberFocus = 2;
        console.log(operator)
    });

    dividebtn.addEventListener('click', () => {
        numDisplay = '';
        operator = "/";
        numberFocus = 2;
        console.log(operator)
    });

    operatebtn.addEventListener('click', () => {
            operate(operator,firstNumber,secondNumber)
            firstNumber = output;
    });

    clearbtn.addEventListener('click', () => clearBtn());

// retrieve numbers from number buttons
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (numberFocus === 1) {
            addToFirstNumber(button.id);
        }   else {
            addToSecondNumber(button.id);
        }   
    });
  });