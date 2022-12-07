let size = prompt("What's your shoe size?");
let year = prompt("What's your birth year?");

document.getElementById("shoe_size").value = size;
document.getElementById("year").value = year;

document.getElementById("validate").onclick = function () {
    alert("The result is " + (size * 2 + 5 * 50 - year + 1766));
}