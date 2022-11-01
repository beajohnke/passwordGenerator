const container = document.querySelector("#container");
const hidePassword = document.querySelectorAll(".icon-password");
const passwordField = document.querySelectorAll(".form-password");
const signup = document.querySelector("#register");
const login = document.querySelector("#logon");

// SHOW AND HIDE PASSWORD
hidePassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        passwordField.forEach(passwordField => {
            if(passwordField.type ==="password") {
                passwordField.type = "text";

                hidePassword.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })

            } else {
                passwordField.type = "password";

                hidePassword.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// SHOW AND HIDE LOGIN OR REGISTER
signup.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

// GENERATE RANDOM PASSWORD
const lengthInput = document.querySelector("#passwordLength");
const infoLength = document.querySelector('label[for="passwordLength"]');
const btnGenerate = document.querySelector("#btn-generate");
const resultPassword = document.querySelector("#resultPassword");
const resultP = document.querySelector(".result");

const chkLower = document.querySelector("#lowercase");
const chkUpper = document.querySelector("#uppercase");
const chkNumber = document.querySelector("#number");
const chkSymbols = document.querySelector("#symbols");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "*", "<", ">", "[", "]"];
const lowerCaseCarac = "abcdefghijlmnopqrstuvwxyz";
const upperCaseCarac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

infoLength.innerHTML = lengthInput.value;

lengthInput.addEventListener("change", () => {
    infoLength.innerHTML = lengthInput.value;
})

btnGenerate.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lengthInput.value,
    )
});

const generatePassword = (hasNumbers, hasSymbols, hasLower, hasUpper, length) => {
    let password = ""; 

    const newArray = [
        ...(hasUpper ? upperCaseCarac : []),
        ...(hasLower ? lowerCaseCarac : []),
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
    ];

    if(newArray.length === 0) return;


    for(let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * newArray.length);
        password += newArray[random];
    }

    resultP.innerHTML = "Aqui está sua senha:"
    resultPassword.innerHTML = resultPassword.value = password;
};

// SHOW AND HIDE PASSWORD GENERATOR
function toggle() {
    let passconfig = document.querySelector(".generated-password");
    const generatedPasswordElement = document.querySelector(".generated-password");

    if(generatedPasswordElement.style.display === "none") {
        passconfig.style.display = "block";
    } else {
        passconfig.style.display = "none";
    }
}