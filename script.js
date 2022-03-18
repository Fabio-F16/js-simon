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
function promptDiRisposta(user, otherArrayNumeri) {

    user = [];
    otherArrayNumeri = [];
    let ask;

    do {
        ask = parseInt(prompt('inserisci i numeri'));
        user.push(ask);
    } while (user.length < 5)
    console.log(user);
}
// funzione risposta


// confronto array
function confrontoArray(user, otherArrayNumeri) {

    let i;

    for (let i = 0; i < 5; i++) {
        user = [];
        otherArrayNumeri = [];

    }
    if (user[i] === otherArrayNumeri[i]) {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }

}


// confronto array


// nascondere i numeri
function blackScreen() {
    numeroUno.classList.add('black-screen');
}
// nascondere i numeri
// fine funzioni ----------------------------------------------------------------


let numeroUno = document.querySelector('.numeroUno');

const startGame = document.querySelector('.startGame');

let arrayNumeriCpu = [];
let arrayUser = [];

startGame.addEventListener("click", () => {

    arrayNumeriCpu = numeriDaRicordare(arrayNumeriCpu);

    setTimeout(blackScreen, 4500);

    setTimeout(function () {

        promptDiRisposta(arrayUser, arrayNumeriCpu);

    }, 5000)
    let confronto = confrontoArray(arrayUser, arrayNumeriCpu);
    console.log(confronto);

})








