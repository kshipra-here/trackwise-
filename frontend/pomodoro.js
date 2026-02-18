let time = 25 * 60;
let timerInterval;
let isRunning = false;
let sessions = 0;
let focusMinutes = 0;

const timerDisplay = document.getElementById("timer");
const modeText = document.getElementById("mode");

const quotes = {
  study: [
    "Every focused session brings you closer to mastery.",
    "Study now, stress less later."
  ],
  career: [
    "Consistency today builds your future career.",
    "Your dream job respects discipline."
  ],
  fitness: [
    "Discipline builds confidence.",
    "Strong habits create strong bodies."
  ],
  exam: [
    "Future-you will thank you for this session.",
    "One session closer to acing it."
  ],
  growth: [
    "Growth happens in focused moments.",
    "Small efforts compound into big change."
  ]
};

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      sessions++;
      focusMinutes += 25;
      document.getElementById("sessionsDone").textContent = sessions;
      document.getElementById("focusTime").textContent = focusMinutes + " min";
      alert("Pomodoro completed! Take a break 😌");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  time = 25 * 60;
  modeText.textContent = "Focus";
  updateDisplay();
}

function setMode(minutes, mode) {
  resetTimer();
  time = minutes * 60;
  modeText.textContent = mode;
  updateDisplay();

  document.querySelectorAll(".mode-selector button")
    .forEach(btn => btn.classList.remove("active"));

  event.target.classList.add("active");
}

function changeQuote() {
  const type = document.getElementById("goalType").value;
  const randomQuote =
    quotes[type][Math.floor(Math.random() * quotes[type].length)];
  document.getElementById("quote").textContent = randomQuote;
}

updateDisplay();
