const canvas = document.querySelector('#canvas');
const generateCanvas = document.querySelector('#genBtn');
const resetCanvas = document.querySelector('#resetBtn');
const colorBtn = document.querySelector('#colorBtn');


// generate the canvas 
generateCanvas.addEventListener('click', () => {
    // as security measure, rest the canvas anyways
    canvas.innerHTML = '';
    let usrInput = prompt("Enter a number between 0 - 100");
    // ensure the user's provided value is a number
    if (!isNaN(usrInput) && (Number(usrInput) <= 100)) {
        let gridSize = parseInt(usrInput);
        createGrid(gridSize);
    } else alert('Provided value is not a number or exceeds the limit.');
});


// color button logic, choose color to change the pixel
colorBtn.addEventListener('click', () => {
    let color = prompt("Enter color");
    
    canvas.childNodes.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = `${color}`;
        });
    })
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

