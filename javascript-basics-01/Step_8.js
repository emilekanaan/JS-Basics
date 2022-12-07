let age = prompt("How old are you?");

document.getElementById("age").value = age;

document.getElementById("validate").onclick = function () {
    if (age < 18) {
        alert("you are under 18");
    } else {
        alert("you are over 18");
    }
}