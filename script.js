document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and page from refreshing

    let name = document.getElementById("name").value;
    printName(name);
});



function printName(name){
    alert("Hello " + name + " !");
}