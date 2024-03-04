function validateForm() {
    // first of all reset error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // get input values from input fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    

    if(email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email cannot be empty';
        return false; // stop form submission
    }
    else if(!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        return false; 
    }

    if(password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password cannot be empty';
        return false; 
    }
    else if(password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password should be at least 8 characters';
        return false;
    }

    // check if both email and password are valid
    if(email !== '' && isValidEmail(email) && password.trim() !== '' && password.length >= 8) {
        // reset the form if valid and display a login Successful !
        alert('Login Successful !')
        document.getElementById('loginForm').reset();
        return false;
    }
}

function isValidEmail(email) {
    // basic email validation using a regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
