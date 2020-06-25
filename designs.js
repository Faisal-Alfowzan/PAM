// Select color input
// Select size input
const color = document.getElementById('colorPicker');
const rowsNum = document.getElementById('inputHeight');
const cloumnsNum = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(evt) {
    table.innerHTML = '';
    evt.preventDefault();
    makeGrid();
});

table.addEventListener('click', function(evt) {
    if (evt.target.nodeName === 'TD') {
        evt.target.style.backgroundColor = color.value;
    }
});

/* This function will receieve the height and the width which user asked for,
based on that it will build the table*/
function makeGrid() {
    // Your code goes here!
    for (let i = 0; i < rowsNum.value; i++) {
        const row = table.insertRow(0);
        for (let j = 0; j < cloumnsNum.value; j++) {
            row.insertCell(0);
        }
    }
}