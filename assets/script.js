// Fixed number of square
const numOfSquare = 100;
const container = document.querySelector('.container');

// For loop

for (let i = 1; i <= numOfSquare; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
        container.innerHTML = container.innerHTML + `<div class="square fizz">Fizz</div>`;
    }
    else {
        console.log(i);
        container.innerHTML = container.innerHTML + `<div class="square">${i}</div>`;
    }   
}



