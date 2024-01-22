const defaultColor = '#080808'; //black
const defaultMode = 'color'; 

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentDivSize;
let currentClassName;

const colorPicker = document.querySelector('.colorPicker');
const colorBtn = document.querySelector('.colorBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const clearBtn = document.querySelector('.clearBtn');
const sizeValue = document.querySelector('.size-value');
const sizePicker = document.querySelectorAll('.circle');
const grid = document.querySelector('.grid-container');

function setColor(newColor) {
    currentColor = newColor;
}

function setMode(newMode) {
    currentMode = newMode;
}

colorPicker.oninput = (e) => setColor(e.target.value); //change currentColor to whatever is chosen in the color picker
colorBtn.onclick = () => setMode('color'); //changes currentMode to color
eraserBtn.onclick = () => setMode('eraser');

//function to create grids (div creation by for loop)
function generateGrid(divSize = 16*16, className = 'grid-16') {
    grid.innerHTML = '';
    for (let i = 0; i < divSize; i+=1) {
        const gridDiv = document.createElement('div');
        //className is needed to determine number of grid columns in css through grid-template-columns
        gridDiv.classList.remove('grid-8', 'grid-16', 'grid-32');
        gridDiv.classList.add(className);
        grid.appendChild(gridDiv);
    }
    currentDivSize = divSize;
    currentClassName = className;
}

//function to choose grid size by clicking on the size picker buttons
function chooseGrid() {
    sizePicker.forEach((button) => {
        button.addEventListener('click', () => {
            //active class needs to be removed to reset button styling to default
            button.classList.remove('active');
            if (button.id == "grid-8") {
                sizePicker[0].classList.add('active');
                generateGrid(8*8, 'grid-8');
            } else if (button.id == "grid-16") {
                sizePicker[1].classList.add('active');
                generateGrid(16*16, 'grid-16');
            } else if (button.id == "grid-32") {
                sizePicker[2].classList.add('active');
                generateGrid(32*32, 'grid-32');
            }
        });
    });
}

function colorGrid() {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

function reloadGrid() {
    generateGrid(currentDivSize, currentClassName);
}

clearBtn.onclick = () => reloadGrid();

document.addEventListener('DOMContentLoaded', () => {
    chooseGrid();
    generateGrid();
});