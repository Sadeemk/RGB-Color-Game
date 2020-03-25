let colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
	//adding initial colors to squares
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		//get the color of the square that was picked
		let clickedColor = this.style.background;

		//compare clickedColor to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct"
			changeColors(pickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color) {
	for (let i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];

}
