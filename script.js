let passwordLength = 8;

let isUpperCase = false;
let isNumber = false;
let isSymbols = false;

const passwordRangeInputEl = document.getElementById("passRange")

const rangeValueEl = document.getElementById("rangeValue")
const genBtn = document.getElementById("getBtn")
const displayPassword = document.getElementById("password")

const generatePassword = (passwordLength) =>{
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetters = isUpperCase?"ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
    const numbers = isNumber? "0123456789" : ""
    const symbols = isSymbols? "!@3$%^&*()_+" : ""

    const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols

    let password = "";
    for(let i = 0; i<passwordLength; i++){
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex]
    }
    return password;
}

passwordRangeInputEl.addEventListener("input",(e) =>{    
    passwordLength = +e.target.value;
    rangeValueEl.innerText = passwordLength
})

genBtn.addEventListener("click",()=>{
    const upperCaseCheckEl = document.getElementById("uppercase")
    const numbersCheckEl = document.getElementById("numbers")
    const symbolsCheckEl = document.getElementById("symbols")

    isUpperCase = upperCaseCheckEl.checked;
    isNumber = numbersCheckEl.checked;
    isSymbols = symbolsCheckEl.checked;

    
    const password = generatePassword(passwordLength);
    displayPassword.innerText = password
    console.log(password);
})

displayPassword.addEventListener("click",(e) =>{
   if(e.target.innerText.length > 0){
    navigator.clipboard.writeText(displayPassword.innerText).then(()=>{
        alert("copied to clipboard")
    })
    .catch((err)=>{
        alert("could not copied")
    })
   }
})

