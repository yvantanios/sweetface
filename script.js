function askPass(){
    let password = prompt("Please enter the password");

    while(password != "sweetface"){
        password = prompt("Please enter the correct password")
    }

    if (password == "sweetface"){
        window.location = "mainpage.html";
    }     
} 

window.onload = askPass;