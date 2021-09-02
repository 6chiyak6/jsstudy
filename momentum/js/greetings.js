const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit (event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    loginInput.classList.add(HIDDEN_CLASSNAME);
    paintGreeings(username);
}

function handleClickLink(event){
    event.preventDefault();
    console.log(event);
}
function paintGreeings(savedname){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedname}`;
}
const savedname = localStorage.getItem(USERNAME_KEY);
if ( savedname === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreeings(savedname);
}
