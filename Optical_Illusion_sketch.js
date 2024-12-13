// Time variable for controlling animation progression
let t = 0; 
// Flag selector: 0 for USA, 1 for Russia, 2 for France, 3 for Spain
let flagState = 0; 
// Variable to hold the bold font "NeueDisplay-Random"
let fontBold; 

function preload() {
  // Upload the bold font to use for text rendering
  fontBold = loadFont('NeueDisplay-Random.otf');
}

function setup() {
  createCanvas(600, 600); 
  noStroke();  
  // Confirm the font for text
  textFont(fontBold); 
  // All texts will be displayed at the center
  textAlign(CENTER, CENTER); 
}

function draw() {
  background(255); 
  // Increment time variable for animation speed
  t += 0.1; 

  // Determine which flag to display based on the flagState triggered
  if (flagState == 0) {
    drawAmericanFlag();
  } else if (flagState == 1) {
    drawRussianFlag();
  } else if (flagState == 2) {
    drawFrenchFlag();
  } else if (flagState == 3) {
    drawSpanishFlag();
  }
}

function mouseClicked() {
  // Cycle through the flags when the mouse is clicked
  flagState = (flagState + 1) % 4; 
}

function drawAmericanFlag() {
  // Height of each stripe, there are 13 stripes in the American flag
  let stripeHeight = height / 13; 
  // Wave Amplitude increases with mouseX, use map to limit the range
  let waveAmplitude = map(mouseX, 0, width, 5, 30); 
  // Frequency increases with mouseX, use map to limit the range
  let waveFrequency = map(mouseX, 0, width, 0.01, 0.1); 

  // Draw the 13 stripes using a loop
  for (let i = 0; i < 13; i++) {
    // Alternate between red and white stripes
    if (i % 2 == 0) {
      // Red color
      fill(191, 10, 48); 
    } else {
      // White color
      fill(255); 
    }

    // Begin drawing a custom shape for the stripe
    beginShape();
    // Use a for loop to create a wavy effect along the x-axis
    for (let x = 0; x <= width; x += 0.5) {
      // Calculate the y-coordinates with a sine wave for waviness
      // The sine function generates a smooth oscillation between -1 and 1
      let y1 = i * stripeHeight + waveAmplitude * sin(waveFrequency * x + t);
      // y1 represents the top edge of the stripe at position x
      let y2 = (i + 1) * stripeHeight + waveAmplitude * sin(waveFrequency * x + t);
      // y2 represents the bottom edge of the stripe at position x
      // The sine function creates the wave effect by varying y positions
      vertex(x, y1); // Top vertex of the stripe
      vertex(x, y2); // Bottom vertex of the stripe
    }
    // Finish drawing the stripe
    endShape(); 
    // The loop creates a series of connected vertices forming the wavy stripe
  }

  // Draw the blue union (Rectangle with stars)
  // Width of the union
  let unionWidth = width * 0.4; 
  // Height covering exactly 7 stripes
  let unionHeight = stripeHeight * 7; 
  // Blue color
  fill(0, 40, 104); 
  beginShape();
  // Draw the wavy blue union using a loop similar to the stripes
  for (let x = 0; x <= unionWidth; x += 0.5) {
    let y1 = waveAmplitude * sin(waveFrequency * x + t);
    // y1 represents the top edge of the union at position x
    let y2 = unionHeight + waveAmplitude * sin(waveFrequency * x + t);
    // y2 represents the bottom edge of the union at position x
    vertex(x, y1);
    vertex(x, y2);
  }
  endShape();

  // Draw the 50 stars using nested loops
  // Number of rows of stars
  let starRows = 9; 
  // Number of columns of stars
  let starCols = 11; 
  // Vertical spacing between stars
  let starOffsetY = unionHeight / starRows; 
  // Horizontal spacing between stars
  let starOffsetX = unionWidth / starCols; 

  for (let row = 0; row < starRows; row++) {
    for (let col = 0; col < starCols; col++) {
      // Skip positions to create the staggered star pattern
      if ((row + col) % 2 == 1) {
        continue;
      }
      // X-coordinate of the star
      let x = col * starOffsetX + starOffsetX / 2; 
      // Y-coordinate of the star
      let y = row * starOffsetY + starOffsetY / 2; 
      // Apply the wave effect to the star's position
      let offsetY = waveAmplitude * sin(waveFrequency * x + t);
      // The sine function makes the stars move up and down with the wave
      drawStar(x, y + offsetY, starOffsetX / 3, starOffsetX / 6); 
      // Draw the star at the calculated position with specified radii
    }
  }

  // Display "Hello!" in bold when mouse is on the right half of the canvas
  if (mouseX > width / 2) {
    fill(0,mouseY,255); 
    textSize(100); 
    // Set text style to bold
    textStyle(BOLD); 
    // Draw text at center
    text("Hello!", width / 2, height / 2); 
  }
}

function drawStar(cx, cy, outerRadius, innerRadius) {
  // White color for the star
  fill(255); 
  beginShape();
  // Draw a 5-pointed star using a loop
  for (let i = 0; i < 10; i++) {
    // Calculate the angle for each point (outer and inner)
    let angle = TWO_PI / 10 * i - HALF_PI;
    // Alternate between outer and inner radius to create star points
    let radius = i % 2 == 0 ? outerRadius : innerRadius;
    // X-coordinate of the point
    let x = cx + cos(angle) * radius; 
    // Y-coordinate of the point
    let y = cy + sin(angle) * radius; 
    // Add the point to the shape
    vertex(x, y); 
  }
  // Close the star shape
  endShape(CLOSE); 
  // This loop constructs the star by connecting the points
}

