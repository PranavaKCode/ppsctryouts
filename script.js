// script.js
let trackingStarted = false;
let focusViolations = 0;

const focusCountEl = document.getElementById("focus-count");
const focusHiddenInput = document.getElementById("focusViolations");
const startedAtInput = document.getElementById("startedAt");
const submittedAtInput = document.getElementById("submittedAt");
const statusMsg = document.getElementById("status-msg");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("tryout-form");

function updateFocusDisplay() {
  focusCountEl.textContent = focusViolations.toString();
  focusHiddenInput.value = focusViolations.toString();
}

function recordFocusLoss() {
  if (!trackingStarted) return;
  focusViolations += 1;
  updateFocusDisplay();
}

function startTracking() {
  if (trackingStarted) return;
  trackingStarted = true;
  startedAtInput.value = new Date().toISOString();
  startBtn.disabled = true;
  submitBtn.disabled = false;

  statusMsg.textContent =
    "Timer started. Focus tracking is now active. Good luck!";
  statusMsg.className = "status ok";
}

// Focus / visibility events
window.addEventListener("blur", () => {
  recordFocusLoss();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    recordFocusLoss();
  }
});

// Start button
startBtn.addEventListener("click", () => {
  startTracking();
});

// Submit handler – send to Formspree via fetch
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!trackingStarted) {
    statusMsg.textContent =
      "Please click 'Start timer & enable tracking' before submitting.";
    statusMsg.className = "status error";
    return;
  }

  submittedAtInput.value = new Date().toISOString();

  const formData = new FormData(form);

  statusMsg.textContent = "Submitting...";
  statusMsg.className = "status";

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      statusMsg.textContent =
        "Submission received! You may now close this tab.";
      statusMsg.className = "status ok";
      submitBtn.disabled = true;
    } else {
      statusMsg.textContent =
        "There was a problem submitting your answers. Please try again.";
      statusMsg.className = "status error";
    }
  } catch (err) {
    console.error(err);
    statusMsg.textContent =
      "There was a problem submitting your answers. Please check your connection and try again.";
    statusMsg.className = "status error";
  }
});
