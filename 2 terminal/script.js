const words = ["coder", "maker", "hobbiest"];
let i = 0;
let wordIndex = 0;
let isDeleting = false;
const speed = 70;
const pause = 3000;
const element = document.getElementById("rotating-word");

function typeEffect() {
  const current = words[wordIndex];
  const visible = isDeleting
    ? current.substring(0, i--)
    : current.substring(0, i++);

  element.textContent = visible;

  if (!isDeleting && i === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, pause);
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
