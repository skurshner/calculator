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
    add = (a,b) => a + b;

    // subtract
    subtract = (a,b) => a - b;

    // multiply
    multiply = (a,b) => a * b;

    // divide 
    divide = (a,b) => a / b;

// operator function 
function operate (operator,a,b) {
    if (operator === "+") {
        return add(a,b);
    } else if (operator === "-") {
        return subtract(a,b);
    } else if (operator === "*") {
        return multiply(a,b);
    } else if (operator === "/") {
        return divide(a,b);
    }   
}

// add values to string
let firstNumber = '';
function addToString (number) {
    firstNumber = firstNumber.concat(number);
    displayValue(firstNumber);
}

// clear function
function clear () {
    firstNumber = '';
    displayValue(0);
}

// display function
function displayValue(n) {
    display.textContent = n;
}

// function buttons
addbtn.addEventListener('click', () => console.log('add'));

subtractbtn.addEventListener('click', () => console.log('subtract'));

multiplybtn.addEventListener('click', () => console.log('multipy'));

dividebtn.addEventListener('click', () => console.log('divide'));

operatebtn.addEventListener('click', () => console.log('operate'));

clearbtn.addEventListener('click', () => clear());

// number buttons
numBtns.forEach((button) => {
    button.addEventListener('click', () => {
      addToString(button.id);
    });
  });

