const canvas = document.querySelector('#canvas');
const generateCanvas = document.querySelector('#genBtn');
const resetCanvas = document.querySelector('#resetBtn');
const colorBtn = document.querySelector('#colorBtn');
const darkeningBtn = document.querySelector('#darkeningBtn');
const eraseBtn = document.querySelector('#eraseBtn');

// generate the canvas 
generateCanvas.addEventListener('click', () => {
    // as security measure, rest the canvas anyways
    canvas.innerHTML = '';
    let usrInput = prompt("Enter a number between 0 - 100");
    // ensure the user's provided value is a number
    if (!isNaN(usrInput) && (Number(usrInput) <= 400)) {
        let gridSize = parseInt(usrInput);
        createGrid(gridSize);
    } else alert('Provided value is not a number or exceeds the limit.');
});

// progressively change the darkening of a pixel by 10%


// erase button to remove coloring of each pixel
eraseBtn.addEventListener('click', () => {
    canvas.childNodes.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
});


// color button logic, choose color to change the pixel
colorBtn.addEventListener('click', () => {
    let color = prompt("You can enter any color or 'rgb' for rgb random output.");
    color = color.toLocaleLowerCase();
    
    canvas.childNodes.forEach( (pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (color !== 'rgb') pixel.style.backgroundColor = `${color}`;
            else {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const rgbColor = `rgb(${red}, ${green}, ${blue})`;
                pixel.style.backgroundColor = `${rgbColor}`;
            }
        });
    });
});


// reset button lgoic, clear the canvas
resetCanvas.addEventListener('click', () => {
    canvas.innerHTML = '';
})


// create the grid witht the size the user provided
function createGrid(gridSize) {
    const pixelSize = (960 / gridSize);
    for (let i = 0; i < gridSize; i++)  {
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div');
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
            pixel.classList.add('pixel');
            canvas.appendChild(pixel);
        }
    }
}

