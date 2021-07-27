//  inital variables
let numDisplay = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

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

// basic calculator functions

    // add
    add = (firstNumber,secondNumber) => firstNumber + secondNumber;

    // subtract
    subtract = (firstNumber,secondNumber) => firstNumber - secondNumber;

    // multiply
    multiply = (firstNumber,secondNumber) => firstNumber * secondNumber;

    // divide 
    divide = (firstNumber,secondNumber) => firstNumber / secondNumber;

// operator function 
function operate (operator,firstNumber,secondNumber) {
    if (operator === "+") {
        return add(firstNumber,secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber,secondNumber);
    }   
}

// add values to string
function addToFirstNumber (number) {
    numDisplay = numDisplay.concat(number);
    displayValue(numDisplay);
    firstNumber = parseFloat(numDisplay);
    // console.log(firstNumber);
    console.log("First number is " + firstNumber);
}

function addToSecondNumber (number) {
    numDisplay = numDisplay.concat(number);
    displayValue(numDisplay);
    secondNumber = parseFloat(numDisplay);
    // console.log(firstNumber);
    console.log("Second number is " + secondNumber);
}

// clear entered numbers on display
function clear () {
    numDisplay = '';
    displayValue(0);
}

// show entered numbers on display
function displayValue(n) {
    display.textContent = n;
}

// store entered numbers as string into firstNumber
function storeFirstNumber (string) {
    firstNumber = parseFloat(numDisplay);
}


// function buttons
addbtn.addEventListener('click', () => {
    operator = "+";
    clear();
    console.log(operator)
});

subtractbtn.addEventListener('click', () => console.log('subtract'));

multiplybtn.addEventListener('click', () => console.log('multipy'));

dividebtn.addEventListener('click', () => console.log('divide'));

operatebtn.addEventListener('click', () => console.log('operate'));

clearbtn.addEventListener('click', () => clear());

// number buttons
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === '') {
            addToFirstNumber(button.id);
        }   else {
            addToSecondNumber(button.id);
        }
        
    });
  });