function initGame(){
    var name = prompt("What's your username??");
    var h1 = document.createElement("h1");
    var startGame = document.createTextNode(name + " is choosing ...");
    
    h1.setAttribute("id", "wait-text");
    h1.appendChild(startGame);

    document.getElementById("wait-txt").appendChild(startGame);
    document.getElementById("starting-btn").remove();

    var buttonDiv = document.getElementById("rock-paper-scissor");
    buttonDiv.setAttribute("class", "rock-paper-scissor-btn");
    
    var RockButton = document.createElement("input");
    var PaperButton = document.createElement("input");
    var ScissorsButton = document.createElement("input");
    
    RockButton.setAttribute("class", "rock-paper-scissor-btn");
    PaperButton.setAttribute("class", "rock-paper-scissor-btn");
    ScissorsButton.setAttribute("class", "rock-paper-scissor-btn");

    RockButton.setAttribute("type", "image");
    PaperButton.setAttribute("type", "image");
    ScissorsButton.setAttribute("type", "image");

    RockButton.setAttribute("onclick", "shoot('R')");
    PaperButton.setAttribute("onclick", "shoot('P')");
    ScissorsButton.setAttribute("onclick", "shoot('S')");

    RockButton.setAttribute("src", "img/rock.png");
    PaperButton.setAttribute("src", "img/paper.png");
    ScissorsButton.setAttribute("src", "img/scissors.png");

    document.getElementById("rock-paper-scissor").appendChild(RockButton);
    document.getElementById("rock-paper-scissor").appendChild(PaperButton);
    document.getElementById("rock-paper-scissor").appendChild(ScissorsButton);

}

function shoot(usrInp){
    var cpuShoot = Math.floor(Math.random()*3);
    //0 -> Rock
    //1 -> Paper
    //2 -> Scissors
    if(usrInp == "R"){
        if(cpuShoot == 0){
            nextMove("D");
        } else if(cpuShoot == 1){
            nextMove("L");
        } else{
            nextMove("W");
        }
    } else if(usrInp == "P"){
        if(cpuShoot == 0){
            nextMove("W");
        } else if(cpuShoot == 1){
            nextMove("D");
        } else{
            nextMove("L");
        }
    } else{
        if(cpuShoot == 0){
            nextMove("L");
        } else if(cpuShoot == 1){
            nextMove("W");
        } else{
            nextMove("D");
        }
    }
    console.log(cpuShoot)
}

function remove_all(){
    document.getElementById("rock-paper-scissor").remove();
    document.getElementById("wait-txt").remove();
}

function nextMove(winner){
    var h1 = document.createElement("h1");
    var playAgain = document.createElement("button");
    var buttonDiv = document.createElement("div");



    if(winner == "D"){
        var finalMsg = document.createTextNode("ISSA DRAW");
    } else if(winner == "W"){
        var finalMsg = document.createTextNode("YOU WIN!!!!");
    } else{
        var finalMsg = document.createTextNode("TAKE THAT L");
    }

    h1.setAttribute("id", "wait-text");
    h1.setAttribute("class", "final-title");
    h1.appendChild(finalMsg);

    buttonDiv.setAttribute("id", "playAgain");
    buttonDiv.setAttribute("class", "main-btn");
    document.getElementById("final-msg").appendChild(buttonDiv);

    var msg = document.createTextNode("Play again");
    playAgain.setAttribute("class", "btn btn-danger");
    playAgain.setAttribute("id", "starting-btn");
    playAgain.setAttribute("onclick", "reload_pg()");
    playAgain.appendChild(msg);

    document.getElementById("final-msg").appendChild(h1);
    document.getElementById("playAgain").appendChild(playAgain);
    document.getElementById("rock-paper-scissor").remove();
    document.getElementById("wait-txt").remove();

}

function reload_pg(){
    location.reload();
}
