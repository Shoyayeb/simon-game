var blue = new Audio("./sounds/blue.mp3");
var green = new Audio("./sounds/green.mp3");
var red = new Audio("./sounds/red.mp3");
var yellow = new Audio("./sounds/yellow.mp3");
var wrong = new Audio("./sounds/wrong.mp3");


const playAudio = (file) => {
    file.play();
}
const wrongClick = () => {
    playAudio(wrong)
}
const btnClick = (btnColor) => {
    playAudio(btnColor)
}

document.onkeypress = () => {
    document.getElementById("level-title").innerText("hi")
}
// playAudio(blue)
// document.getElementById("blue").addEventListener("click", playAudio);