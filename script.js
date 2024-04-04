const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const confirmPassword = document.getElementById('confirm-password');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

let registeredUsers = [];

function showRegisterForm() {
    formOverlay.style.display = 'block';
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}

function showLoginForm() {
    formOverlay.style.display = 'block';
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
}

function closeForm() {
    formOverlay.style.display = 'none';
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
}

function showRegisterForm() {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}

function showLoginForm() {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
}

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
        return;
    }

    registeredUsers.push({ username, email, password });
    alert('Registration successful!');
    registerForm.reset();
}

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
}

window.onclick = function (event) {
    if (event.target === formOverlay) {
        closeForm();
    }
}