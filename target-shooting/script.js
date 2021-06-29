let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");
pencil.strokeStyle = "black";
pencil.strokeRect(0, 0, 600, 400);

let radius = 10;
let xRandom = randomPosition(600);
let yRandom = randomPosition(400);

function circleDraw(x, y, radius, color) {
  pencil.fillStyle = color;
  pencil.beginPath();
  pencil.arc(x, y, radius, 0, 2 * Math.PI);
  pencil.fill();
}

function clearScreen() {
  pencil.clearRect(0, 0, 600, 400);
}

function targetDraw(x, y) {
  circleDraw(x, y, radius + 20, "red");
  circleDraw(x, y, radius + 10, "white");
  circleDraw(x, y, radius, "red");
}

function randomPosition(max) {
  return Math.floor(Math.random() * max);
}

function screenUpdate() {
  clearScreen();

  xRandom = randomPosition(600);
  yRandom = randomPosition(400);

  targetDraw(xRandom, yRandom);
}

setInterval(screenUpdate, 1000);

function shoot(event) {
  let x = event.pageX - screen.offsetLeft;
  let y = event.pageY - screen.offsetTop;

  if (x > xRandom - radius && x < xRandom + radius && y > yRandom - radius && y < yRandom + radius) {
    alert("Hit!");
  }
}

screen.onclick = shoot;
