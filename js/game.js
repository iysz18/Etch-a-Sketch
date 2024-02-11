// user input must be less or equal to 100
const gridSize = prompt('Enter desired canvas grid (must be less than 100): ');
if (gridSize > 100) gridSize = 99
alert('Grid size is 99, you entered a size over 100!');

/* get the reference to '#gameContainer */
const canvas = document.querySelector('#canvas');

/* create the 16x16 grid */
for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
        const pixel = document.createElement('div');
        // apply css styles to the recent created div (pixel)
        pixel.style.height = '25px';
        pixel.style.width = '25px';
        pixel.style.border = '1px solid transparent';
        pixel.style.boxSizing = 'border-box';
        canvas.appendChild(pixel);

        // add for the recent created div (pixel) the 'mouseover' event
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'grey';
        });
    }
}