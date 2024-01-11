const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInputs()
})

const isValidEmail = email => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return expression.test(String(email).toLowerCase())
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');
    displayError.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');
    displayError.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs = () => {
    const emailValue = email.value.trim();

    if(!emailValue) {
        setError(email, 'Email Address is required!')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Set a valid email address!')
    } else {
        setSuccess(email)
    }
}