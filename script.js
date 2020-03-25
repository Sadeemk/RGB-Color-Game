let colors = generateRandomColors(6);
let numSquares = 6;

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numOfSquares

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}


});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;


	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a new random color
	pickedColor = pickColor();

	//change color display to match
	colorDisplay.textContent = pickedColor;

	//change colors of squares
	for (let i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});


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
			resetButton.textContent = "Play Again?"
			h1.style.background = pickedColor;

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


