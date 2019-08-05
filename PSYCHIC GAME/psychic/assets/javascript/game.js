//arrays of keywords 

var Keyword = ["mountain",
    "river",
    "sky",
    "tree",
    "woods"]
//loop through keyword
for (vari = 0; i < Keyword.length; i++) {
    document.write("You're correct!")
}
//start scores 
var score = 0

//===functions ==
function updateScore() {
    document.querySelector("#score").innerHTML = "Wins:" + score;
}

//calling functions to start the game. 
updateScore();


// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();

    // If the letter is h, run the following functions/methods.
    if (letter === "mountain") {
        car.honk();
        updateScore();
    }

    // If the letter is d, run the following functions/methods.
    if (letter === "river") {
        car.driveToWork();
        updateScore();
    }

    // If the letter is w, run the following functions/methods.
    if (letter === "sky") {
        car.driveAroundWorld();
        updateScore();
    }

    // If the letter is t, run the following functions/methods.
    if (letter === "tree") {
        car.getTuneUp();
        updateScore();
    }
};
