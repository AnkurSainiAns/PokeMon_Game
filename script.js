let Game = ["🥷", "🧟‍♂️", "🕷️", "🦂", "🦉", "🐍", "🐘", "🐊", "🦫", "🦔"]
let spaceEl = document.getElementById("space")
let startGameEl = document.getElementById("StartGame")
let fightEl = document.getElementById("Fight")
let resetEl = document.getElementById("Reset")
let resultEl = document.getElementById("result")
startGameEl.addEventListener("click", function () {
    spaceEl.textContent = "click fight to start the game "+"👇"
    resultEl.textContent = ""
})


fightEl.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * Game.length)
    let randomIndex2 = Math.floor(Math.random() * Game.length)

    spaceEl.textContent = Game[randomIndex] + "V/S" + Game[randomIndex2]
    if (randomIndex === randomIndex2) {
        resultEl.textContent = "it's a tie"
    } else if (randomIndex > randomIndex2) {
        resultEl.textContent = Game[randomIndex] + " wins"
    } else {
        resultEl.textContent = Game[randomIndex2] + " wins"
    }
})
resetEl.addEventListener("click", function () {
    spaceEl.textContent = ""
    resultEl.textContent = ""
    randomIndex = null
    randomIndex2 = null
})