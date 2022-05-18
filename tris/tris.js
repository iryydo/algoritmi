const celle = document.querySelectorAll(".cella");
let turnoX = true;
const combinazioniVincenti = [

    //ORIZZONTALI
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //DIAGONALI
    [0, 4, 8],
    [2, 4, 6]
    //VERTICALI
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

]


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