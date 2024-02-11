const canvas = document.querySelector('#canvas')

// prmompt for the size of the desired grid
const gridSize = prompt('Enter grid size: ');
if (gridSize > 100) gridSize = 99;

for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
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


// 
canvas.style.height = (gridSize * 25) + 'px';
canvas.style.width = (gridSize * 25) + 'px';
