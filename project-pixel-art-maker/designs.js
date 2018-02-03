function makeGrid() {
    let fillBox = function(input) {
        input.addEventListener('click', function() {
            input.style.backgroundColor = $("#colorPicker").val();
        });
    }

    for (let i = 0; i < $("#inputHeight").val(); i++) {
        let rows = document.getElementById('pixelCanvas').insertRow(i);
        for (let j = 0; j < $("#inputWeight").val(); j++) {
            let cell = rows.insertCell(j);
            cell.addEventListener('click', fillBox(cell));
        }
    }
}

$("#inputSubmit").click(function(event) {
    event.preventDefault();
    makeGrid();
});
