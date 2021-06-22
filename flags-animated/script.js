function brazilFlag() {
  let screen = document.querySelector("canvas");
  let pencil = screen.getContext("2d");

  pencil.fillStyle = "green";
  pencil.fillRect(0, 0, 600, 400);

  pencil.fillStyle = "yellow";
  pencil.beginPath();
  pencil.moveTo(300, 50);
  pencil.lineTo(50, 200);
  pencil.lineTo(550, 200);
  pencil.fill();

  pencil.beginPath();
  pencil.moveTo(50, 200);
  pencil.lineTo(300, 350);
  pencil.lineTo(550, 200);
  pencil.fill();

  pencil.fillStyle = "darkblue";
  pencil.beginPath();

  pencil.arc(300, 200, 100, 0, 2 * 3.14);
  pencil.fill();
}

function germanyFlag() {
  let screen = document.querySelector("canvas");
  let pencil = screen.getContext("2d");

  pencil.fillStyle = "black";
  pencil.fillRect(0, 0, 600, 133);

  pencil.fillStyle = "red";
  pencil.fillRect(0, 133, 600, 133);

  pencil.fillStyle = "yellow";
  pencil.fillRect(0, 266, 600, 133);
}

let showBrazil = true;

function flagAlter() {
  if (showBrazil == true) {
    brazilFlag();
    showBrazil = false;
  } else {
    germanyFlag();
    showBrazil = true;
  }
}

setInterval(flagAlter, 3000);
