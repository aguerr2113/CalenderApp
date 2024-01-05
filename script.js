let divForm = document.getElementById("sign-up");
let headerText = document.getElementById("header-text");
let username = document.getElementById("username");
let pass = document.getElementById('password');
let email = document.getElementById('email');
let signUpForm = document.getElementById("sign-up-form");

const usernameErrPara = document.getElementById('username-err')
const passwordErrPara = document.getElementById('password-err')
const emailErrPara = document.getElementById('email-err');
const btn = document.getElementById('btn');
const form = document.getElementById('sign-up-form');





btn.addEventListener("click",displayForm);

username.addEventListener('input',function(e) {
    // console.log(e.target.value)
    let pattern = /^\w{8,20}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue)

    if(valid){
        usernameErrPara.style.display = 'none'
    }
    else{
        usernameErrPara.style.display = 'block'
    }
    
});
pass.addEventListener('input',function(e) {
    // console.log(e.target.value)
    let pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%&]{8,20}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue)

    if(valid){
        passwordErrPara.style.display = 'none'
    }
    else{
        passwordErrPara.style.display = 'block'
    }
    
});


email.addEventListener('input', function(e) {
    let pattern = /^\S+@\S+\.\S+$/; // Basic email regex
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);

    if(valid) {
        emailErrPara.style.display = 'none';
    } else {
        emailErrPara.style.display = 'block';
    }
});



function displayForm(){
    divForm.style.removeProperty('display');
    headerText.style.display = 'none'
};

form.addEventListener('submit', function(e) {
    let isFormValid = true;

    // Username validation
    let usernamePattern = /^\w{8,20}$/;
    if (!usernamePattern.test(username.value)) {
        isFormValid = false;
        usernameErrPara.style.display = 'block';
    } else {
        usernameErrPara.style.display = 'none';
    }

    // Password validation
    let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%&]{8,20}$/;
    if (!passwordPattern.test(pass.value)) {
        isFormValid = false;
        passwordErrPara.style.display = 'block';
    } else {
        passwordErrPara.style.display = 'none';
    }

    // Email validation
    let emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email.value)) {
        isFormValid = false;
        emailErrPara.style.display = 'block';
    } else {
        emailErrPara.style.display = 'none';
    }

    // Prevent form submission if not valid
    if (!isFormValid) {
        e.preventDefault();
        // Optionally, display a general error message or handle the error state
    }
});
