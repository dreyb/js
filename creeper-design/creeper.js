let screen = document.querySelector("canvas");
let pencil = screen.getContext("2d");

//head
pencil.fillStyle = "darkgreen";
pencil.fillRect(200, 50, 350, 300);

//eyes
pencil.fillStyle = "black";
pencil.fillRect(250, 110, 90, 90);
pencil.fillRect(410, 110, 90, 90);

//nose
pencil.fillRect(340, 200, 70, 100);

//mouth
pencil.fillRect(300, 240, 40, 110);
pencil.fillRect(410, 240, 40, 110);
