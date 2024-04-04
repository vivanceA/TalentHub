const applyForm = document.getElementById('apply-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const resumeInput = document.getElementById('resume');
const coverLetterInput = document.getElementById('cover-letter');

applyForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const resume = resumeInput.files[0];
    const coverLetter = coverLetterInput.value.trim();

    if (!name || !email || !phone || !resume || !coverLetter) {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you can add code to handle the form submission
    // For example, you can send the form data to a server using AJAX or FormData

    alert('Application submitted successfully!');
    applyForm.reset();
});
