document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and page from refreshing

    let name = document.getElementById("name").value;
    let password= document.getElementById("password").value;
    let repassword= document.getElementById("repassword").value;
    if(password !== repassword){
        alert("Your passwords don't match !");
    }
    else{
        printName(name);
    }
});



function printName(name){
    alert("Hello " + name + " !");
}