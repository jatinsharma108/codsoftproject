const display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function updateDisplay(value) {
    currentNumber += value;
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    display.value = '';
}

function calculate() {
    previousNumber = currentNumber;
    currentNumber = '';
    operation = '';

   
    const result = eval(previousNumber);

    display.value = result.toString();
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        switch (value) {
            case '(':
                updateDisplay('(');
                break;
            case ')':
                updateDisplay(')');
                break;
            case '=':
                calculate();
                break;
            case 'C':
                clearDisplay();
                break;
            case 'AC':
                clearDisplay();
                break;
            default:
                updateDisplay(value);
        }
    });
});