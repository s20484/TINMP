function validateForm() {
    const nameInput = document.getElementById('name');
    const locationInput = document.getElementById('location');
    const typeInput = document.getElementById('type');
    const gradeInput = document.getElementById('grade');
    const stillexistsInput = document.getElementById('stillexists');


    const errorName = document.getElementById('errorName');
    const errorLocation = document.getElementById('errorLocation');
    const errorType = document.getElementById('errorType');
    const errorGrade = document.getElementById('errorGrade');
    const errorStillexists = document.getElementById('errorStillexists');
    const errorSummary = document.getElementById('errorSummary')

    resetErrors([nameInput, locationInput, typeInput, gradeInput, stillexistsInput], [errorName, errorLocation, errorType, errorGrade, errorStillexists], errorSummary);


    let valid = true;

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field is required";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Field length should be between 2 and 60";
    }

    if (!checkRequired(locationInput.value)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Field is required";
    } else if (!checkTextLengthRange(locationInput.value, 2, 60)) {
        valid = false;
        locationInput.classList.add("error-input");
        errorLocation.innerText = "Field length should be between 2 and 60";
    }

    if(!checkRequired(typeInput.value)) {
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Field is required";
    } else if (!checkTextLengthRange(typeInput.value, 2, 60)) {
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Field length should be between 2 and 60";
    }

    if(!checkRequired(gradeInput.value)) {
        valid = false;
        gradeInput.classList.add("error-input");
        errorGrade.innerText = "Field is required";
    } else if (!checkGrade(gradeInput.value)) {
        valid = false;
        gradeInput.classList.add("error-input");
        errorGrade.innerText = "Grades in French scale only! (e.g. 7a+)";
    }

    if (!valid) {
        errorSummary.innerText = "Incorrect form input";
    }

    return valid;

}