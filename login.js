const loginForm = document.getElementById('login-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

function validateLoginForm(event) {
    event.preventDefault();

    const usernameOrEmail = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if (!usernameOrEmail || !password) {
        alert('Please fill in both fields.');
        return;
    }

    const user = registeredUsers.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);
    if (!user) {
        alert('Invalid username or email.');
        return;
    }

    if (user.password !== password) {
        alert('Incorrect password.');
        return;
    }

    alert('Login successful!');
    loginForm.reset();

    // Redirect to the home page after successful login
    window.location.href = 'index.html'; // Replace with your actual home page URL
}

// // Display a success message if the user is redirected from the registration page
// const urlParams = new URLSearchParams(window.location.search);
// const registered = urlParams.get('registered');
// if (registered === 'true') {
//     alert('Registration successful!');
// }

loginForm.addEventListener('submit', validateLoginForm);