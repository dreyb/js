let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");

pencil.fillStyle = "grey";
pencil.fillRect(0, 0, 600, 400);

let color = ["blue", "red", "green"];
let colorNow = 0; //starts with blue

alert("To change your brush's color, please right-click with your mouse.");

let radius = 10;

function drawCircle(event) {
  let x = event.pageX - screen.offsetLeft;
  let y = event.pageY - screen.offsetTop;
  if (event.shiftKey) {
    radius += 10;
  }
  if (event.altKey) {
    radius -= 5;
  }
  if (radius > 40 || radius < 10) {
    radius = 10;
  }
  pencil.fillStyle = color[colorNow];
  pencil.beginPath();
  pencil.arc(x, y, radius, 0, 2 * 3.14);
  pencil.fill();
  console.log(x + "," + y);
}

screen.onclick = drawCircle;

function colorChange() {
  colorNow++;
  if (colorNow >= color.length) {
    colorNow = 0;
  }
  alert("Color changed.");
  return false;
}

screen.oncontextmenu = colorChange;
