const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "]", "|", ":", ";", "<", ">", "?", "/", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const input = document.getElementById("password");
const btn = document.querySelector(".btn");
const copyBtn = document.getElementById("copy");
const alertBox = document.querySelector(".alertBox");

btn.addEventListener("click", function() {
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += chars[randomChar()];
    };
    input.value = password;
});

function randomChar() {
    return Math.floor(Math.random() * chars.length);
};

copyBtn.addEventListener("click", function() {
    if (input.value) {
    input.select();
    input.setSelectionRange(0,99999);
    document.execCommand("copy");
    alertBox.classList.toggle("active");
    alertBox.innerHTML = "COPIED!";
    setTimeout(function() {
        alertBox.classList.toggle("active")
    }, 700);
    }
    /*alert("Copied the text: " + passText.value);*/
});

