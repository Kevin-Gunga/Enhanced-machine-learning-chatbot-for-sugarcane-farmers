// const submitbutton_1 = document.getElementById("create-submit");

const loginButton = document.getElementById("create-login");
const createAccountButton = document.getElementById("login-login")



const loginForm = document.getElementById("login-account");

const createForm = document.getElementById("create-account")

function displayLoginForm () {
   
   loginForm.style.display = 'block';
   createForm.style.display = 'none'
}

function displayAccountForm () {
   createForm.style.display = 'block'
   loginForm.style.display = 'none'
}

// submitbutton_1.addEventListener("click", moveTochatPage); 

loginButton.addEventListener("click", displayLoginForm)

createAccountButton.addEventListener("click", displayAccountForm)