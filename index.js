const robot = require("robotjs");

const rounds = 100;
const clicksPerRound = 25;
const delayBetweenRoundsMs = 10000; // 10 seconds

// Slight right of center
const screenSize = robot.getScreenSize();
const x = screenSize.width / 2 + 100;
const y = screenSize.height / 2;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performClick() {
  robot.keyToggle("alt", "down");
  robot.moveMouse(x, y);
  robot.mouseClick("left", false);
  robot.mouseClick("left", false);
  robot.keyToggle("alt", "up");
}

async function runAutoClicker() {
  console.log("Auto clicker starting in 3 seconds...");
  await sleep(3000);

  for (let round = 1; round <= rounds; round++) {
    console.log(`⏺️ Round ${round} starting...`);

    for (let click = 1; click <= clicksPerRound; click++) {
      await performClick();
      await sleep(100); // short delay between clicks (optional)
    }

    if (round < rounds) {
      console.log(`✅ Round ${round} complete. Waiting 10s...`);
      await sleep(delayBetweenRoundsMs);
    }
  }

  console.log("🎉 All rounds complete.");
}

runAutoClicker();
