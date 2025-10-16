let form=document.querySelector("form");
form.addEventListener("submit",signup)

let signup_arr=JSON.parse(localStorage.getItem("signup_arr")) ||[];

function signup(){
    event.preventDefault();
    let signup_obj={
        name:form.username.value,
        mobile:form.mobile.value,
        username:form.username.value,
        password:form.password.value,
    }
    signup_arr.push(signup_obj);
    console.log(signup_arr);
    


    localStorage.setItem("signup_arr",JSON.stringify(signup_arr));
    alert("User Registered");
    window.location.href= "../html/login.html";

    
}

