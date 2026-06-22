const temaBtn = document.getElementById("temaBtn");

if(localStorage.getItem("tema") === "oscuro"){
    document.body.classList.add("dark");
}

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema", "oscuro");
    }else{
        localStorage.setItem("tema", "claro");
    }

});

let tamañoFuente = 100;

document.getElementById("aumentarTexto").addEventListener("click", () => {
    tamañoFuente += 10;
    document.body.style.fontSize = tamañoFuente + "%";
});

document.getElementById("disminuirTexto").addEventListener("click", () => {

    if(tamañoFuente > 80){
        tamañoFuente -= 10;
        document.body.style.fontSize = tamañoFuente + "%";
    }

});