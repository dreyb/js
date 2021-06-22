let palette = document.querySelector("input");
let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");

pencil.fillStyle = "white";
pencil.fillRect(0, 0, 600, 400);
pencil.strokeStyle = "black";
pencil.strokeRect(0, 0, 600, 400);

let radius = 10;
let draw = false;

function drawCircle(event) {
  if (draw) {
    let x = event.pageX - screen.offsetLeft;
    let y = event.pageY - screen.offsetTop;
    pencil.fillStyle = palette.value;
    pencil.beginPath();
    pencil.arc(x, y, radius, 0, 2 * 3.14);
    pencil.fill();
  }
  if (event.shiftKey) {
    radius += 10;
  }
  if (event.altKey) {
    radius -= 5;
  }
  if (radius > 40 || radius < 10) {
    radius = 10;
  }
}

screen.onmousemove = drawCircle;

function enableDraw() {
  draw = true;
}

function disableDraw() {
  draw = false;
}

screen.onmousedown = enableDraw;
screen.onmouseup = disableDraw;
