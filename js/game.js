// all the references to DOM nodes
const canvas = document.querySelector('#canvas')
const btnX = document.querySelector('.dimensionBtn');
const btnY = document.querySelector('.dimensionBtn');


let gridX = 0;
let gridY = 0;
btnX.addEventListener('click', () => {
    gridX = prompt('Enter desired X-dimension: ');
});
btnY.addEventListener('click', () => {
    gridY = prompt('Enter desired Y-dimension: ');
});


for (let row = 0; row < gridX; row++) {
    for (let column = 0; column < gridY; column++) {
        // create the pixel and style it accordingly
        const pixel = document.createElement('div');
        pixel.style.height = '25px';
        pixel.style.width = '25px';
        pixel.style.border = '1px solid transparent';
        pixel.style.boxSizing = 'border-box';
        canvas.appendChild(pixel);

        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'grey';
        });
    }
}


// create the grid
canvas.style.height = (gridX * 25) + 'px';
canvas.style.width = (gridY * 25) + 'px';
