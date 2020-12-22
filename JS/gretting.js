const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
gretting = document.querySelector(".js-gretting"),
button = document.querySelector(".js-button");

const USER_LS = "currentUser",
 SHOWING_CN ="showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

 function askForname(){
     form.classList.add(SHOWING_CN);
     form.addEventListener("submit", handleSubmit);
 }

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

function loadName () {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForname();

    } else {
        paintGreeting(currentUser);
        button.classList.add(SHOWING_CN);

    }
}

function delName(){
    localStorage.removeItem(USER_LS);
    window.location.reload();
}
function init() {

loadName();
button.addEventListener("click", delName);

}
init();

