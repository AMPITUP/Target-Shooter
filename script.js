// Game code
//FPS
var FPS = 30;
var RArrow = 39;
var LArrow = 37;
//get the canvas
var canvas = document.getElementById("canvas");
//get context
var context = canvas.getContext("2d");
// Array of key flags
var KeyDownA = [];
onkeydown = function(e) {
e = e || event;
KeyDownA [e.keyCode] = true;
};
onkeyup = function(e) {
e = e || event;
KeyDownA [e.keyCode] = undefined;
};   
//shooting key flags
var KeyDownX = [];
onkeydown2 = function(e) {
e = e || event;
KeyDownX [e.keyCode] = true;
};
onkeyup2 = function(e) {
e = e || event;
KeyDownX [e.keyCode] = undefined;
};

//Target
var target = {
  color: 'red',
  x: 250,
  y:150,
  vx: 0,
  vy: 0,
  ax: 0,
  ay:0,
  targetRadius: 20,
  //draw function
  draw: function() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc( this.x, this.y, this.targetRadius, 0, 2 * Math.PI );
        context.fill();
  }
};
//end of target

//Crosshair Thing
var crosshair = {
  color: 'black',
  x: 150,
  y: 150,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  crossHairSize:10,
  //draw function
  draw: function() {
    context.beginPath();
    context.fillStyle = this.color;
    context.moveTo(this.x-this.crossHairSize,this.y);
    context.lineTo(this.x+this.crossHairSize,this.y);
    context.moveTo(this.x,this.y-this.crossHairSize);
    context.lineTo(this.x,this.y+this.crossHairSize);
    context.stroke();
    context.closePath();
  },
  // Update function
  update: function() {
    this.vx += this.ax / FPS;
    this.vy += this.ay / FPS;
    this.x += this.vx / FPS;
    this.y += this.vy / FPS;
  },
  keymove: function() {
    if (KeyDownA[RArrow] &&
        this.x + this.crossHairSize < canvas.width)
      this.x += 10;
    if (KeyDownA[LArrow] &&
        this.x - this.crossHairSize > 0)
      this.x -= 10;
  }
};
//end of crosshairs

//this is supposed to do the shooting

//shoot
function shoot() {
  if (keyDownX[F] && crosshair.x >= 260 && crosshair.x <= 240) {
    alert("You hit the target!");
  }
  //this is supposed to make the canvas explode with jQuery if you miss the target
  /*
  if (keyDownX[F] && crosshair.x > 260 && crosshair.x < 140) {
    $(document).ready(function() {
      $('#canvas').animate('explode', slow);
    });
  }
  */
}


//game tick
function tick() {
    context.clearRect(0,0,canvas.width,canvas.height);
    crosshair.keymove();
    crosshair.draw();
    target.draw();
}
//fps thing
setInterval(tick, 1000/FPS);
// End Game Code
