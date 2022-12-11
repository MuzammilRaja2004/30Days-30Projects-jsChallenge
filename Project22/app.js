const canvasEl = document.querySelector("canvas");
const conX = canvasEl.getContext("2d");

canvasEl.height = 400;
canvasEl.width = 400;

// Game Parameters
let speed = 7;
let tileCount = 20;
let snakeHeadX = 10;
let snakeHeadY = 10;
let xV = 0;
let yV = 0;
let snackX = 5;
let snackY = 5;
let snakeTailLength = 2;
let score = 0;

// Derived Dimension
let tileSize = canvasEl.width / tileCount;

// snakeBody Array
const snakeBody = [];

// -------------------------------------------Arrow Jeys Event Listener
document.addEventListener("keydown", keyDown);

const eatSnack = new Audio("eat.wav");

// -------------------------------------------The Game Loop
function playGame() {
  changeSnakePosition();

  // handling gameOver
  let result = gameOver();
  if (result) {
    return;
  }

  clearScreen();
  snackColiDete();
  drawSnack();
  drawSnake();
  drawScore();

  setTimeout(playGame, 1000 / speed);
}
// -------------------------------------------gameOver Function
function gameOver() {
  let gameOver = false;

  if (xV === 0 && yV === 0) return false;

  // checking for wall collision
  if (
    snakeHeadX < 0 ||
    snakeHeadX === tileCount ||
    snakeHeadY < 0 ||
    snakeHeadY === tileCount
  ) {
    gameOver = true;
  }

  // checking the snake body collision
  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    if (part.x === snakeHeadX && part.y === snakeHeadY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    conX.fillStyle = "white";
    conX.font = "50px sans-serif";
    conX.fillText("GAME OVER", canvasEl.width / 8, canvasEl.height / 2);
  }

  return gameOver;
}

// -------------------------------------------drawScore Function
function drawScore() {
  conX.fillStyle = "white";
  conX.font = "15px sans-serif";
  conX.fillText(`Score: ${score}`, 20, 20);
}

// -------------------------------------------clearScreen Function
function clearScreen() {
  conX.fillStyle = "black";
  conX.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

// -------------------------------------------drawSnake Function
function drawSnake() {
  conX.fillStyle = "orange";
  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    conX.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeBody.push(new SnakeBody(snakeHeadX, snakeHeadY));

  if (snakeBody.length > snakeTailLength) {
    snakeBody.shift();
  }

  conX.fillStyle = "green";
  conX.fillRect(
    snakeHeadX * tileCount,
    snakeHeadY * tileCount,
    tileSize,
    tileSize
  );
}

// ------------------------------------------changeSnakePosition Function
function changeSnakePosition() {
  snakeHeadX = snakeHeadX + xV;
  snakeHeadY = snakeHeadY + yV;
}

// ------------------------------------------drawSnack Function
function drawSnack() {
  conX.fillStyle = "red";
  conX.fillRect(snackX * tileCount, snackY * tileCount, tileSize, tileSize);
}

// ------------------------------------------snackColiDete Function

function snackColiDete() {
  if (snackX === snakeHeadX && snackY === snakeHeadY) {
    snackX = Math.floor(Math.random() * tileCount);
    snackY = Math.floor(Math.random() * tileCount);
    snakeTailLength++;
    score++;
    speed++;
    eatSnack.play();
  }
}

// -------------------------------------------keyDown Function
function keyDown(e) {
  // moving up
  if (e.keyCode === 38) {
    if (yV === 1) return;
    yV = -1;
    xV = 0;
  }

  // moving down
  if (e.keyCode === 40) {
    if (yV === -1) return;
    yV = 1;
    xV = 0;
  }

  // moving left
  if (e.keyCode === 37) {
    if (xV === 1) return;
    xV = -1;
    yV = 0;
  }
  // moving right
  if (e.keyCode === 39) {
    if (xV === -1) return;
    xV = 1;
    yV = 0;
  }
}

// ---------------------------The SnakeBody Class
class SnakeBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

playGame();
