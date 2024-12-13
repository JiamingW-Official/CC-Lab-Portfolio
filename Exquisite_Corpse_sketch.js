function setup() {
  createCanvas(400, 600);
  background(255);
  ellipseMode(CENTER);
}

function draw() {
  background(255); // Clear the background at the start of each frame

  // Penguin head position
  let headX = width / 2;
  let headY = height / 3 + 50;
  let headWidth = 220;
  let headHeight = 300;

  // Draw the penguin's black head outline (top 1/3rd of canvas)
  fill(0);
  arc(headX, headY, headWidth, headHeight, PI, 0, CHORD);

  // Draw the white face part
  fill(255);
  arc(headX, headY, headWidth * 0.9, headHeight * 0.8, PI, 0, CHORD);

  // Draw the body (gray sweater)

  fill(150);
  beginShape();
  curveVertex(headX, 260);
  curveVertex(headX, 260);
  curveVertex(headX + 110, 245);
  curveVertex(headX + 105, 470);
  curveVertex(headX - 105, 470);
  curveVertex(headX - 110, 245);
  endShape(CLOSE);

  // Draw the body (gray sweater)

  fill(200);
  beginShape();
  curveVertex(headX, 320);
  curveVertex(headX, 320);
  curveVertex(headX + 80, 245);
  curveVertex(headX + 105, 450);
  curveVertex(headX - 105, 450);
  curveVertex(headX - 80, 245);
  endShape(CLOSE);

  // Draw the eyes
  fill(255);
  stroke(0);
  strokeWeight(3);
  ellipse(headX - 40, headY - 60, 30, 40); // Left eye
  ellipse(headX + 40, headY - 60, 30, 40); // Right eye

  // Pupils
  fill(0);
  noStroke();
  let pupilLeft = map(mouseX, 0, 400, headX - 45, headX - 40);
  let pupilRight = map(mouseX, 0, 400, headX + 35, headX + 40);

  ellipse(pupilLeft, headY - 65, 10, 15); // Left pupil
  ellipse(pupilRight, headY - 65, 10, 15); // Right pupil

  // Draw "USA"
  textSize(70);
  textAlign(CENTER, BASELINE);
  textStyle(BOLD);
  let yTop = height / 2 + 110; // Y position for "U" and "A"
  let yMiddle = yTop + 30; // Lower Y position for "S"

  // Draw "U"
  fill(40, 100, 180);
  text("U", 150, yTop);

  // Draw "S"
  fill(250);
  text("S", 200, yMiddle);

  // Draw "A"
  fill(200, 80, 80);
  text("A", 250, yTop);

  // Scarf Pt.1
  fill(200, 0, 0);
  beginShape();
  curveVertex(headX - 110, headY - 20);
  curveVertex(headX - 120, headY - 20);
  curveVertex(headX - 121, headY + 20);
  curveVertex(headX, headY + 55);
  curveVertex(headX + 121, headY + 20);
  curveVertex(headX + 120, headY - 20);
  curveVertex(headX, headY + 5);
  endShape(CLOSE);

  // Scarf Pt.1 Shadow
  fill(150, 0, 0);
  beginShape();
  curveVertex(headX - 110, headY + 25);
  curveVertex(headX - 120, headY + 25);
  curveVertex(headX - 121, headY + 30);
  curveVertex(headX, headY + 75);
  curveVertex(headX + 121, headY + 30);
  curveVertex(headX + 120, headY + 25);
  curveVertex(headX, headY + 55);
  endShape(CLOSE);

  // Scarf Pt.2 Shadow
  fill(150, 0, 0);
  beginShape();
  curveVertex(headX + 30, headY);
  curveVertex(headX + 30, headY);
  curveVertex(headX + 96, headY + 120);
  curveVertex(headX + 50, headY + 135);
  curveVertex(headX + 10, headY + 40);
  endShape(CLOSE);

  // Scarf Pt.2
  fill(200, 0, 0);
  beginShape();
  curveVertex(headX + 30, headY);
  curveVertex(headX + 30, headY);
  curveVertex(headX + 100, headY + 100);
  curveVertex(headX + 50, headY + 125);
  curveVertex(headX + 10, headY + 20);

  endShape(CLOSE);
  //Fish
  fill(100, 140, 169);

  // Position of the fish under the mouth
  let fishX = headX;
  let fishY = headY;

  // Draw the fish body (ellipse)
  ellipse(fishX, fishY, 80, 30);

  // Draw the fish tail (triangle)
  triangle(
    fishX + 25,
    fishY, // Right end of the ellipse
    fishX + 45,
    fishY - 20, // Upper point of the tail
    fishX + 45,
    fishY + 20 // Lower point of the tail
  );

  // Draw the fish eye (small circle)
  fill(255); // White color for the eye

  // Draw the 'X' in the eye
  stroke(0); // Black color for the 'X'
  strokeWeight(1);
  line(fishX - 28, fishY - 7, fishX - 24, fishY - 3); // Diagonal line \
  line(fishX - 28, fishY - 3, fishX - 24, fishY - 7); // Diagonal line /

  // Draw the yellow triangular mouth
  fill(190, 160, 90);
  noStroke();
  triangle(
    headX,
    headY + 20, // Bottom point
    headX - 30,
    headY - 25, // Top-left point
    headX + 30,
    headY - 25 // Top-right point
  );

  // Draw black arms
  fill(0);
  angleMode(DEGREES);
  // Left arm
  push();
  translate(headX - 140, headY - 30);
  rotate(155);
  ellipse(0, 0, 60, 190);
  pop();

  // Right arm
  push();
  translate(headX + 140, headY + 95);
  rotate(-19);
  ellipse(0, 0, 60, 190);
  pop();

  angleMode(RADIANS);

  //Draw tiny Flag Pole
  rect(38, 30, 4, 160, 2);

  // Revealing Legs

  fill(0);
  ellipse(headX - 35, headY + 235, 50, 20);
  ellipse(headX + 35, headY + 235, 50, 20);
  

  
  
  
  

  //Draw skateboard

  let skateboardWidth = 300;

  // Thickness of the skateboard deck
  let skateboardThickness = 10;

  // Height used for 3D perspective and curvature
  let skateboardHeight = 20;

  // X-coordinate to center the skateboard horizontally
  let skateboardX = (width - skateboardWidth) / 2;

  // Y-coordinate (>450) to place the skateboard near the bottom of the canvas
  let skateboardY = 500;

  // Amount of upward curve at the ends of the skateboard
  let curveAmount = 15;

  // Top Surface of the Skateboard Deck

  // Set the fill color for the deck (wooden color)
  fill(139, 69, 19);

  noStroke();

  // Begin defining the shape of the skateboard deck
  beginShape();

  // Front left point of the deck
  vertex(skateboardX + 20, skateboardY);

  // Curve the front left edge upwards
  bezierVertex(
    skateboardX + 10,
    skateboardY - curveAmount,
    skateboardX,
    skateboardY + skateboardHeight / 2,
    skateboardX,
    skateboardY + skateboardHeight
  );

  // Back left point of the deck
  vertex(skateboardX, skateboardY + skateboardHeight);

  // Back right point of the deck
  vertex(skateboardX + skateboardWidth, skateboardY + skateboardHeight);

  // Curve the front right edge upwards
  bezierVertex(
    skateboardX + skateboardWidth + 20,
    skateboardY + skateboardHeight / 2,
    skateboardX + skateboardWidth + 30,
    skateboardY - curveAmount,
    skateboardX + skateboardWidth - 20,
    skateboardY
  );
  endShape(CLOSE);

  //Side Surface of the Skateboard Deck

  // Set the fill color for the side of the deck (slightly darker)
  fill(160, 82, 45);

  // Begin defining the side shape
  beginShape();

  vertex(skateboardX, skateboardY + skateboardHeight);
  vertex(skateboardX, skateboardY + skateboardHeight + skateboardThickness);
  vertex(
    skateboardX + skateboardWidth,
    skateboardY + skateboardHeight + skateboardThickness
  );
  vertex(skateboardX + skateboardWidth, skateboardY + skateboardHeight);

  endShape(CLOSE);

  //Drawing the Wheels with Depth

  fill(50);

  let wheelRadius = 15;

  // Y-coordinate for the wheels (positioned below the deck)
  let wheelY =
    skateboardY + skateboardHeight + skateboardThickness + wheelRadius;

  // Left wheel X-coordinate
  let leftWheelX = skateboardX + 40;

  // Draw the left wheel (front wheel)
  ellipse(leftWheelX, wheelY, wheelRadius * 2, wheelRadius * 2);

  // Draw the side of the left wheel to show depth
  fill(80);
  ellipse(leftWheelX - 3, wheelY + 2, wheelRadius * 2, wheelRadius * 2);

  // Right wheel X-coordinate
  let rightWheelX = skateboardX + skateboardWidth - 40;
  fill(50);

  // Draw the right wheel (back wheel)
  ellipse(rightWheelX, wheelY, wheelRadius * 2, wheelRadius * 2);

  // Draw the side of the right wheel to show depth
  fill(80);
  ellipse(rightWheelX + 3, wheelY + 2, wheelRadius * 2, wheelRadius * 2);

  //Draw the metal parts connecting wheels to the deck

  fill(192, 192, 192);

  rect(
    leftWheelX - 5,
    skateboardY + skateboardHeight + skateboardThickness - 5,
    10,
    5
  );
  rect(
    rightWheelX - 5,
    skateboardY + skateboardHeight + skateboardThickness - 5,
    10,
    5
  );

  // Draw light orange shoes
  fill(255, 180, 100);

  angleMode(DEGREES);
  let feetAngle = map(mouseX, 0, 400, 0, 20);

  // Left shoe
  push();
  translate(headX - 40, headY + 245);
  rotate(feetAngle);
  ellipse(0, 0, 50, 30);
  pop();

  // Right shoe
  push();
  translate(headX + 40, headY + 245);
  rotate(-feetAngle);
  ellipse(0, 0, 50, 30);
  pop();
  angleMode(RADIANS);
  
  
  //Beer Bottle on the skateboard
  
  // Position of the beer bottle
  let bottleX = 300;  // X-coordinate around 300
  let bottleY = 460;  // Y-coordinate around 500

  

  push();
  translate(bottleX, bottleY);
  fill(139, 69, 19,180); // SaddleBrown color

  // Set the stroke color and weight for the bottle outline
  stroke(150,100);       
  strokeWeight(3);

  // Draw the main body of the bottle
  // Set rectangle mode to center
  rectMode(CENTER); 
  rect(0, 0, 40, 100, 15); 

  // Draw the neck of the bottle
  rect(0, -65, 20, 30, 5);

  // Bottle Cap -

  // Set the fill color for the cap (silver color)
  fill(152, 102, 82); 
  stroke(140);         // Slightly darker outline
  strokeWeight(1);

  // Draw the cap as an ellipse
  ellipse(0, -80, 22, 10);



  fill(225, 215, 0, 100); 
  noStroke();

  // Draw the liquid as a rectangle inside the bottle
  
  rect(0, 20, 36, 60,15); 
  fill(245, 235, 200, 80); 
  rect(0, 2, 36, 28,35)
  

  // Reflections on the Bottle


  fill(255, 255, 255, 100);

  // Draw reflections using ellipses
  noStroke();
  ellipse(-10, -10, 8, 60); // Left vertical reflection
  ellipse(10, 20, 5, 30);   // Right vertical reflection

  // --- Restore the Original Transformation State ---

  pop();
  
  

  // Call the function to draw the red wavy stripes of the flag
  drawWavyStripes();

  // Call the function to draw the blue block that matches the stripes
  drawBlueBlock();
}

