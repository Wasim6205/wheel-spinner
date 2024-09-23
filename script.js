let wheel = document.querySelector(".wheel");
const resultText = document.getElementById("resultText");
const resultContainer = document.querySelector(".result");
const segments = ["10", "50", "100", "1000", "10000", "75000", "75000", "1.5 Lac"];
const numSegments = segments.length;


// We want always my choice amount with the help of index
const targetSegmentIndex = 0;
const segmentDegree = 360 / numSegments;

// spin sound
const spinSound = new Audio('/img/sound.mp3');

document.getElementById("spinBtn").addEventListener("click", () => {
  // Clear previous result and hide it
  resultText.textContent = ``;
  resultContainer.classList.remove("show");

  // Play the spin sound
  spinSound.play();

  // Calculate the degree to stop at 10 segment
  const stopDegree = 360 - (targetSegmentIndex * segmentDegree) - (segmentDegree / 2);
  
  // Add extra rotations (10+ spins)
  const finalDegree = stopDegree + (Math.floor(Math.random() * 10) + 10) * 362;

  // Start the wheel spin animation
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${finalDegree}deg)`;

  // Wait for the spin to finish 4 seconds
  setTimeout(() => {
    resultText.textContent = `Congratulations! You won: ${segments[targetSegmentIndex]}`;
    resultContainer.classList.add("show");

    // stop the sound after the spin
    spinSound.pause();
    spinSound.currentTime = 0; // Reset sound to start from the beginning for the next spin
  }, 4000);
});
