function addStudent() {
    var name = document.getElementById("Name").value;
    var qualification =  document.getElementById("Qualification").value;
    var age =  document.getElementById("Age").value;
    var score =  document.getElementById("Score").value;

    var errorMessageElement =  document.getElementById("errorMessage").value;
    if (name == ''){
        errorMessageElement.innerText = "Name is Required";
    }
}