function moveButton(x) {
    marginX = Math.floor(Math.random() * 600);
    marginY = Math.floor(Math.random() * 600);

    x.style.margin = marginY.toString() + 'px ' + marginX.toString() + 'px';
}

function showMessage() {
var message = document.getElementById("message");
message.innerHTML = "Ótimo, entre em contato comigo! Ass: Rafael Carneiro Pregardier";

var canvas = document.createElement("canvas");
canvas.width = 150;
canvas.height = 200;
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fillStyle = "red";
ctx.fill();

ctx.strokeStyle = "white"; // Define a cor da borda como branca
ctx.lineWidth = 4; // Define a largura da borda como 4 pixels
ctx.stroke(); // Desenha a borda

var container = document.getElementById("heart-container");
container.appendChild(canvas);
}