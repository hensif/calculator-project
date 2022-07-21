let btn = document.querySelector('button')

let nums = document.querySelectorAll('.dig');



    nums.forEach(num => {
        num.addEventListener('click', (e) => {
            console.log(num.dataset.value);
        });
        });

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

