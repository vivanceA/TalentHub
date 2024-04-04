const registerForm = document.getElementById('register-form');
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const confirmPassword = document.getElementById('confirm-password');

let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

function validateRegisterForm(event) {
    event.preventDefault();

    const username = registerUsername.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value.trim();
    const confirmPass = confirmPassword.value.trim();

    if (!username || !email || !password || !confirmPass) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPass) {
        alert('Passwords do not match.');
        return;
    }

    const user = registeredUsers.find(u => u.email === email);
    if (user) {
        alert('Email already registered.');
        window.location.href = 'index.html?registered=true';
        return;
    }

    registeredUsers.push({ username, email, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Redirect to the login page after successful registration
    window.location.href = 'index.html?registered=true';
}

registerForm.addEventListener('submit', validateRegisterForm);