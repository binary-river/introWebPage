const USER_KEY = "userName";
const HIDDEN_CLASS = "hdn";

function getUserNameFromStorage(){
    const userName = localStorage.getItem(USER_KEY);

    return userName;
}

function setUserNameToStorage(userName){
    if( userName === "" || userName === null ) {
        alert("Invalid username!");
        return false;
    }
    localStorage.setItem(USER_KEY, userName);
    
    return true;
}

function printUserNameToScreen(textSpan, userName){
    textSpan.innerHTML = "Hola, " + userName;
}


function getAndPrintUserNameOrShowInput(textSpan, loginForm) {
    const userName = getUserNameFromStorage();
    console.log("username in storage : " + userName);
    if( userName === "" || userName === null || userName === undefined ){
        console.log("not found username");
        textSpan.classList.add(HIDDEN_CLASS);
        loginForm.classList.remove(HIDDEN_CLASS);
    } else {
        console.log("found username");
        textSpan.classList.remove(HIDDEN_CLASS);
        loginForm.classList.add(HIDDEN_CLASS);

        printUserNameToScreen(textSpan, userName);
    }
}

function login(textSpan, loginForm, userName) {
    if( !setUserNameToStorage(userName) ) return;
    console.log("now printing..");
    getAndPrintUserNameOrShowInput(textSpan, loginForm);
}
