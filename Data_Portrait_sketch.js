// In this project, I tracked my personal habit of social media usage to understand its impact on my productivity. Over seven days, I recorded the minutes spent on YouTube, Instagram, and TikTok:

// 	Day 1: YouTube 60 min, Instagram 20 min, TikTok 20 min
// 	Day 2: YouTube 27 min, Instagram 33 min, TikTok 13 min
// 	Day 3: YouTube 76 min, Instagram 62 min, TikTok 12 min
// 	Day 4: YouTube 43 min, Instagram 27 min, TikTok 27 min
// 	Day 5: YouTube 95 min, Instagram 44 min, TikTok 14 min
// 	Day 6: YouTube 58 min, Instagram 20 min, TikTok 10 min
// 	Day 7: YouTube 95 min, Instagram 19 min, TikTok 14 min

// I wanted to visualize where my time was going and was shocked by how much time I spent on these apps, leading to unproductivity.

// To read the data portrait, observe the concentric rings; each ring represents 10 minutes of total social media usage. Within each ring, the angular segments correspond to the percentage of time spent on each platform for that day—red for YouTube, purple for Instagram, and gray for TikTok.

// My design process involved creating an interactive visualization using data arrays. I stored the usage data in arrays and calculated the total minutes and percentages for each platform. I implemented nested loops to draw the rings using the arc() function, calculating start and end angles based on the percentages. I mapped the mouseX position to a zoom factor using map() and constrain() functions to allow subtle zooming, adjusting radii and stroke widths accordingly. I handled user interaction with keyPressed() to switch between days. I structured the code modularly, with functions for drawing the legend, instructions, and date, ensuring readability and reusability. Precise mathematical calculations were essential for accurate representation, such as converting percentages to angles and determining the number of rings with ceil(totalMinutes / 10).

// Data arrays: Minutes spent on each platform over 7 days
let youtubeMinutes = [60, 27, 76, 43, 95, 58, 95]; 
let instagramMinutes = [20, 33, 62, 27, 44, 20, 19];
let tiktokMinutes = [20, 13, 12, 27, 14, 10, 14];

// Number of days (assumes all arrays are of equal length)
const numDays = youtubeMinutes.length; 

// Variable to keep track of the current day being displayed. Index ranging from 0 to 6 (7 days)
let currentDay = 0; 

// Variable to store my custom font
let myFont;

function preload() {
  // Load my font file
  myFont = loadFont('NeueDisplay-Random.otf');
}

function setup() {
  createCanvas(600, 600); 
  angleMode(DEGREES);
}

function draw() {
  background(255); 
  // Display instructions at the top of the canvas
  displayInstructions();
  // Display the current day at the bottom of the canvas
  displayDate();
  // Draw the legend in the corner to identify platform colors
  drawLegend();
  // Draw the nested rings representing social media usage
  drawNestedRings();
}

// Display instructions at the top
function displayInstructions() {
  fill(50);
  noStroke();
  textAlign(CENTER, CENTER); 
  textSize(16);
  textFont(myFont);
  text('Press LEFT and RIGHT keys to switch days', width / 2, 30);
}