function drawRussianFlag() {
  // Height of each stripe, only 3 colors
  let stripeHeight = height / 3; 
  // Amplitude based on mouseX
  let waveAmplitude = map(mouseX, 0, width, 5, 30); 
  // Frequency based on mouseX
  let waveFrequency = map(mouseX, 0, width, 0.01, 0.1); 

  // Draw the three horizontal stripes
  for (let i = 0; i < 3; i++) {
    // Set the color for each stripe
    if (i == 0) {
      fill(255); // White stripe
    } else if (i == 1) {
      fill(0, 57, 166); // Blue stripe
    } else {
      fill(213, 43, 30); // Red stripe
    }

    beginShape();
    // Create a wavy effect along the x-axis
    for (let x = 0; x <= width; x += 0.5) {
      // The sine function adds vertical displacement to the stripes
      let y1 = i * stripeHeight + waveAmplitude * sin(waveFrequency * x + t);
      // y1 is the top edge of the stripe at position x
      let y2 = (i + 1) * stripeHeight + waveAmplitude * sin(waveFrequency * x + t);
      // y2 is the bottom edge of the stripe at position x
      vertex(x, y1);
      vertex(x, y2);
    }
    endShape();
    // This creates the wavy effect for each horizontal stripe
  }

  // Display "Privet!" in bold when mouse is on the right half
  if (mouseX > width / 2) {
    fill(mouseY,255,0); // Black text for contrast
    textSize(100);
    textStyle(BOLD);
    text("Privet!", width / 2, height / 2);
  }
}

function drawFrenchFlag() {
  // Width of each vertical stripe, 3 colors
  let stripeWidth = width / 3; 
  // Amplitude based on mouseX
  let waveAmplitude = map(mouseX, 0, width, 5, 30); 
  // Frequency based on mouseX
  let waveFrequency = map(mouseX, 0, width, 0.01, 0.1); 

  // Draw the three vertical stripes
  for (let i = 0; i < 3; i++) {
    // Set the color for each stripe
    if (i == 0) {
      fill(0, 85, 164); // Blue stripe
    } else if (i == 1) {
      fill(255); // White stripe
    } else {
      fill(239, 65, 53); // Red stripe
    }

    beginShape();
    // Create a wavy effect along the y-axis
    for (let y = 0; y <= height; y += 0.5) {
      // The sine function adds horizontal displacement to the stripes
      let x1 = i * stripeWidth + waveAmplitude * sin(waveFrequency * y + t);
      // x1 is the left edge of the stripe at position y
      let x2 = (i + 1) * stripeWidth + waveAmplitude * sin(waveFrequency * y + t);
      // x2 is the right edge of the stripe at position y
      vertex(x1, y);
      vertex(x2, y);
    }
    endShape();
    // This creates the wavy effect for each vertical stripe
  }

  // Display "Bonjour!" in bold when mouse is on the right half
  if (mouseX > width / 2) {
    fill(0); // Black text for contrast
    textSize(100);
    textStyle(BOLD);
    text("Bonjour!", width / 2, height / 2);
  }
}

function drawSpanishFlag() {
  // Height of the flag divided into 4 units: red (1 unit), yellow (2 units), red (1 unit)
  let unitHeight = height / 4; 
  // Amplitude based on mouseX
  let waveAmplitude = map(mouseX, 0, width, 5, 30); 
  // Frequency based on mouseX
  let waveFrequency = map(mouseX, 0, width, 0.01, 0.1); 

  // Draw the top red stripe
  fill(198, 0, 43); // Red color
  beginShape();
  for (let x = 0; x <= width; x += 0.5) {
    // The sine function adds vertical displacement to the stripe edges
    let y1 = 0 + waveAmplitude * sin(waveFrequency * x + t);
    // y1 is the top edge of the stripe
    let y2 = unitHeight + waveAmplitude * sin(waveFrequency * x + t);
    // y2 is the bottom edge of the stripe
    vertex(x, y1);
    vertex(x, y2);
  }
  endShape();

  // Draw the middle yellow stripe (double the height)
  fill(255, 206, 0); // Yellow color
  beginShape();
  for (let x = 0; x <= width; x += 0.5) {
    let y1 = unitHeight + waveAmplitude * sin(waveFrequency * x + t);
    let y2 = 3 * unitHeight + waveAmplitude * sin(waveFrequency * x + t);
    vertex(x, y1);
    vertex(x, y2);
  }
  endShape();

  // Draw the bottom red stripe
  fill(198, 0, 43); // Red color
  beginShape();
  for (let x = 0; x <= width; x += 0.5) {
    let y1 = 3 * unitHeight + waveAmplitude * sin(waveFrequency * x + t);
    let y2 = 4 * unitHeight + waveAmplitude * sin(waveFrequency * x + t);
    vertex(x, y1);
    vertex(x, y2);
  }
  endShape();

  // Display "Hola!" in bold when mouse is on the right half
  if (mouseX > width / 2) {
    fill(mouseY,0,255); // Black text for contrast
    textSize(100);
    textStyle(BOLD);
    text("Hola!", width / 2, height / 2);
  }
}


