let name = prompt("What's your name?");
let surname = prompt("What's your surname?");
let city = prompt("What's your city?");

document.getElementById("name").value = name;
document.getElementById("surname").value = surname;
document.getElementById("city").value = city;

document.getElementById("validate").onclick=function () {
    alert("You're: " + name + " " + surname + " and you live in: " + city);
}