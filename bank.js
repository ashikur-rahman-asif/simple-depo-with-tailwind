
document.getElementById('login-submit').addEventListener('click', function(){
    //get email
    const emailField= document.getElementById('user-email');
    const useremail=emailField.value;
    //get user pass
    const passwordField=document.getElementById('user-pass');
    //check email and password
    const userpass=passwordField.value;
    if(useremail=='asif13@gmail.com' && userpass=='tasmia'){
        window.location.href='banking.html'
    }
    else{
        console.log('The password that youve entered is incorrect')
    }
});

//handle deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    console.log(useremail)
})