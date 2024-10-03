// basic mathematical functions
function add(a,b) {
    if(Number(a+b) === (a+b) && (a+b) % 1) {
    return (a + b).toFixed(2);
    } else {
        return a + b;
    }
};

function subtract(a,b) {
    if(Number(a-b) === (a-b) && (a-b) % 1) {
        return (a - b).toFixed(2);
        } else {
            return a - b;
        }

};

function multiply(a,b) {
    if(Number(a*b) === (a*b) && (a*b) % 1) {
        return (a * b).toFixed(2);
        } else {
            return a * b;
        }
};



function divide(a,b) {
    if(b == 0){
        alert('Cant do that');
        return display.textContent = firstNumber;


    } else if(Number(a/b) === (a/b) && (a/b) % 1) {
        return (a / b).toFixed(2);
        } else {
            return a / b;
        }
    
};

function modulo(a,b) {
    if(Number(a%b) === (a%b) && (a%b) % 1) {
        return (a % b).toFixed(2);
        } else {
            return a % b;
        }

}


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
    } else if(b == '%') {
        return modulo(a,c)
    }
};










const btn = document.querySelectorAll('.btn');


const char = document.querySelectorAll('.char')

const display = document.querySelector('.screen');


const num = document.querySelectorAll('.num');


num.forEach(button => {


    button.addEventListener('click', () => {
        if(display.textContent == '0') {
            display.textContent = '';
        }

        let a = display.textContent;



       

        if (display.textContent == '*' || a =='/' || a =='+' || a == '-' ||  a == '%') {

            display.textContent = button.textContent;
        } else {




            display.textContent = display.textContent + button.textContent;

        }




    });
});

const acButton = document.querySelector('.ac');

acButton.addEventListener('click', () => {
    display.textContent = '0';
})

const plusMinusButton = document.querySelector('.toggleNegPosNum');




plusMinusButton.addEventListener('click', () => {
    display.textContent = -display.textContent


    

})






// button is clicked n amount of times 
// then once a special character is clicked those previous numbers are stored 
// then the spec character is stored
// then all numbers after the special char but before the equal sign
















display.textContent = 0;


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
    
    if(display.textContent == operator){
        display.textContent = operator

    } else if(operator == undefined) {
            display.textContent = display.textContent
    } else {
        a = display.textContent;
        if(a == '+' || a == '-' || a == '*' || a == '/' || a == '%') {

        } else {

    secondNumber = +display.textContent;


    display.textContent = operate(firstNumber, operator, secondNumber);
        }


    }

})


const dec = document.querySelector('.dec');

dec.addEventListener('click', () => {
    if(display.textContent.includes('.')) {
        dec.disabled = true;


    }
})





