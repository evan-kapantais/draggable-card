const card = document.getElementById("card");

card.onmousedown = function() {
  this.addEventListener("mousemove", handleMove);
  this.classList.add("clicked");

  document.addEventListener("mousemove", handleMove);
}

card.onmouseup = function() {
  this.removeEventListener("mousemove", handleMove);
  this.classList.remove("clicked");

  document.removeEventListener("mousemove", handleMove);
}

function handleMove(event) {

  let coordX = event.clientX - card.offsetWidth / 2 + "px";
  let coordY = event.clientY - card.offsetHeight / 2 + "px";

  card.style.left = coordX;
  card.style.top = coordY;

  if (card.style.top < 0) {
    card.style.top = 0;
  }

  if (card.style.left < 0) {
    card.style.left = 0;
  }
}