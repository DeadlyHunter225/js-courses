
const body = document.querySelector("body");
const vedro = body.querySelector("#vedro");
const vedroWidth = vedro.offsetWidth;
const vedroHeight = vedro.clientHeight;

const score = body.querySelector("#score");
let accumulator = 0;
score.innerHTML = accumulator;

// Vedro
function moverVedro(e) {
  if (document.documentElement.clientWidth - e.clientX > vedro.offsetWidth) { 
    vedro.style.left = e.clientX + "px";
  }; 
};

// Fish
function getRandomLeftPosition(elemWidth) {
  let x = Math.random() * (document.documentElement.clientWidth - elemWidth);
  return Math.floor(x);
};

function creator() {
  let fish = document.createElement("div"); 
  fish.classList.add("fish");
  body.appendChild(fish);
  moverFish(fish);
};

function moverFish(elem) {
  const elemWidth = elem.offsetWidth;
  const elemHeight = elem.clientHeight;
  const randomLeftPosition = getRandomLeftPosition(elemWidth);
  let topPx = 0;

  elem.style.left = randomLeftPosition + "px";

  const stepInterval = setInterval(() => {

    topPx = topPx + 5;

    elem.style.top = topPx + "px";

    catcher(vedro ,elem);

    if (topPx - elemHeight >= document.documentElement.clientHeight) {
      accumulator -= 10;
      score.innerHTML = accumulator; 
      destroyer(elem);
      clearInterval(stepInterval);       
    }
  }, 10);
}

function destroyer(mu) {
  body.removeChild(mu);  
};

function catcher(vedro, fish) {
  const vedroСoordinates = vedro.getBoundingClientRect();
  const fishСoordinates = fish.getBoundingClientRect();
  const leftLimit = vedroСoordinates.left - fishСoordinates.width/2;
  const rightLimit = vedroСoordinates.right + fishСoordinates.width/2;

  if ((fishСoordinates.left >= leftLimit && fishСoordinates.right <= rightLimit) &&  fishСoordinates.bottom >= vedroСoordinates.top ) {
    accumulator += 1;
    score.innerHTML = accumulator;   
  }
}

document.addEventListener("mousemove", function(e) {
  moverVedro(e);  
})

setInterval(() => {
  creator();
}, 500)