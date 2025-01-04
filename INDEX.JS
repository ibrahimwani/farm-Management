const buttons = document.querySelectorAll(".data-button");

const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("close-overlay");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const overlayText = document.getElementById("overlay-text");
    const content = document.getElementById(targetId).innerHTML;
    overlay.style.display = "flex";
    overlayText.innerHTML = content;
  });
});

closeOverlay.addEventListener("click", (event) => {
  //   if (event.target === overlay) {
  overlay.style.display = "none";
  //   }
});

// Close overlay when clicking the close button
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
