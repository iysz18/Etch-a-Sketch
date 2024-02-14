const canvas = document.querySelector('#canvas');
const generateCanvas = document.querySelector('#genBtn');
const resetCanvas = document.querySelector('#resetBtn');


// reset the canvas with the rest button
resetCanvas.addEventListener('click', () => {
    canvas.innerHTML = '';
});


// generate the canvas 
generateCanvas.addEventListener('click', () => {
    // as security measure, rest the canvas anyways
    canvas.innerHTML = '';
    let usrInput = prompt("Enter a number up to 100:");
    // ensure the user's provided value is a number
    if (!isNaN(usrInput) && (Number(usrInput) <= 100)) {
        let gridSize = parseInt(usrInput) + 1;
        createGrid(gridSize);
    } else alert('Provided value is not a number or exceeds the limit.');
});


// create the grid witht the size the user provided
function createGrid(gridSize) {
    const pixelSize = (960 / gridSize);
    for (let i = 0; i < gridSize; i++)  {
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.style.width = `${pixelSize}px`
            pixel.style.height = `${pixelSize}px`
            pixel.classList.add('pixel');

            // add event listener to change color of each pixel
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = 'black';
            });
            
            canvas.appendChild(pixel);
        }
    }
}