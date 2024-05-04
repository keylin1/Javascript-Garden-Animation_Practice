var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
//mist
  ctx.fillStyle = "rgb(98, 182, 203)";
  ctx.fillRect(x-30, y+20, 100, 3);
  ctx.fillRect(x, y, 100, 3);
  ctx.fillRect(x-10, y-20, 100, 3);

//mist2
  ctx.fillRect(x+400, y+260, 145, 3);
  ctx.fillRect(x+420, y+240, 160, 3);
  ctx.fillRect(x+440, y+280, 145, 3);

//rain
  ctx.fillStyle = "rgb(219, 225, 228)";
  ctx.fillRect(50, x-30, 5, 125);
  ctx.fillRect(220, x, 5, 25);
  ctx.fillRect(300, x-50, 5, 80);
  ctx.fillRect(450, x-30, 5, 15);
  ctx.fillRect(500, x, 5, 100);
  ctx.fillRect(560, x+30, 5, 75);
  ctx.fillRect(700, x, 5, 100);
  ctx.fillRect(780, x+80, 5, 45);
  ctx.fillRect(990, x+30, 5, 85);
  ctx.fillRect(1100, x, 5, 20);
  ctx.fillRect(1300, x+150, 5, 105);
  ctx.fillRect(1390, x+30, 5, 45);
  ctx.fillRect(1450, x-70, 5, 25);

  //grass
  ctx.fillStyle = "rgb(78, 181, 82)";
  ctx.fillRect(50, 550, 5, 200);
  ctx.fillRect(60, 550, 5, 200);
  ctx.fillRect(70, 550, 5, 200);
  ctx.fillRect(200, 600, 5, 250);
  ctx.fillRect(210, 600, 5, 250);
  ctx.fillRect(220, 600, 5, 250);
  ctx.fillRect(400, 520, 5, 200);
  ctx.fillRect(410, 520, 5, 200);
  ctx.fillRect(420, 520, 5, 200);
  ctx.fillRect(750, 560, 5, 300);
  ctx.fillRect(760, 560, 5, 300);
  ctx.fillRect(770, 560, 5, 300);
  ctx.fillRect(1100, 600, 5, 200);
  ctx.fillRect(1110, 600, 5, 200);
  ctx.fillRect(1120, 600, 5, 500);
  ctx.fillRect(1200, 520, 5, 200);
  ctx.fillRect(1210, 520, 5, 200);
  ctx.fillRect(1220, 520, 5, 200);
  ctx.fillRect(1430, 460, 5, 500);
  ctx.fillRect(1440, 460, 5, 500);
  ctx.fillRect(1450, 460, 5, 500);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Adding Strings 
  ctx.font = "50px bold";
  ctx.fillStyle = 'rgb(98, 182, 203)';
  ctx.fillText("mist", 100, 250);
  ctx.fillText("mist", 1200, 400);
  ctx.fillText("Raindrops patter softly onto the garden", 520, y);

//  Passing a variable with text
  let sentence = "The earth laughs in flowers.";
  ctx.fillStyle = 'rgb(255, 200, 221)';
  ctx.fillText(sentence, x, 600);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);