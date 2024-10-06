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

        if (a == '*' || a =='/' || a =='+' || a == '-' ||  a == '%') {

            display.textContent = button.textContent;
        } else {




            display.textContent = display.textContent + button.textContent;

        }




    });
});

// document.addEventListener('keydown',(event) => {
//     console.log(event.key);

// } )





    


const acButton = document.querySelector('.ac');

acButton.addEventListener('click', () => {
    dec.disabled = false;

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

const dec = document.querySelector('.dec');


char.forEach(button => {
    button.addEventListener('click', () => {
        dec.disabled = false;
    })
})




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




document.addEventListener('keydown', (event) => {
    parent = document.querySelector('.container');
    children = parent.children;



    if(display.textContent == '0') {
        display.textContent = '';
    } 

    let a = display.textContent;

    if (a == '*' || a =='/' || a =='+' || a == '-' ||  a == '%') {
        dec.disabled = false;
        
        display.textContent = children.textContent;
    }

  


    if(event.key == 1){
        display.textContent = display.textContent + children[13].textContent;
    } else if(event.key == 2){
        display.textContent = display.textContent + children[14].textContent;

    } else if(event.key == 3){
        display.textContent = display.textContent + children[15].textContent;
    } else if(event.key == '+') {
        firstNumber = +display.textContent;

        display.textContent = children[16].textContent;
        operator = display.textContent;


    } else if (event.key == 0){
        display.textContent = display.textContent + children[17].textContent;
    } else if (event.key == '.'){
        if(display.textContent.includes('.')) {
            dec.disabled = true;
        }
        if(dec.disabled == true){

        } else {
        display.textContent = display.textContent + children[18].textContent;

        }
    } else if (event.key == 4){
        display.textContent = display.textContent + children[9].textContent;

    } else if (event.key == 5){
        display.textContent = display.textContent + children[10].textContent;

    } else if (event.key == 6){
        display.textContent = display.textContent + children[11].textContent;

    } else if (event.key == '-'){
        firstNumber = +display.textContent;

        display.textContent = children[12].textContent;
        operator = display.textContent;

    } else if(event.key == 7){
        display.textContent = display.textContent + children[5].textContent;

    } else if(event.key == 8){
        display.textContent = display.textContent + children[6].textContent;

    } else if(event.key == 9){
        display.textContent = display.textContent + children[7].textContent;

    } else if(event.key == '*'){
        firstNumber = +display.textContent;

        display.textContent = children[8].textContent;
        operator = display.textContent;

    } else if(event.key == '%'){
        firstNumber = +display.textContent;

        display.textContent = children[3].textContent;
        operator = display.textContent;

    } else if(event.key == '/'){
        firstNumber = +display.textContent;

        display.textContent = children[4].textContent;
        operator = display.textContent;
    } else if(event.key == 'Escape') {
        dec.disabled = false;

        display.textContent = '0';
    }




});

document.addEventListener('keydown', (event) => {
    if(event.key == 'Backspace') {
        a = display.textContent.length;
        display.textContent = display.textContent.slice(0, -1)
    }
})





document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
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

    }
      
});





























dec.addEventListener('click', () => {
    if(display.textContent.includes('.')) {
        dec.disabled = true;
    } 
})

if(firstNumber !== undefined){
    dec.disabled = false;
}


console.log(firstNumber);








