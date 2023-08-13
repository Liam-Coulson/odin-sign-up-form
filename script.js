const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");

passwordField.addEventListener("input", () => checkMatch());
confirmPasswordField.addEventListener("input", () => checkMatch());


function checkMatch() {
    if (passwordField.value != confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("Passwords do not match");
        console.log("Passwords do not match");
    } else {
        confirmPasswordField.setCustomValidity("");
        console.log("Passwords match");
    }
}