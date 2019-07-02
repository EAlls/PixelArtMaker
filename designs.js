// Select size (height/width) input
function formSubmission() {
    event.preventDefault();
    var h = document.getElementById('inputHeight').value;
    var w = document.getElementById('inputWidth').value;
    makeGrid(h, w);
}

//Click events function for cells
function addClickEventToCells() {
    // Select color input; colorPicker from html
    var cell = document.getElementsByClassName('cell');
    var colorPicker = document.getElementById('colorPicker');
    for (var n = 0; n < cell.length; n++) {
        cell[n].addEventListener('click', function (event) {
            var clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// function to make the canvas ; _N_ by _M_ grid
function makeGrid(h, w) {
    var table = document.getElementById('pixelCanvas');
    var canvas = '';
    for (var n = 0; n < h; n++) {
        canvas += '<tr class="row' + n + '">';
        for (var m = 0; m < w; m++) {
            canvas += '<td class="cell" id="row' + n + 'cell' + m + '"></td>';
        }
        canvas += '</tr>';
    }
    table.innerHTML = canvas;
    addClickEventToCells();
}

//Submit button - submit form
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};
