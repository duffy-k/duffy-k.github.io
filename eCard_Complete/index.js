let img;
let btn;
let age;
let centreX = 1288 / 2;
let centreY = 1004 / 2;
let firstClick = false;
let text1;
let msg;
let msg2;
let balloon = [];
let showballoons = false;
let audioplay = false;
function preload() {
  img = loadImage("undersea.png");
}

function MidCircle(x, y) {
  this.x = x;
  this.y = y;
  this.remove = false;

  this.display = function () {
    if (!this.remove) {
      c = color("hsla(160, 100%, 50%, 0.5)");
      fill(c);
      ellipse(this.x, this.y, 150, 150);
      fill(0);
      textSize(100);
      text("?", centreX - 30, centreY + 30);
    }
  };
}

function AgePrompt() {
  this.remove = false;
  this.show = false;

  this.display = function () {
    if (!this.remove && this.show) {
      c = color("hsla(160, 100%, 50%, 0.5)");
      fill(c);
      rect(centreX - 250, centreY - 75, 500, 150);
      fill(0);
      textSize(50);
      text("Are you old?\nPress Y or N", centreX - 150, centreY - 15);
    }
  };
}

function TextMessage(txt) {
  this.remove = false;
  this.show = false;
  this.txt = txt;
  this.height = 120;
  this.width = 350;

  this.display = function () {
    if (!this.remove && this.show) {
      c = color("hsla(160, 100%, 50%, 0.5)");
      fill(c);
      rect(centreX - 175, centreY - 60, this.width, this.height);
      fill(0);
      textSize(25);
      text(txt, centreX - 160, centreY - 25);
    }
  };
}

function balloons() {
  fill(0, 0, 100, 0.7);
  noStroke();
  this.X = 0; //starting postion
  this.Y = random(1020, 1004); //the random value of the y
  this.inalangle = random(0, 2 * PI); //setting the angle randomly between 0 and 2 times pie
  this.size = random(40, 9); //the size of the balloon
  //sqrt means the square root of a number
  //pow is the expontent
  this.radius = sqrt(random(pow(width / 2, 2))); //makes the balloons spread apart on the screen

  this.update = function (time) {
    // x position follows a circle
    var a = 0.6; // angular speed
    var angle = a * time + this.inalangle;
    this.X = width / 2 + this.radius * sin(angle);

    // different size balloon fall at slightly different y speeds
    this.Y -= pow(this.size, 0.5); // the exponet of the y values

    // delete balloons if past end of screen
    if (this.Y > height) {
      var index = balloon.indexOf(this);
      balloon.splice(index, 1);
    }
  };
  this.display = function () {
    ellipse(this.X, this.Y, this.size);
  };
}

function setup() {
  createCanvas(1288, 1004);
  btn = new MidCircle(centreX, centreY);
  age = new AgePrompt();
  msg = new TextMessage("Under the sea song lays\nwith love from John Doe and \nyou're 20 years old!");
  msg2 = new TextMessage("Under the sea song plays\nyou youngin' I hope you have\n a great day John Doe loves you!");
}

function draw() {
  background(img);
  //image(img, 0, 0);
  btn.display();
  age.display();
  msg.display();
  msg2.display();
  if (keyIsDown(89) && age.show == true) {
    age.remove = true;
    msg.show = true;
    showballoons = true;
  }

  if (keyIsDown(78) && age.show == true) {
    age.remove = true;
    msg2.width = 380;
    msg2.show = true;
    showballoons = true;
  }

  if(showballoons){
      if(!audioplay){
        var au = new Audio('uts.mp3').play();
        audioplay = true;
      }
    colorMode(HSB);
    var  t = frameCount/60; //a counter 
    // noprotect
    for (var i = 0; i < random(5); i++) {
      balloon.push(new balloons()); // balloon object
    }
    for(var falling of balloon) {
      falling.update(t); // changing the balloon position
      falling.display(); // drawing the balloon 
    }
  }
}

function mousePressed() {
  if (!firstClick) clickHandler1();
}

function clickHandler1() {
  var d = dist(mouseX, mouseY, centreX, centreY);
  if (d < 75) {
    firstClick = true;
    btn.remove = true;
    age.show = true;
  }
}
