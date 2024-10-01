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
    a = +a;
    c = +c;

    if (b == '+') {
       return add(a,c);
    } else if(b == '-') {
        return subtract(a,c);
    } else if(b == '*') {
       return multiply(a,c);
    } else if(b == '/') {
        return divide(a,c);
    }
};










const btn = document.querySelectorAll('.btn');


const char = document.querySelectorAll('.char')



const num = document.querySelectorAll('.num');
const display = document.querySelector('.screen');


num.forEach(button => {


    button.addEventListener('click', () => {


        let a = display.textContent;



        if (display.textContent == '*' || a =='/' || a =='+' || a == '-') {

            display.textContent = button.textContent;
        } else {




            display.textContent = display.textContent + button.textContent;

        }




    });
});






// button is clicked n amount of times 
// then once a special character is clicked those previous numbers are stored 
// then the spec character is stored
// then all numbers after the special char but before the equal sign
















display.textContent = '0';


char.forEach(button => {
    button.addEventListener('click', () => {
        firstNumber = +display.textContent;

    });
});




char.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
        operator = display.textContent;

    });
});


const equal = document.querySelector('.equal');



equal.addEventListener('click', () => {
    secondNumber = +display.textContent;
    display.textContent = operate(firstNumber, operator, secondNumber);

})







