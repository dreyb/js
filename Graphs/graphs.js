let series2015 = [50, 25, 20, 5];
let series2016 = [65, 20, 13, 2];
let colors = ["blue", "green", "yellow", "red"];

function drawRect(x, y, width, height, color) {
  let screen = document.querySelector("canvas");
  let pencil = screen.getContext("2d");

  pencil.fillStyle = color;
  pencil.fillRect(x, y, width, height);
  pencil.strokeStyle = "black";
  pencil.strokeRect(x, y, width, height);
}

function drawText(x, y, text) {
  let screen = document.querySelector("canvas");
  let pencil = screen.getContext("2d");

  pencil.font = "15px Georgia";
  pencil.fillStyle = "black";
  pencil.fillText(text, x, y);
}

function drawGraph(x, y, series, color, text) {
  drawText(x, y - 10, text);
  let plusHeight = 0;
  for (let i = 0; i < series.length; i++) {
    let height = series[i];
    drawRect(x, y + plusHeight, 50, height, colors[i]);
    plusHeight = plusHeight + height;
  }
}

drawGraph(50, 50, series2015, colors, "2015");
drawGraph(150, 50, series2016, colors, "2016");
