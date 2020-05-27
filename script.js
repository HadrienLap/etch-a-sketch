let grid = document.getElementById('grid');

for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.textContent = i;
    grid.appendChild(square);
}
