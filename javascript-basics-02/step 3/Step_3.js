let div = document.createElement("div");
document.body.appendChild(div);
document.querySelector("#name").onchange = function () {
    let text = document.querySelector("#name").value;
    let divText = document.querySelector("div")
    divText.innerHTML = text;
}