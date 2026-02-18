let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const statusText = document.getElementById("sessionStatus");
const durationSelect = document.getElementById("duration");

const quotes = [
  "Stay focused. You’re doing better than you think.",
  "This session matters more than motivation.",
  "Small focus today. Big results tomorrow.",
  "Discipline now equals freedom later.",
  "Future-you will thank you for this."
];

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startSession() {
  if (isRunning) return;
  isRunning = true;
  statusText.textContent = "Focus session in progress";

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      statusText.textContent = "Session completed 🎉";
      alert("Great job! Focus session completed.");
      isRunning = false;
      return;
    }
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

function pauseSession() {
  clearInterval(timer);
  isRunning = false;
  statusText.textContent = "Session paused";
}

function resetSession() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = durationSelect.value * 60;
  updateTimerDisplay();
  statusText.textContent = "Ready to focus";
}

durationSelect.addEventListener("change", () => {
  resetSession();
});

setInterval(() => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${quote}"`;
}, 20000);

updateTimerDisplay();
