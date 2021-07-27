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
