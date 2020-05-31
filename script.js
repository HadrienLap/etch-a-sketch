let grid = document.getElementById('grid');
let refreshButton = document.getElementById('refreshButton');
let blackButton = document.getElementById('drawBlack');
let randomButton = document.getElementById('drawRandom');
let gradientButton = document.getElementById('drawGradient');

// Generate a 16x16 grid on page load 
const gridSize = 480;
let squaresNumber = 256;
generateGrid (squaresNumber);

// Generation of the grid's squares and draw on it
function generateGrid (squaresNumber) {
    // Calcul of the squares sizes (height and width)
    let squaresSizes = gridSize / (Math.sqrt(squaresNumber));

    // Erase preexistent divs
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }

    for (let i = 0; i < squaresNumber; i++){
        let square = document.createElement('div');
        square.style.height = squaresSizes - 2 + 'px';
        square.style.width = squaresSizes - 2 + 'px';
        grid.appendChild(square);
    }

    // Draw function
    drawBG (drawBlack);
}

// Drawing mode selection
blackButton.addEventListener('click', console.log(2)); //function(){drawBG(drawBlack)}
randomButton.addEventListener('click', function(){drawBG(drawRandom)});
gradientButton.addEventListener('click', function(){drawBG(drawGradient)});

// Refresh button function
refreshButton.addEventListener('click', refresh);

function refresh () {
    let gridSize = prompt('how many squares per side?');
    squaresNumber = gridSize * gridSize;
    generateGrid (squaresNumber);
}

// Drawing functions  ---------------------------------------------------------------------------------------------

function drawBG (drawingMode) {
    // Creation of 'squares', an array of all the individual squares
    let squares = Array.from(grid.children);

    // Listen for each item of 'squares' array a mouseenter event
    squares.forEach(square => square.addEventListener('mouseenter', drawingMode));
}

// Change the background color of the target div to black
function drawBlack (e) {
    e.target.style.backgroundColor ="black";
}

// Change the background color of the target div to random color
function drawRandom (e) {
    e.target.style.backgroundColor =`rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
}

function randomColorValue () {
    let colorValue = Math.floor(Math.random()*255);
    return colorValue;
}

// Change the background color of the target div to 10% darker
function drawGradient (e) {
    e.target.style.backgroundColor = 'black';
    let opacity = Number(e.target.style.opacity);
    e.target.style.opacity = opacity + 0.1;
}


// ---------------------------------------------------------------------------------------------