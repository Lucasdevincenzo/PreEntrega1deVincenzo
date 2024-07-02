//Primera preentrega del proyecto final
alert('Bienvenido , vamos a jugar un juego el cual consiste en adivinar un numero, del 1 al 10, en el cual estoy pensando, buena suerte!')
//Numero que se genera de manera aleatoria que el usuario debe de adivinar 
let secretNumber = Math.floor(Math.random() * 10) + 1;
let adivinaste = false;
//Bucle por si el usuario falla el numero
while (!adivinaste) {
    let guessNumber = parseInt(prompt('Ingrese un numero por favor'));
//isNaN por si el usuario ingresa un numero que no es valido
if (isNaN(guessNumber)) {
    alert('Por favor, ingrese un numero que sea valido >:(');
} else {
    if (guessNumber === secretNumber) {
        alert('Felicidades!, acertaste el numero');
        adivinaste = true;
    let nombre = prompt('ahora como pudiste adivinaste el numero pasame tu cbu que te hare un regalito');
    alert('En serio pensaste que te iba a regalar algo? jajajaj adios!!')
    }
    else if (guessNumber > secretNumber) {
        alert('Casi bro, prueba un numero mas bajo')
    }
    else if (guessNumber < secretNumber) {
        alert('Casi bro, prueba un numero mas alto')
    }
}
}