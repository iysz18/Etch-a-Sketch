document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#gameContainer');

    for (let i = 0; i < 16; i++) {
        // create new div
        const newDiv = document.createElement('div');
        // apply styles to each created div
        newDiv.textContent = `Div: ${i}`;
        newDiv.style.border = '1px solid black';
        newDiv.style.height = '50px';
        newDiv.style.width = '50px';
        parent.appendChild(newDiv);
    }
});
