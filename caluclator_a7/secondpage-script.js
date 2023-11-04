$(document).ready(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const usernameDisplay = $('#usernameDisplay');

    if (username) {
        usernameDisplay.text(username);
    }

    const number1Input = $('#number1');
    const number2Input = $('#number2');
    const number1Error = $('#number1Error');
    const number2Error = $('#number2Error');
    const resultDisplay = $('#result');

    const isValidNumber = (value) => {
        return !isNaN(value) && isFinite(value);
    };

    const validateFields = () => {
        number1Error.text('');
        number2Error.text('');

        const number1 = number1Input.val();
        const number2 = number2Input.val();

        if (!number1) {
            number1Error.text('Number 1 is required.');
        } else if (!isValidNumber(number1)) {
            number1Error.text('Invalid number.');
        }

        if (!number2) {
            number2Error.text('Number 2 is required.');
        } else if (!isValidNumber(number2)) {
            number2Error.text('Invalid number.');
        }
    };

    const calculate = (operation) => {
        validateFields();

        const number1 = parseFloat(number1Input.val());
        const number2 = parseFloat(number2Input.val());

        if (!isNaN(number1) && !isNaN(number2)) {
            let result;
            switch (operation) {
                case 'add':
                    result = number1 + number2;
                    break;
                case 'subtract':
                    result = number1 - number2;
                    break;
                case 'multiply':
                    result = number1 * number2;
                    break;
                case 'divide':
                    if (number2 !== 0) {
                        result = number1 / number2;
                    } else {
                        resultDisplay.text('Cannot divide by zero.');
                        return;
                    }
                    break;
                default:
                    result = 'Invalid operation';
                    break;
            }
            resultDisplay.text(`Result: ${result}`);
        }
    };

    $('#addButton').click(() => calculate('add'));
    $('#subtractButton').click(() => calculate('subtract'));
    $('#multiplyButton').click(() => calculate('multiply'));
    $('#divideButton').click(() => calculate('divide'));
});
