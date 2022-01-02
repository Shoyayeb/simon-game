var blue = new Audio("./sounds/blue.mp3");
var green = new Audio("./sounds/green.mp3");
var red = new Audio("./sounds/red.mp3");
var yellow = new Audio("./sounds/yellow.mp3");
var wrong = new Audio("./sounds/wrong.mp3");


const playAudio = (fileName) => {
    fileName.play()
}
const btnClick = (btnColor) => {
    console.log(`${btnColor.id}Audio`);
    playAudio(btnColor.id)

}
// playAudio(blue)
// document.getElementById("blue").addEventListener("click", playAudio);