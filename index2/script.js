const text = document.getElementById("text");
const btn = document.getElementById("btn");

const defaultText = text.textContent;
const defaultBtn = btn.textContent;

btn.addEventListener("click", () => {
  //const isChanged = text.classList.contains('changed');
  const isChanged = text.classList.toggle("changed");

  if (isChanged) {
    // if (text.classList.contains('changed')) {
    text.textContent = "メッセージを表示する";
    btn.textContent = "ボタンが押されました。";
  } else {
    text.textContent = defaultText;
    btn.textContent = defaultBtn;
  }
});
