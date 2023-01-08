function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const dobInput = document.getElementById("dob");

    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorDob = document.getElementById("errorDob");
    const errorSummary = document.getElementById("errorSummary");

    resetErrors([nameInput, emailInput, dobInput], [errorName, errorEmail, errorDob], errorSummary);

    let valid = true;

    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field is required";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field length should be between 2 and 60";
    }

    if(!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Field is required";
    } else if(!checkEmail(emailInput)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Incorrect email address format";
    }

   if(!checkDob(dobInput)) {
        valid = false;
        dobInput.classList.add("error-input");
        errorDob.innerText = "Date cannot be from the future";
    }

    if (!valid) {
        errorSummary.innerText = "Incorrect form input";
    }

    return valid;
}