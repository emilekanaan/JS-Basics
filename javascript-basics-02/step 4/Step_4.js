document.querySelector("button").onclick = function () {
    let message = window.confirm("Do you want to reset the form?? \n click OK for yes \n click Cancle for no");
    if (message) {
        document.querySelector("#name").value = "";
        document.querySelector("#surname").value = "";
        document.querySelector("#city").value = "";
    }
}