// Function to draw the red wavy stripes of the flag
function drawWavyStripes() {
  // Set the fill color to red for the stripes
  fill(240, 100, 100);
  // Disable strokes around shapes for a cleaner look
  noStroke();

  // Define the number of stripes to draw on the flag
  let numStripes = 7;
  // Define the height of each stripe in pixels
  let stripeHeight = 5;

  // Loop through each stripe to draw them individually
  for (let i = 0; i < numStripes; i++) {
    // Calculate the starting y-coordinate for the current stripe
    // Stripes are spaced out with an equal gap (stripeHeight) between them
    let yStart = 40 + i * stripeHeight * 2;

    // Begin a new shape for the current stripe
    beginShape();
    // Loop through x-coordinates to create the top edge of the wavy stripe
    for (let x = 40; x <= 140; x += 5) {
      // Calculate the y-coordinate using a sine function to create a wavy effect
      // The sine function creates smooth periodic oscillations
      let y = yStart + sin((x + frameCount) * 0.1) * 10;
      // Add a vertex at the calculated (x, y) position
      vertex(x, y);
    }
    // Loop through x-coordinates in reverse to create the bottom edge of the stripe
    for (let x = 140; x >= 40; x -= 5) {
      // Offset the y-coordinate by the stripe's height
      let y = yStart + stripeHeight + sin((x + frameCount) * 0.1) * 10;
      // Add a vertex at the calculated (x, y) position
      vertex(x, y);
    }
    // End and close the shape to fill it with the red color
    endShape(CLOSE);
    
    
    
  }
}

// Function to draw the blue block that matches the outline of the stripes
function drawBlueBlock() {
  // Set the fill color to blue for the block
  fill(80, 80, 230);
  // Begin a new shape for the blue block
  beginShape();
  // Loop through x-coordinates to create the top edge of the blue block
  for (let x = 40; x <= 90; x += 5) {
    // Calculate the y-coordinate using the same sine function to match the stripes' waviness
    let y = 40 + sin((x + frameCount) * 0.1) * 10;
    // Add a vertex at the calculated (x, y) position
    vertex(x, y);
  }
  // Loop through x-coordinates in reverse to create the bottom edge of the blue block
  for (let x = 90; x >= 40; x -= 5) {
    // The blue block extends over the height of the top half of the stripes
    // Calculate the y-coordinate at the bottom edge
    let y = 75 + sin((x + frameCount) * 0.1) * 10;
    // Add a vertex at the calculated (x, y) position
    vertex(x, y);
  }
  // End and close the shape to fill it with the blue color
  endShape(CLOSE);
}
