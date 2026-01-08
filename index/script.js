const text = document.getElementById("text");
const btn = document.getElementById("btn");

const defaultText = text.textContent;
const defaultBtn = btn.textContent;

let isPressed = true;

btn.addEventListener("click", () => {
  if (isPressed) {
    text.textContent = "押されました";
    text.style.fontSize = "40px";
    btn.textContent = "元に戻す";
  } else {
    text.textContent = defaultText;
    btn.textContent = defaultBtn;
    text.style.fontSize = "16px";
  }
  isPressed = !isPressed;
});
