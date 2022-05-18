const celle = document.querySelectorAll(".cella");
let turnoX = true;
celle.forEach(cella => {
    cella.addEventListener("click", onClick, { once: true });
})

function onClick(evento) {
    const cellaSingola = evento.target;
    console.log(cellaSingola)

    if (turnoX) {
        cellaSingola.classList.add("x");
        turnoX = false;
    } else {
        cellaSingola.classList.add("cerchio");
        turnoX = true;
    }
    //aggiungere icona
    //stabilire vincitore
    //controllare patta
    //se ha fatto x allora deve inserire o
}