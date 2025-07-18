const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const btnText = event.target.innerText;

        switch (btnText) {
            case '=':
                try {
                    currentInput = eval(currentInput);
                    inputBox.value = currentInput;
                } catch (err) {
                    inputBox.value = "Error";
                    currentInput = "";
                }
                break;
            case 'AC':
                currentInput = "";
                inputBox.value = "";
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                inputBox.value = currentInput;
                break;
            default:
                currentInput += btnText;
                inputBox.value = currentInput;
        }
    });
});
