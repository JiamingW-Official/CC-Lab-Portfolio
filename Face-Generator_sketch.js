function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  //Face
  length = map(mouseX, 0, 400, 80, 200);
  Hight = map(mouseY, 100, 300, 200, 240);
  background(220);
  rectMode(CENTER);

  //Zoom circles
  push();
  let varA = map(mouseX, 0, width, 0, 240);
  let varB = map(mouseX, 0, width, 0, 600);
  fill(250, varA, 150);
  ellipse(width / 2, height / 2, varB, varB);
  pop();

  push();
  let varC = map(mouseX, 0, width, 0, 180);
  let varD = map(mouseX, 0, width, 0, 540);
  fill(250, varC, 150);
  ellipse(width / 2, height / 2, varD, varD);
  pop();

  push();
  let varE = map(mouseX, 0, width, 0, 120);
  let varF = map(mouseX, 0, width, 0, 480);
  fill(250, varE, 150);
  ellipse(width / 2, height / 2, varF, varF);
  pop();

  fill(mouseX, 250, 200);

  rect(width / 2, width / 2, length, Hight, mouseX + 3);
  //

  rectMode(CENTER);
  fill(200, 240, mouseX);
  rect(width / 2, width / 2, length, 120, mouseX + 3);

  //Mouth
  let smileWidth = map(mouseX, 0, width, 20, 70); 
  // Arc width based on mouseX
  let smileHeight = map(mouseY, 0, height, 25, 30); 
  // Arc height based on mouseY

  // Angle for the smile opening (in degrees)
  let startAngle = 20; 
  // Starting angle in degrees
  let endAngle = 160; 
  // Ending angle in degrees

  // Draw the smile arc
  noFill(); 
  // No fill for the smile, just outline
  arc(width/2, 275, smileWidth, smileHeight, startAngle, endAngle);
  

  //Eyes
  let LeftEyeX = width / 2 - length / 4;
  let RightEyeX = width / 2 + length / 4;

  let eyeSize = random(length / 5, length / 3);
  let LeftHighlightX = LeftEyeX - eyeSize / 6;
  let LeftHighlightY = height / 2 - eyeSize / 6;
  let RightHighlightX = RightEyeX - eyeSize / 6;
  let RightHighlightY = height / 2 - eyeSize / 6;
  let lightSize = eyeSize / 2;

  eyeColor = map(mouseY, 0, 400, 50, 100);

  //LeftEye
  fill(80, eyeColor, 100);
  ellipse(LeftEyeX, height / 2, eyeSize);

  //RightEye
  fill(80, eyeColor, 100);
  ellipse(RightEyeX, height / 2, eyeSize);

  //LeftHighlight
  fill(255, 200);
  ellipse(LeftHighlightX, LeftHighlightY, lightSize);

  //RightHighlight
  fill(255, 200);
  ellipse(RightHighlightX, RightHighlightY, lightSize);

  //Slowdown frame rate when mouse is pressed
  if (mouseIsPressed === true) {
    frameRate(5);
  } else {
    frameRate(30);
  }
  
  push()
  noStroke()
  fill(255,100)
  forheadX = map(mouseX,0,400,20,60)
  forheadY = map(mouseX,0,400,1,8)
  rect(width/2, 125,forheadX,forheadY,20)
  pop()
  
  //Note
  textSize(20)
  text("🖱️Click to Slowdown",width/2,360)
}
