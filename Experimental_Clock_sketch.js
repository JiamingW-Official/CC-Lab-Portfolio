//Setup the variables
// Start at 100%
let batteryLevel = 100;
// Rate at which battery decreases
let decrementRate = 0.1;
// Boolean to control charging
let isCharging = false;
// Signal for low battery message
let lowBatteryMessage = false;
//  Signal for battery depletion
let batteryDepleted = false;
// OK button for reset
let button;

function setup() {
  createCanvas(600, 600);
  // Set frame rate at 30fps
  frameRate(30);
  button = createButton("OK");
  button.position(width / 2 - 20, height / 2 + 40);
  button.mousePressed(resetBattery);
  // Not to display the "OK" button initially, this part will be used later where the function "resetBattery" is determined.
  button.hide();
}

function draw() {
  if (batteryDepleted) {
    showRebootScreen();
    // Show reboot screen if battery is 0%, this will be completed by the function "showRebootScreen" later.
  } else {
    updateBattery();
    // Update battery level and display it
    if (batteryLevel <= 20 && batteryLevel > 0) {
      lowBatteryMessage = true;
    } else {
      lowBatteryMessage = false;
    }
    if (lowBatteryMessage) {
      showLowBatteryWarning();
    }
  }
}

//Update the battery percentage
function updateBattery() {
  background(255);

  // Calculate the battery level based on time, using frameCount and map
  if (!isCharging) {
    batteryLevel -= decrementRate;
    if (batteryLevel <= 0) {
      batteryLevel = 0;
      batteryDepleted = true;
      // Set flag to switch to the reboot screen
    }
  } else {
    batteryLevel += decrementRate;
    if (batteryLevel >= 100) {
      batteryLevel = 100;
    }
  }

  // Draw the battery outline
  stroke(0);
  strokeWeight(2);
  fill(255);
  // Main battery body
  rect(200, 250, 200, 100, 20);
  // Battery terminal
  rect(400, 270, 20, 60);

  // Determine the battery color based on percentage level
  if (batteryLevel > 80) {
    fill(0, 255, 0); // Green
  } else if (batteryLevel > 20 && batteryLevel <= 80) {
    fill(255, 255, 0); // Yellow
  } else if (batteryLevel > 10 && batteryLevel <= 20) {
    fill(255, 165, 0); // Orange
  } else {
    fill(255, 0, 0); // Red
  }

  // Draw the battery bar based on battery level
  let batteryWidth = map(batteryLevel, 0, 100, 0, 200);
  rect(200, 250, batteryWidth, 100, 20);

  // Display the battery level as a percentage
  textSize(32);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(int(batteryLevel) + "%", width / 2, 370);

  // Restart charging to 100% when mouse is pressed
  if (mouseIsPressed) {
    isCharging = !isCharging;
  }

  textSize(20);
  // Notice
  text("Click to Start Charging / Discharging", 300, 550);

  // Display charging status
  textAlign(RIGHT, CENTER);
  if (isCharging) {
    text("Charging...", width - 10, 20);
  } else {
    text("Discharging...", width - 10, 20);
  }
}
//When the battery is below 20%, show the Low Battery Warning
function showLowBatteryWarning() {
  textSize(24);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text("Battery Low, Please Charge Now", width / 2, 100);
}

//When the battery level hits 0, switch to the Reboot Screen.
function showRebootScreen() {
  background(20);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Change Battery and Reboot.", width / 2, height / 2 - 20);
  // Interact with the OK button when battery is depleted
  button.show();
}

// Reset the battery level to 100% and start a new cycle
function resetBattery() {
  batteryLevel = 100;
  batteryDepleted = false;
  button.hide(); // Hide the button after pressing OK
}
