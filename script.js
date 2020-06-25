const grid = document.getElementById('grid');
const buttons = document.querySelectorAll('button');
const gridSize = 600;
let squaresNumber = '';
let selectedMode = '';

// Generate a 50x50 grid on page load 
generateGrid(2500);

// Generation of the grid's squares
function generateGrid (squaresNumber) {
    // Calcul of the squares sizes (height and width)
    let squaresSizes = gridSize / (Math.sqrt(squaresNumber));
    // Erase preexistent divs
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
    // Create the grid's squares
    for (let i = 0; i < squaresNumber; i++){
        let square = document.createElement('div');
        square.style.height = squaresSizes + 'px';
        square.style.width = squaresSizes + 'px';
        grid.appendChild(square);
    }
    selectedMode = 'drawBlack';
    buttonBackground();
    drawBG();
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'refreshButton') {
            let gridSize = prompt('How many squares per side would you like?');
            while (gridSize > 100) { gridSize = prompt('Choose a size smaller than 100')};
            generateGrid(gridSize * gridSize);   
        } else {
            selectedMode = e.target.id;
            buttonBackground();
        }
    });
}); 

function drawBG () {
    let squares = Array.from(grid.children);
    squares.forEach(square => square.addEventListener('mouseenter', (e) => {
        switch (selectedMode) {
            case 'drawBlack':
                e.target.style.backgroundColor ="black";
                e.target.style.opacity = 1;
                break;
            case 'drawRandom':
                e.target.style.backgroundColor =`rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
                e.target.style.opacity = 1;
                break;
            case 'drawGradient': 
                e.target.style.backgroundColor = 'black';
                let opacity = Number(e.target.style.opacity);
                e.target.style.opacity = opacity + 0.1;
                break;
            case 'erase':
                e.target.style.backgroundColor = 'white';
                e.target.style.opacity = null;
        };
    }));
}

function randomColorValue () {
    return Math.floor(Math.random()*255);
}

function buttonBackground () {
    buttons.forEach(button => {
        if (button.id === selectedMode) {
            button.classList.add('selectedButton');
        } else button.classList.remove('selectedButton');
    });
}