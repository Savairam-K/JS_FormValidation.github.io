const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const feedbackError = document.getElementById('feedback-error');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('myForm');

const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if(nameInput.value === ''){
        nameError.textContent = "Name can't be blank";
        isValid = false;
    }

    if(emailError === ''){
        emailError.textContent = "Email can't be empty";
        isValid = false;
    }else if(!email_pattern.test(emailInput.value)){
        emailError.textContent = "Enter a valid email"
        isValid = false;
    }

    if(feedbackInput.value === ''){
        feedbackError.textContent = "Please add some message";
        isValid = false;
    }

    if(isValid){
        alert('Form is submitted successfully !\nWe will get back to you :)');
        form.reset();
    }
})
