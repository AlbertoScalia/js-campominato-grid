// Assegno una costante all'elemento container
const squareContainer = document.querySelector('.container');

//Assegno una costante all'elemento bottone
const btnClick = document.getElementById('play');

// Creo un addEventListener legato al click del bottone
btnClick.addEventListener('click', function () {
    //A ogni clicco del bottone evito di creare altre celle
    squareContainer.innerHTML = '';
    //Creo il ciclo che genererà la griglia con le cento celle 
    let i = 1
    while (i <= 100) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.innerHTML = `${i}`;
        squareContainer.append(squareElement);
        i++;
    }
})


















