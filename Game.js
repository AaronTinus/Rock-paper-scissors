/* This is the code for the logic of the game itself  */
/* This is the function to define the game */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;/* declaring the variabes for score and moves */
    let moves = 0;
    
  
  
    /* This is the function created to play the game */ 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
          
        /*  Function to start playing game */
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = ` ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                /*  Function to check who wins */
                winner(this.innerText,computerChoice)
                  
                /*  Calling gameOver function after 10 moves */
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
     /* Function to decide winner */
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        /* If and elsse statements to determine the winner of each round  */
        if(player === computer){
            result.textContent = 'It\'s a Draw'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Wins'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Wins';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Wins';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
     /* Function to run when game is over */
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  /* if and else statements to determine what to display at the end of the game */
        if(playerScore > computerScore){
            result.style.fontSize = '2.5rem';
            result.innerText = 'You Win The Game' 
            result.style.color = 'chartreus';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2.5rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2.5rem';
            result.innerText = 'It\'s a Draw';
            result.style.color = 'blueviolet'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    
  
    /*  Calling playGame function inside game */
    playGame();
      
}
  
/*  Calling the game function */
game();

