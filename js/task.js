function submitForm() {
    alert(`now you have a acount`);
}

function Modal_function() {
    // Get form elements
    let name = document.getElementById('name-2').value;
    let email = document.getElementById('email-2').value;
    let password = document.getElementById('phonenumber-2').value;
    // Check if all fields are filled
    if (name === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }
    // Check if email contains "@" and "."
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }
    // If all checks pass
    else {
        alert("now you are from brimbolo family")
    }
    return true;
}
function btn_function() {
    alert("Purchased")
}
function request_function() {
    let textarea = document.getElementById('btn').value;
    if (textarea === "") {
        alert("you must say your request !!")
    }
    else {
        alert("thank you for your request")
    }


}