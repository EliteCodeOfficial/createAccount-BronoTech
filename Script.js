// JS Code
let password1 = document.querySelector("#Password1");
let password2 = document.querySelector("#Password2");
let passwordVerify = document.querySelector("#Password-r")
let seePassword = document.querySelector(" #password-see");

seePassword.onclick = () => {
    password1.setAttribute('type', 'text');
    password2.setAttribute('type', 'text');
}
seePassword.onmousemove = () => {
    password1.setAttribute('type', 'password');
    password2.setAttribute('type', 'password');
}
