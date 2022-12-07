let first = prompt("What's your first number?");
let second = prompt("What's your second number?");

document.getElementById("first_number").value = first;
document.getElementById("second_number").value = second

document.getElementById("validate").onclick = function () {
    alert("The remainder of " + first + " and " + second + " is = " + (first%second));
}