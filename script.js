const affirmations = [
  "I am strong, capable, and full of positive energy.",
  "Every day is a fresh start.",
  "I attract good things into my life.",
  "I believe in myself and my abilities.",
  "I deserve love, success, and happiness.",
  "I am calm, patient, and in control.",
  "My potential is endless.",
  "I grow through what I go through."
];

function generateAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").textContent = affirmations[randomIndex];
}
