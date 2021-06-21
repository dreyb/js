let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");

pencil.fillStyle = "grey";
pencil.fillRect(0, 0, 600, 400);

let color = ["blue", "red", "green"];
let colorNow = 0; //starts with blue

alert("To change your brush's color, please right-click with your mouse.");

function drawCircle(event) {
  let x = event.pageX - screen.offsetLeft;
  let y = event.pageY - screen.offsetTop;
  pencil.fillStyle = color[colorNow];
  pencil.beginPath();
  pencil.arc(x, y, 10, 0, 2 * 3.14);
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