// Display the current day at the bottom
function displayDate() {
  fill(50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont(myFont);
  // Display the current day number (adding 1 because arrays are "zero-indexed")
  text('Day ' + (currentDay + 1), width / 2, height - 30);
}

// Function to draw the legend in the corner
function drawLegend() {
  // X-coordinate for the legend (from the right edge)
  const legendX = width - 150;
  // Y-coordinate for the legend (from the top edge)
  const legendY = 80;
  // Vertical spacing between legend items
  const spacing = 30;

  textSize(14);
  textAlign(LEFT, CENTER);
  noStroke();

  // YouTube legend indicator-small square and texts
  fill(255, 150, 150);
  rect(legendX, legendY, 15, 15);
  fill(50);
  text('YouTube', legendX + 20, legendY + 7.5); 

  // Instagram legend indicator-small square and texts
  fill(180, 150, 220);
  rect(legendX, legendY + spacing, 15, 15);
  fill(50);
  text('Instagram', legendX + 20, legendY + spacing + 7.5);

  // TikTok legend indicator-small square and texts
  fill(180);
  rect(legendX, legendY + 2 * spacing, 15, 15);
  fill(50);
  text('TikTok', legendX + 20, legendY + 2 * spacing + 7.5);
}

// Draw the nested rings for the current day
function drawNestedRings() {
  // Constants for ring dimensions
  // Width of the ring's outline
  const STROKE_WIDTH = 5;
  // Space between rings
  const SPACE_WIDTH = 5;
  // Total width of a ring including space
  const RING_WIDTH = STROKE_WIDTH + SPACE_WIDTH; 

  // Calculate zoom factor based on mouseX position
  // Zooms from 0.9x to 1.1x as mouseX moves from left to right
  let zoomFactor = map(mouseX, 0, width, 0.9, 1.1);
  // Make sure zoomFactor stays within the range of 0.9-1.1
  zoomFactor = constrain(zoomFactor, 0.9, 1.1); 

  // Adjust starting radius and ring dimensions based on zoomFactor
  // Radius of the innermost circle is 50, displayed as white here
  let startingRadius = 50 * zoomFactor;
  // Adjusted ring width, varies with the zoom
  let adjustedRingWidth = RING_WIDTH * zoomFactor;
  // Adjusted stroke width, varies with the zoom
  let adjustedStrokeWidth = STROKE_WIDTH * zoomFactor; 

  // Set up the center coordinates for later use
  const centerX = width / 2;
  const centerY = height / 2;

  // Retrieve minutes for the current day from the arrays
  let youtubeMin = youtubeMinutes[currentDay];
  let instagramMin = instagramMinutes[currentDay];
  let tiktokMin = tiktokMinutes[currentDay];
  // Total minutes spent on all platforms
  let totalMinutes = youtubeMin + instagramMin + tiktokMin; 

  // Calculate the percentage of total usage for each platform
  let youtubePercentage = youtubeMin / totalMinutes; 
  let instagramPercentage = instagramMin / totalMinutes;
  let tiktokPercentage = tiktokMin / totalMinutes;

  // Calculate the angle for each platform (since full circle is 360 degrees)
  let youtubeAngle = youtubePercentage * 360;
  let instagramAngle = instagramPercentage * 360;
  let tiktokAngle = tiktokPercentage * 360;

  // Array of objects containing platform data for easy iteration
  let platformData = [
    {
      name: 'YouTube',
      color: color(255, 150, 150),
      percentage: youtubePercentage,
      angle: youtubeAngle,
    },
    {
      name: 'Instagram',
      color: color(180, 150, 220),
      percentage: instagramPercentage,
      angle: instagramAngle,
    },
    {
      name: 'TikTok',
      color: color(180),
      percentage: tiktokPercentage,
      angle: tiktokAngle,
    },
  ];

  // Calculate the total number of rings required
  // Each ring represents 10 minutes of usage
  let numRings = ceil(totalMinutes / 10);

  // Reset total rings represented for each platform
  for (let p = 0; p < platformData.length; p++) {
    // Initialize total rings drawn for each platform
    platformData[p].totalRings = 0; 
  }

  // Draw rings from innermost to outermost
  for (let ringIndex = 0; ringIndex < numRings; ringIndex++) {
    // Calculate the radius for the current ring
    let radius =
      startingRadius + ringIndex * adjustedRingWidth + adjustedStrokeWidth / 2;

    // Starting angle for the first segment in this ring
    let startAngle = -90; // Start at the top of the circle

    // Draw segments for each platform within the ring
    for (let p = 0; p < platformData.length; p++) {
      // Get platform data
      let platform = platformData[p]; 
      // Calculate end angle for the segment
      let endAngle = startAngle + platform.angle;  
      // Check if the platform needs more rings to represent its usage
       // Rings drawn so far for this platform
      let platformTotalRings = platform.totalRings;
      // Minutes represented so far
      let platformMinutesRepresented = platformTotalRings * 10; 
      // Total minutes to represent
      let platformMinutesNeeded = platform.percentage * totalMinutes; 

      if (platformMinutesRepresented < platformMinutesNeeded) {
        // Draw the segment for this platform in the current ring
        // Set stroke color to platform color
        stroke(platform.color);
        strokeWeight(adjustedStrokeWidth);    
        noFill();arc
        arc(
          // X-coordinate of the center
          centerX,
          // Y-coordinate of the center
          centerY,
          // Width of the arc (diameter of the circle)
          radius * 2,
          // Height of the arc
          radius * 2,
          // Starting angle in degrees
          startAngle,
          // Ending angle in degrees
          endAngle
        );
        // Increment the total rings drawn for this platform
        platform.totalRings += 1;
      }
      // Update the start angle for the next platform's segment
      startAngle = endAngle;
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    // Move to the next day when the right arrow key is pressed
    // Use modulo to loop back to the first day
    currentDay = (currentDay + 1) % numDays; 
  } else if (keyCode === LEFT_ARROW) {
    // Move to the previous day when the left arrow key is pressed
    // Ensure the index stays within the bounderies
    currentDay = (currentDay - 1 + numDays) % numDays; 
  }
}