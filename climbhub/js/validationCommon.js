function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i = 0 ; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for(let i = 0 ; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText="";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === "") {
        return false;
    }
    return true;
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}

function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value);
}

function checkGrade(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const regex = /^([1-9]?0?([A-C]\+?|[a-c]\+?))$/ 
    return regex.test(value);
}

function checkDob(value) {
    if (!value) {
        return false;
    }
    
    let currentDate = new Date();
    let givenDate = new Date(value.value); //I hate this
    
    if (givenDate > currentDate) {
        return false;
    }
    return true;
}

