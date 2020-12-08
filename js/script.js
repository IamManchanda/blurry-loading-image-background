const loadText = document.getElementById("loading-text");
const bg = document.getElementById("bg");

const interval = setInterval(blurring, 30);
let load = 0;

function blurring() {
  load++;
  if (load > 99) clearInterval(interval);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
  // Source: https://stackoverflow.com/a/23202637/3301436
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
