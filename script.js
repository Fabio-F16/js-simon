console.log('js ok');
// genero un numero random 
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}
// fine genero un numero random 

// numeri da ricordare
function numeriDaRicordare(arrayNumeri) {

    let numberCpu;

    do {
        numberCpu = (generateRandomNumber(1, 100));
        arrayNumeri.push(numberCpu);
    } while (arrayNumeri.length < 5);

    console.log(arrayNumeri);
    numeroUno.innerText = arrayNumeri;
    return arrayNumeri;
}
// numeri da ricordare

// funzione risposta
function promptDiRisposta(arrayNumeri, otherArrayNumeri) {
    arrayNumeri = [];
    otherArrayNumeri = [];
    let ask;

    for (let i = 0; i < 5; i++) {
        ask = parseInt(prompt('inserisci i numeri'));
        arrayNumeri.push(ask);
        console.log(arrayNumeri);
        if (arrayNumeri[i] === otherArrayNumeri[i]) {
            console.log('hai vinto');
        } else {
            console.log('hai perso')
        }
    }

}
// funzione risposta



function blackScreen() {
    numeroUno.classList.add('black-screen');
}
// fine funzioni ----------------------------------------------------------------


let numeroUno = document.querySelector('.numeroUno');

const startGame = document.querySelector('.startGame');

startGame.addEventListener("click", () => {
    const arrayNumeriCpu = [];
    const arrayUser = [];

    numeriDaRicordare(arrayNumeriCpu);

    setTimeout(blackScreen, 4500)

    setTimeout(promptDiRisposta, 5000);
})







