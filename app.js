var activePlayer = 0;
var score = 0;
var currentScore = 0;
var gameplay = true;
document.querySelector('.dice').style.display = 'none';

function btnRoll(){
    if (gameplay){
        var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    document.querySelector('.dice').style.display = 'block';
    if (dice == 1){
        currentScore = 0;
        document.querySelector('#current-' + String(activePlayer)).textContent = String(currentScore);
        if (activePlayer == 0){
            activePlayer = 1;
        }
        else if (activePlayer == 1){
            activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
    else {
        currentScore = currentScore + dice;
        document.querySelector('#current-' + String(activePlayer)).textContent = String(currentScore);
         }
    }
    
}

function saveScore(){
    if (gameplay){
        score = parseInt(document.querySelector('#score-' + String(activePlayer)).textContent) + currentScore;
    document.querySelector('#score-' + String(activePlayer)).textContent = score;
    currentScore = 0;
    document.querySelector('#current-' + String(activePlayer)).textContent = String(currentScore);
    
    if (parseInt(document.querySelector('#score-' + String(activePlayer)).textContent) >= 100){
        document.querySelector('#name-' + String(activePlayer)).textContent = "WINNER!";
        document.querySelector('.player-current-score').textContent = '0';
        currentScore = 0;
        score = 0;
        gameplay = false;
    }
    else{

        if (activePlayer == 0){
            activePlayer = 1;
        }
            else if (activePlayer == 1){
            activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        }
    

    }

        
}


function newGame(){
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    currentScore = 0;
    score = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    gameplay = true;
}

    document.querySelector('.btn-roll').addEventListener('click',btnRoll);
    document.querySelector('.btn-hold').addEventListener('click',saveScore);
document.querySelector('.btn-new').addEventListener('click',newGame);

