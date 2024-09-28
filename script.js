// basic mathematical functions
function add(a,b) {
    return a + b;
};

function subtract(a,b) {
     return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};


// create variables for calc operation numbers ex. 3 + 5
let firstNumber;
let operator;
let secondNumber;

// create operate function that takes above variables and calls math functions
function operate(a, b, c) {
    a = firstNumber;
    b = operator;
    c = secondNumber;

    if (b == '+') {
        add(a,c);
    } else if(b == '-') {
        subtract(a,b);
    } else if(b == '*') {
        multiply(a,b);
    } else if(b == '/') {
        divide(a,b);
    }
};