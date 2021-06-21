let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");

//background
pencil.fillStyle = "green";
pencil.fillRect(0, 0, 600, 400);

//yellow diamond
pencil.fillStyle = "yellow";
pencil.beginPath();
pencil.moveTo(300, 50);
pencil.lineTo(50, 200);
pencil.lineTo(550, 200);
pencil.lineTo(300, 50);
pencil.fill();
pencil.beginPath();
pencil.moveTo(300, 350);
pencil.lineTo(50, 200);
pencil.lineTo(550, 200);
pencil.lineTo(300, 350);
pencil.fill();

//blue circle
pencil.fillStyle = "darkblue";
pencil.beginPath();
pencil.arc(300, 200, 100, 0, 2 * 3.14);
pencil.fill();
