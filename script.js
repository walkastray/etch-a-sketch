const changeSize = document.querySelector("#btnWidth");

changeSize.addEventListener('click', promptAndChangeSize);
GenerateBoard(16, "50px");

function GenerateBoard(tiles, size){

    const board = document.querySelector("#board");
    board.innerHTML = "";

    for(let curRow = 0; curRow < tiles ; curRow++){

        let row = document.createElement('div');
    
        row.className = 'row';
    
        for(let curCol = 0; curCol < tiles; curCol++){
    
            let tile = document.createElement('div');
    
            tile.className = 'tile';
            tile.style.width = size;
            tile.style.height = size;
    
            tile.addEventListener("mouseenter", changeColor);
    
            row.appendChild(tile);
    
        }
    
        board.appendChild(row);
    
    }

}


function changeColor(e){

    e.target.style.background = 'lightpink';

}

function promptAndChangeSize(){
    const numOfTiles = parseInt(prompt("Enter size of grid from 1 - 100"));

    if(numOfTiles <= 100 && numOfTiles >= 1){

        const newBoard = document.querySelector('#board');
        let boardWidth = getComputedStyle(newBoard).getPropertyValue('width');
        let sizeOfTile = parseInt(boardWidth) / numOfTiles;
    
        console.log(sizeOfTile);
        GenerateBoard(numOfTiles, `${sizeOfTile}px`);
    } else {

        alert("Invalid size. Only between 1 - 100");

    }

}