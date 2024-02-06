// grabing elements
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const highscorep2 = document.querySelector(".highscore2");
const dicescore = document.querySelector(".score");
let player1style = document.querySelector(".player0");
let score = document.querySelector(".style");
let player2style = document.querySelector(".player1");
let newgame = document.querySelector(".new-game");
let rules = document.querySelector(".rules");


// declaring elements
let activePlayer = 0;
let currentscore = 0;
let scoreofboth = [0, 0];
let playing = true;

document.querySelector(".new-game").addEventListener("click", function () {
    document.location.reload();

})
document.querySelector(".rules-btn").addEventListener("click", function () {
    rules.classList.toggle("hidden");
})
document.querySelector(".player1").classList.remove("win");


// functions
function win() {
    if (scoreofboth[activePlayer] >= 100) {
        playing = false;
        dicescore.classList.add("hidden");
        document.querySelector(`.player${activePlayer}`).classList.add("win");
        document.querySelector(`.winning${activePlayer}`).classList.remove(`winning${activePlayer}`);
        console.log(`player${activePlayer} wins`);
    }
}

function eule() {
    currentscore = 0;
    document.getElementById(`p${activePlayer}`).textContent = currentscore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1style.classList.toggle("active--player")
    player2style.classList.toggle("active--player")
}

// evenhandler
roll.addEventListener("click", function () {
    if (playing) {

        let random = Math.trunc(Math.random() * 6) + 1;
        dicescore.classList.remove("hidden");
        dicescore.textContent = random;
        if (random !== 1) {
            currentscore += random;
            document.getElementById(`p${activePlayer}`).textContent = currentscore;
        }
        else {
            eule();
        }
    }
})


hold.addEventListener("click", function () {
    if (playing) {
        scoreofboth[activePlayer] += currentscore;
        document.querySelector(`.highscore${activePlayer}`).textContent = "score:" + scoreofboth[activePlayer];
        win();
        eule();

    }

})