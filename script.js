document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    const result = evaluate(previousInput, currentInput, operator);
                    display.textContent = result;
                    currentInput = result;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function evaluate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch(op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
