document.querySelector("#hide").setAttribute("onclick", 'toggle(this)');
document.querySelector("#show").setAttribute("onclick", 'toggle(this)');

function toggle(e) {
    let text = document.querySelector("#texte");
    console.log(e);
    if (e.id === "show") {
        text.style.display= "block";

    } else if (e.id === "hide") {
        text.style.display = "none";
    }

}
