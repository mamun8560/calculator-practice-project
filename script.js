const inputValue = document.getElementById('user-input');
const number = document.querySelectorAll('.numbers');
const calculator = document.querySelectorAll('.operations');

number.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (inputValue.innerText === 'NaN' || inputValue.innerText === '0') {
            inputValue.innerText = '';
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

calculator.forEach((item) => {
    item.addEventListener('click', (e) => {
        const btn = e.target.innerHTML.trim();
        const display = inputValue.innerText;
        const lastChar = display.charAt(display.length - 1);

        if (btn === '=') {
            try {
                inputValue.innerText = eval(display);
            } catch {
                inputValue.innerText = 'NaN';
            }
        } 
        else if (btn === 'AC') {
            inputValue.innerText = '0';
        } 
        else if (btn === 'DEL') {
            inputValue.innerText = display.slice(0, -1) || '0';
        } 
        else {
            // Only add operator if last char is not an operator
            if (!['+', '-', '*', '/'].includes(lastChar)) {
                inputValue.innerText += btn;
            }
        }
    });
});
