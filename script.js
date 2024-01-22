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
const size8 = document.getElementById('grid-8');
const size16 = document.getElementById('grid-16');
const size32 = document.getElementById('grid-32');
const grid = document.querySelector('.grid-container');

function setColor(newColor) {
    currentColor = newColor;
}

function setMode(newMode) {
    currentMode = newMode;
}

function colorChange() {
    colorPicker.addEventListener('input', (e) => {
        setColor(e.target.value);
    })
    colorGrid(currentColor);
}

function eraseColor() {
    eraserBtn.addEventListener('click', () => {
        currentColor = '#ededed'
    })
    colorGrid(currentColor);
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
        grid.classList.remove('grid-8', 'grid-16', 'grid-32');
        grid.appendChild(gridDiv);
        grid.classList.add(className);
    }
    currentDivSize = divSize;
    currentClassName = className;
}

//function to choose grid size by clicking on the size picker buttons
function chooseGrid() {
    size8.addEventListener('click', () => {
        size8.classList.add('active');
        size16.classList.remove('active');
        size32.classList.remove('active');
        reloadGrid();
        generateGrid(8 * 8, 'grid-8');
        colorGrid(currentColor);
    });
    size16.addEventListener('click', () => {
        size8.classList.remove('active');
        size16.classList.add('active');
        size32.classList.remove('active');
        reloadGrid();
        generateGrid(16 * 16, 'grid-16');
        colorGrid(currentColor);

    });
    size32.addEventListener('click', () => {
        size8.classList.remove('active');
        size16.classList.remove('active');
        size32.classList.add('active');
        reloadGrid();
        generateGrid(32 * 32, 'grid-32');
        colorGrid(currentColor);
    });
}

function colorGrid(color) {
    const gridItem = document.querySelectorAll('.grid-container > div');
    gridItem.forEach((item) => {
        if (currentMode = 'color') {
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = color;
            })
        } else if (currentMode = 'eraser') {
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = '#ededed';
            })
        }   
    })
}

function reloadGrid() {
    generateGrid(currentDivSize, currentClassName);
}

function clearGrid() {
    reloadGrid();
    colorGrid(currentColor);
}

clearBtn.onclick = () => clearGrid();

document.addEventListener('DOMContentLoaded', () => {
    chooseGrid();
    generateGrid();
    colorGrid(currentColor);
});