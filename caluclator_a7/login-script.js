$(document).ready(() => {
    const emailInput = $('#email');
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');
    const emailError = $('#emailError');
    const usernameError = $('#usernameError');
    const passwordError = $('#passwordError');
    const confirmPasswordError = $('#confirmPasswordError');
    const loginButton = $('#loginButton');

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
        return emailPattern.test(email);
    };

    const validateFields = () => {
        emailError.text('');
        usernameError.text('');
        passwordError.text('');
        confirmPasswordError.text('');

        const email = emailInput.val();
        const username = usernameInput.val();
        const password = passwordInput.val();
        const confirmPassword = confirmPasswordInput.val();

        if (!email) {
            emailError.text('Email is required.');
        } else if (!isValidEmail(email)) {
            emailError.text('Invalid Northeastern email format.');
        }

        if (!username) {
            usernameError.text('User Name is required.');
        }

        if (!password) {
            passwordError.text('Password is required.');
        }

        if (!confirmPassword) {
            confirmPasswordError.text('Confirm Password is required.');
        }

        if (password !== confirmPassword) {
            confirmPasswordError.text('Passwords do not match.');
        }

        const isValid = !emailError.text() && !usernameError.text() && !passwordError.text() && !confirmPasswordError.text();
        loginButton.prop('disabled', !isValid);

        if (isValid) {
            const username = usernameInput.val();
            window.location.href = `secondpage.html?username=${encodeURIComponent(username)}`;
        }
    };

    emailInput.on('input', validateFields);
    usernameInput.on('input', validateFields);
    passwordInput.on('input', validateFields);
    confirmPasswordInput.on('input', validateFields);

    loginButton.click(validateFields);
});

