var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");

            //this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;

            if (this.textContent === "Easy") {
                numOfSquares = 3;
            }
            else if (this.textContent === "Medium") {
                    numOfSquares = 6;
            }
            else {
                   numOfSquares = 9;
                 }
            
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";

                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again!";
            };
        });
    }
}

function reset() {
    colors = generateRandomColor(numOfSquares);
    pickedColor = randomRGB();
    pickedColorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors?";

    message.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    };
    h1.style.backgroundColor = "steelBlue";
}



//easyBtn.addEventListener("click", function () {
//    message.textContent = "";
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");

//    numOfSquares = 3;
//    colors = generateRandomColor(numOfSquares);
//    pickedColor = randomRGB();
//    pickedColorDisplay.textContent = pickedColor;

//    for (var i = 0; i < squares.length; i++) {
//        if (colors[i]) {
//            squares[i].style.backgroundColor = colors[i];
//        }
//        else {
//            squares[i].style.display = "none";
//        }
//    };
//});

//hardBtn.addEventListener("click", function () {
//    message.textContent = "";
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");

//    numOfSquares = 6;
//    colors = generateRandomColor(numOfSquares);
//    pickedColor = randomRGB();
//    pickedColorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++) {
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//    };
//});

resetButton.addEventListener("click", function () {
    reset();
});





function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    };
};

function randomRGB() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(ramdomColor())
    }
    return arr;
}

function ramdomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
