//Validate Login Form
function validateLogin() {

    var emailLog = document.getElementById('emailLog');
    var passwordLog = document.getElementById('passwordLog');

    if (isEmpty(emailLog, "emailLogMsg")) {

        if (emailValidation(emailLog, "* Please enter a valid email address ", "emailLogMsg")) {

            if (isEmpty(passwordLog, "passwordLogMsg")) {


                return true;

            }
        }
    }
    return false;

}
//Validate Registration Form
function validateRegister() {

    // Make quick references to our fields     
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');


    // Validations
    if (isEmpty(fname, "fnameMsg")) {
        if (isEmpty(lname, "lnameMsg")) {
            if (inputAlphabet(fname, "* For your First name please use alphabets only *", "fnameMsg")) {
                if (inputAlphabet(lname, "* For your Last name please use alphabets only *", "lnameMsg")) {
                    if (isEmpty(email, "emailMsg")) {
                        if (emailValidation(email, "* Please enter a valid email address *", "emailMsg")) {
                            if (lengthDefine(password, 6, 30)) {
                                if (passwordMatch(password, passwordConfirm)) {

                                    return true;

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;



}



function isEmpty(input, errorMsg) {

    if (input.value.length == 0) {

        document.getElementById(errorMsg).innerText = "* This Field is Required!";
        input.focus();
        return false;
    } else {
        document.getElementById(errorMsg).innerText = "";
        return true;
    }

}

function inputAlphabet(inputtext, alertMsg, msgId) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        document.getElementById(msgId).innerText = "";
        return true;
    } else {
        document.getElementById(msgId).innerText = alertMsg;
        inputtext.focus();
        return false;
    }
}


function emailValidation(inputtext, alertMsg, msgId) { //recieving Field to Validate,Messege to dsiply if validtaion fails and id of the element to display error message 
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        document.getElementById(msgId).innerText = "";
        return true;
    } else {
        document.getElementById(msgId).innerText = alertMsg;
        inputtext.focus();
        return false;
    }
}

function passwordMatch(password, passwordConfirm) {
    if (password.value == passwordConfirm.value) {
        document.getElementById('passwordConfirmMsg').innerText = "";
        return true;
    } else {

        document.getElementById('passwordConfirmMsg').innerText = "* Passwords must match";
        return false;
    }
}

function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
        document.getElementById('passwordMsg').innerText = ""; //This is to clear the error msg if this function recall
        return true;
    } else {
        document.getElementById('passwordMsg').innerText = "* Please enter between " + min + " and " + max + " characters *";
        inputtext.focus();
        return false;
    }
}