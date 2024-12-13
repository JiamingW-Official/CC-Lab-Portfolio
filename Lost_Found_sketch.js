//Setup Variables
let centerpoint;
let textColor;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Set Background Color, Color Change with Mouse Y
  bgcolorR = map(mouseY, 0, 400, 220, 255);
  bgcolorG = map(mouseY, 0, 400, 200, 255);
  background(bgcolorR, bgcolorG, 240);

  rectMode(CENTER);

  //Phone Body
  strokeWeight(1);
  stroke(150, 130, 70);
  fill(160, 140, 80);
  rect(width / 2, height / 2 + 10, 150, 300, 22);

  //USB C port on the bottom
  stroke(0, 100);
  fill(0, 160);
  rect(width / 2, 356, 20, 5, 4);

  //Speakers on the bottom using Translate(), Push(), and Pop().
  fill(50, 200);
  strokeWeight(0.5);
  stroke(20, 100);

  push();
  centerpoint = width / 2;
  translate(centerpoint, 356);

  //Right Speakers on the bottom
  circle(25, 0, 3);
  circle(30, 0, 3);
  circle(35, 0, 3);
  circle(40, 0, 3);
  //Left Speakers on the bottom
  circle(-25, 0, 3);
  circle(-30, 0, 3);
  circle(-35, 0, 3);
  circle(-40, 0, 3);

  circle(4);
  pop();

  //Phone Edge
  stroke(200, 180, 100);
  strokeWeight(2);
  fill(230, 200, 130);
  rect(width / 2, height / 2, 150, 300, 20);

  //Button
  fill(250, 220, 150);
  stroke(120, 100, 100);
  strokeWeight(1);
  rect(width / 2, 339, 40, 12, 5);

  //Phone Screen, color changes with mouse X, use map() to limit the range of the RGB colors.
  noStroke();
  ScreenColorR = map(mouseX, 0, 400, 100, 255);
  ScreenColorG = map(mouseX, 0, 400, 250, 255);

  fill(ScreenColorR, ScreenColorG, 240);
  rect(width / 2, height / 2 - 4, 146, 265, 10);

  //Cameras on the top of the phone
  fill(0, 180);
  circle(width / 2 + 20, 57, 6);
  //Sensors on the top of the phone
  circle(width / 2 - 22, 57, 4);
  circle(width / 2 - 28, 57, 4);
  //Top Speaker
  stroke(0, 100);
  fill(120, 180);
  rect(width / 2, 57, 26, 3, 2);

  //Highlight on the edge of the phone
  noStroke();
  fill(255, 100);
  push();
  translate(width / 2, 52);
  rect(0, 0, 115, 1, 1);
  rect(0, 295, 115, 1, 1);

  pop();
  //

  textColor = random(200, 255);

  textSize(26);
  fill(textColor, textColor, textColor);
  stroke(0, 80);
  strokeWeight(3);
  text("I am lost :(", 138, width / 2);

  //Textbar, appears with MouseY, limit the alpha range with map()
  textBarAlpha = map(mouseY, 0, 400, 180, 50);
  noStroke();
  fill(240, textBarAlpha);

  rect(300, 300, 120, 40, 10);
  rect(100, 250, 100, 30, 10);
  rect(300, 120, 90, 40, 10);
  rect(110, 85, 70, 60, 10);

  //Texts, appears with MouseY, limit the alpha range with map()
  textAlpha = map(mouseY, 0, 400, 255, 0);

  textSize(17);
  fill(60, textAlpha);
  text("where r u?", 58.5, 255.5);

  textSize(40);
  text("🤔", 89, 100);

  textSize(25);
  text("hellooo?", 253, 308);

  fill(255, 0, 0, textAlpha);
  textSize(19);
  text("📞11:30", 265, 127);
}
