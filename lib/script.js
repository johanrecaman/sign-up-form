const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const error_text = document.getElementById("error_text");

function passwordCheck(){
    if (password.value != confirm_password.value){
        confirm_password.classList.add('error_highlight');
        password.classList.add('error_highlight');
        error_text.innerHTML = "Passwords don't match";
    }
    else if(password.value == confirm_password.value || confirm_password.innerHTML == ''){
        confirm_password.classList.remove('error_highlight');
        password.classList.remove('error_highlight');
        error_text.innerHTML = '';
    }
}

password.addEventListener('focus', ()=>{
    passwordCheck();
})
confirm_password.addEventListener('input', ()=>{
    passwordCheck();
})

