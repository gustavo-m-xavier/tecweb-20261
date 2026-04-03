const form = document.querySelector("form");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("email-required");
const passError = document.getElementById("pass-required");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    emailError.textContent = "";
    passError.textContent = "";

    if (emailInput.value.trim() === "") {
        emailError.textContent = "O campo de e-mail é obrigatório!";
    }

    if (passwordInput.value.trim() === "") {
        passError.textContent = "O campo de senha é obrigatório!";
    }
});