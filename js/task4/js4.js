function checknum(event){
    isNaN(event.key) ? event.preventDefault() : '';
}

function validate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    if(username.value.trim() == "" || password.value.trim() == ""){
        alert("Please fill in the form");
        return false;
    }
    else{
        return true;
    }
}