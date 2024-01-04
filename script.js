const board = document.querySelector("#board");


for(let curRow = 0; curRow < 16 ; curRow++){

    let row = document.createElement('div');

    row.className = 'row';

    for(let curCol = 0; curCol < 16; curCol++){

        let tile = document.createElement('div');

        tile.className = 'tile';

        tile.addEventListener("mouseenter", changeColor);

        row.appendChild(tile);

    }

    board.appendChild(row);

}


function changeColor(e){

    e.target.style.background = 'lightpink';

}