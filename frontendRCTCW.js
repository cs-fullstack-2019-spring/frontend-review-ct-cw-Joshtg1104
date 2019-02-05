var gameSpaces = document.querySelectorAll('td');
var currentPlayer = 1;
var i = 0;

//Handler to handle clicks
function clickedSquare(e){
    console.log("Clicked Square");
    console.log(e.target.innerHTML);
    if(currentPlayer === 1 && e.target.innerHTML === "") {
        // console.log("in the if statement");
        e.target.innerHTML = "X";
        alert("Player 2's Turn");
        currentPlayer = 2;
    }
    else if(e.target.innerHTML === ""){
        e.target.innerHTML = "O";
        alert("Player 1's Turn");
        currentPlayer = 1;
    }
    winner();
}

function winner(){
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins");
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        return false;
    }
    else if((gameSpaces[0].innerHTML==="X" &&gameSpaces[1].innerHTML==="O" &&gameSpaces[2].innerHTML==="X")
        &&(gameSpaces[3].innerText==="O" &&gameSpaces[4].innerText==="X" &&gameSpaces[5].innerText==="O")
        &&(gameSpaces[6].innerText==="X" &&gameSpaces[7].innerText==="O" &&gameSpaces[8].innerText==="X")
        &&(gameSpaces[0].innerText==="O" &&gameSpaces[3].innerText==="X" &&gameSpaces[6].innerText==="O")
        &&(gameSpaces[1].innerText==="X" &&gameSpaces[4].innerText==="O" &&gameSpaces[7].innerText==="X")
        &&(gameSpaces[2].innerText==="O" &&gameSpaces[5].innerText==="X" &&gameSpaces[8].innerText==="O")
        &&(gameSpaces[0].innerText==="X" &&gameSpaces[4].innerText==="O" &&gameSpaces[8].innerText==="X")
        &&(gameSpaces[2].innerText==="O" &&gameSpaces[4].innerText==="X" &&gameSpaces[6].innerText==="O")
    ){
        alert("Draw");
        return false;
    }
}
//draw does not show up, I feel like I was close.

// Add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

var newGame = document.querySelector("button");

// newGame.addEventListener("click", function(){
//     console.log("See");
    // newGame.value += gameSpaces[i];
    // if(i <= gameSpaces.length){
    //     i++;
    // }
    // else{
    //     i = 0;
    // }
// });
//EventListener is irrelevant

newGame.onclick= function() {
    for (i in gameSpaces){
        gameSpaces[i].innerHTML= "";
    }
};