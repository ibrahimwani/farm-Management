const buttons = document.querySelectorAll(".data-button");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");
const closeOverlay = document.getElementById("close-overlay");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(targetId).innerHTML;
    overlayText.innerHTML = content;
    overlay.style.display = "flex";
  });
});

closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

const buttonsOverlay2nd = document.querySelectorAll(".data-button-2nd");
const overlay2nd = document.getElementById("overlay-2nd");
const overlayText2nd = document.getElementById("overlay-text-2nd");
const closeOverlay2nd = document.getElementById("close-overlay-2nd");

buttonsOverlay2nd.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(targetId).innerHTML;
    overlayText2nd.innerHTML = content;
    overlay2nd.style.display = "flex";
  });
});

closeOverlay2nd.addEventListener("click", () => {
  overlay2nd.style.display = "none";
});
