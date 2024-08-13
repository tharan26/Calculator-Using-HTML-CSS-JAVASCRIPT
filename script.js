let currentInput = '';
let firstOperand = '';
let operator = '';
let isOperatorClicked = false;

function clearInput() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    document.querySelector('.result').textContent = '0';
    isOperatorClicked = false;
}

function inputNumber(value) {
    if (isOperatorClicked) {
        currentInput = value;
        isOperatorClicked = false;
    } else {
        currentInput += value;
    }
    document.querySelector('.result').textContent = currentInput;
}

function inputOperator(op) {
    if (firstOperand && operator && !isOperatorClicked) {
        currentInput = calculate(firstOperand, operator, currentInput);
        document.querySelector('.result').textContent = currentInput;
    }
    operator = op;
    firstOperand = currentInput;
    isOperatorClicked = true;
}

function calculateResult() {
    if (firstOperand && operator) {
        currentInput = calculate(firstOperand, operator, currentInput);
        document.querySelector('.result').textContent = currentInput;
        firstOperand = currentInput;
        operator = '';
        isOperatorClicked = false;
    }
}

function calculate(firstOperand, operator, secondOperand) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 / num2;
            break;
        default:
            return 'Error';
    }

    return result.toString();
}
