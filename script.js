let colors = [];
let numSquares = 6;
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	setModeButtonListeners();

	//set up square button listeners
	setUpSquares();

	//reset
	reset();
}

function setModeButtonListeners(){
	for (let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (let i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//get color of clicked square
			let clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct"
				changeColors(pickedColor);
				resetButton.textContent = "Play Again?"
				h1.style.background = pickedColor;

			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a new random color
	pickedColor = pickColor();

	//change color display to match
	colorDisplay.textContent = pickedColor;

	//change colors of squares
	for (let i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color) {
	for (let i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num){
	//make array
	let arr = []

	//add specified num of colors to the array
	for (let i = 0; i < num; i++){
		let randomRed = Math.floor(Math.random() * 256);
		let randomGreen = Math.floor(Math.random() * 256);
		let randomBlue = Math.floor(Math.random() * 256);
		arr[i] = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
	}

	//return the array
	return arr;
}