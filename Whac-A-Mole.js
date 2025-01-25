let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the 3x3 grid game board

    for (let i = 0; i < 9; i++) {  //this makes i go from 0-8 because its LESS THAN 9
        //this will assign each tile an id 0-8
        let tile = document.createElement("div");  // this creates a div in javascript
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000)
}

function getRandomTile() {
    //math.random generates a number between one and nine but does not include 9 - rounding it down with math.floor makes it 1-8
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (gameOver) {
        return;
    }
    
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./assets/monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    
    if (gameOver) {
        return;
    }
    
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./assets/piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    
    if (gameOver) {
        return;
    }
    
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameOver = true;
    }
} 