
//getting interactive elements the butttons in header and divs in game-cell
const statusHead = document.querySelectorAll('.header-button');
const gameCells = document.querySelectorAll('.game-cell');
const gameGrid = document.querySelector('.game-grid');
const footer = document.querySelector('.footer button');


//game variables
let xIsNext = true;
let isLive = true;
let xWins = 0;
let oWins = 0;
let winner = null;

//functions for eventhandlers
const move = (e) =>{
  if(e.target.innerHTML==='X' || e.target.innerHTML==='O' || !isLive){
    return;
  }

  if(xIsNext){
    e.target.innerHTML= 'X';
    if(isWinner('X')){
      statusHead[0].innerHTML = `X  :   ${xWins}`;
      statusHead[1].innerHTML = 'X Wins';


    }
  }else{
    e.target.innerHTML= 'O';
    if(isWinner('O')){
      statusHead[0].innerHTML = 'O Wins';
      statusHead[1].innerHTML = `O  :   ${oWins}`;
    }
  }
  if(isLive)
    xIsNext=!xIsNext;

}

const restart = (e) =>{
  for(const cellDiv of gameCells){
    cellDiv.innerHTML = '';
  }
  xIsNext=true;
  isLive = true;
  statusHead[0].innerHTML = `X  :   ${xWins}`;
  statusHead[1].innerHTML = `O  :   ${oWins}`;
}

//eventhandlers
for(const cellDiv of gameCells){
  cellDiv.addEventListener('click', move);
}
footer.addEventListener('click',restart);

//functions


const isWinner =(p)=> ////if p wins return true
{
  let N = 9;
  let boardCopy = [...gameCells];
    for (let i = 0; i < N; i = i + 3)
    {
        if (
            boardCopy[i].innerHTML === p &&
            boardCopy[i + 1].innerHTML === p &&
            boardCopy[i + 2].innerHTML === p
           )
        {
          winner=p;
          winner === 'X' ? xWins++ : oWins++;
          isLive=false;
          return true;
        }
    }
    for (let i = 0; i < N - 6; i++)
    {
        if (
            boardCopy[i].innerHTML === p &&
            boardCopy[i + 3].innerHTML === p &&
            boardCopy[i + 6].innerHTML === p
           )
        {
            
          winner=p;
          winner === 'X' ? xWins++ : oWins++;
          isLive=false;
          return true;
        }
    }
    if (
        boardCopy[0].innerHTML === p &&
        boardCopy[4].innerHTML === p &&
        boardCopy[8].innerHTML === p
       )
    {
      winner=p;  
          isLive=false;
          winner === 'X' ? xWins++ : oWins++;
          return true;
    }
    if (
        boardCopy[2].innerHTML === p &&
        boardCopy[4].innerHTML === p &&
        boardCopy[6].innerHTML === p
       )
    {
      winner=p;
          winner === 'X' ? xWins++ : oWins++;
          isLive=false;
          return true;
    }
    return false;
}



