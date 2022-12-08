document.querySelector("button").onclick = function () {
    let first = document.querySelector("#password").value;
    let second = document.querySelector("#confirmation").value;
    if (first !== second) {
        document.querySelector("#password").style.border= "2px solid red";
        document.querySelector("#confirmation").style.border= "2px solid red";
    } else {
        document.querySelector("#password").style.border= "";
        document.querySelector("#confirmation").style.border= "";
    }
}