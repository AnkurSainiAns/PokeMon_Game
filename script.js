let Game = [`<img src="img/bhediya.png" alt="bhediya" width="100px">`,`<img src="img/bichu.png" alt="bichu" width="100px">`,`<img src="img/bull.png" alt="bull" width="100px">`,`<img src="img/chuso.png" alt="chuso" width="100px">`,`<img src="img/gorila.png" alt="gorila" width="100px">`,`<img src="img/hathi.png" alt="hathi" width="100px">`,`<img src="img/jaau.png" alt="jaau" width="100px">`,`<img src="img/kil.png" alt="kil" width="100px">`,`<img src="img/ki.png" alt="ki" width="100px">`,`<img src="img/kilkat.png" alt="kilkat" width="100px">`,`<img src="img/killkat.png" alt="killkat" width="100px">`,`<img src="img/lakad.png" alt="lakad" width="100px">`,`<img src="img/octo.png" alt="octo" width="100px">`,`<img src="img/sap.png" alt="sap" width="100px">`]
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

    spaceEl.innerHTML = Game[randomIndex] + "V/S" + Game[randomIndex2]
    if (randomIndex === randomIndex2) {
        resultEl.innerHTML = "it's a tie"
    } else if (randomIndex < randomIndex2) {
        resultEl.innerHTML = Game[randomIndex] + " wins"
    } else {
        resultEl.innerHTML = Game[randomIndex2] + " wins"
    }
})
resetEl.addEventListener("click", function () {
    spaceEl.textContent = ""
    resultEl.textContent = ""
    randomIndex = null
    randomIndex2 = null
})