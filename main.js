function playAudio(e) {
  if (e.type === "click") {
    audio = document.querySelector('audio[data-key="13"]');
  } else if (e.type === "keydown") {
    audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  }
  if (!audio) {
    return;
  }
  var transition = document.querySelector(".button");
  transition.classList.add("active");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("active");
}

var transition = document.querySelector(".button");
transition.addEventListener("transitionend", removeTransition);

window.addEventListener("keydown", playAudio, false);
transition.addEventListener("click", playAudio, false);
