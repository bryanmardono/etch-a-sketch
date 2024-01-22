const defaultColor = '#080808'; //black
const defaultMode = 'color'; 
const defaultGridSize = '16';

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentGridSize = defaultGridSize;

const colorPicker = document.querySelector('colorPicker');
const colorBtn = document.querySelector('colorBtn');
const eraserBtn = document.querySelector('eraserBtn');
const clearBtn = document.querySelector('clearBtn');
const sizeValue = document.querySelector('size-value');
const sizePicker = document.querySelector('size-picker');
const grid = document.querySelector('grid-container');
