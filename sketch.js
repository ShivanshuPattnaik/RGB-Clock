// Tick Tock
// Made By Shivanshu Pattnaik

// Variables
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
var centerDot;

function setup() {

  createCanvas(displayWidth, displayHeight - 143);

  centerDot = createSprite(700, 250, 100, 100);

  angleMode(DEGREES);
  ellipseMode(CENTER);

}

function draw() {
  
  background("black");

  textFont("Fira Code");
  fill("red");
  textSize(30);
  text("RGB CLOCK", 615, 500);

  hr = hour();
  mn = minute();
  sc = second();

  translate(700, 250);
  rotate(-90);

  stroke("white");
  strokeWeight(5);
  noFill();

  scAngle = map(sc, 0, 60, 0, 360);
  stroke("red");
  arc(0, 0, 250, 250, 0, scAngle);

  mnAngle = map(mn, 0, 60, 0, 360);
  stroke("green");
  arc(0, 0, 260, 260, 0, mnAngle);

  hrAngle = map(hr%12, 0, 12, 0, 360);
  stroke("blue");
  arc(0, 0, 270, 270, 0, hrAngle);

  // Second Hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(6);
  line(0, 0, 70, 0);
  pop();

  // Minute Hand
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(6);
  line(0, 0, 85, 0);
  pop();

  // Hour Hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(6);
  line(0, 0, 100, 0);
  pop();

  drawSprites();

}