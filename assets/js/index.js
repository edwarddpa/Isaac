// Primer Ejercicio

const pantera = document.querySelector('.panterarosaimg');

pantera.addEventListener('click', () => {
    if (pantera.style.border) {
        pantera.style.border = '';
    } else {
        pantera.style.border = '5px solid #ff00ff';
    }
})

//segundo ejercicio

const input1 = document.querySelector('.isaac-input');
const input2 = document.querySelector('.isaac-thumb-up-input');
const input3 = document.querySelector('.isaac-pog-input');
const btn = document.querySelector('.verify');
const result = document.querySelector('.result');
const resultNum = document.querySelector('.result-num');



btn.addEventListener('click', () => {

let stickers1 = input1.value;
let stickers2 = input2.value;
let stickers3 = input3.value;

let stickersTotal = Number(stickers1) + Number(stickers2) + Number(stickers3);

    if (stickersTotal <= 10) {
        resultNum.innerHTML = "Usted tiene " + stickersTotal + " stickers, ¡felicidades!"
        console.log(stickersTotal);
    } else {
        result.textContent = "Llevas Demasiados Stickers, ¡No puedes tener más de 10!";
    }

})

//tercer ejercicio

const passwordResult = document.querySelector('.password-result');
const select1 = document.querySelector("#primero")
const select2 = document.querySelector("#segundo")
const select3 = document.querySelector("#tercero")
const btnIngresar = document.querySelector('.ingresar');

btnIngresar.addEventListener('click', () => {

    let psswrd1 = select1.value
    let psswrd2 = select2.value
    let psswrd3 = select3.value

    let password = psswrd1 + psswrd2 + psswrd3

    if (password === "911" || password === "714") {
        passwordResult.innerHTML = "Contraseña Correcta"
    } else {
        passwordResult.innerHTML = "Contraseña Incorrecta"
    }
})