const keys = ["A", "B", "C", "D", "G", "H", "J", "K", "L", "F"]; // масив клавіш які треба буде натиснути
const key = document.getElementById("key");
const btn = document.getElementById("btn");
const happyImg = document.getElementById("happy-cat");
const sadImg = document.getElementById("sad-cat");

function updateKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length); // генерую рандомний індекс для клавіш
  key.textContent = keys[currentKeyIndex];
  sadImg.classList.add("hidden");
  happyImg.classList.add("hidden");
}

document.addEventListener("keydown", (event) => {
  if (event.key.toUpperCase() === keys[currentKeyIndex]) {
    PNotify.success({ text: "Маладес" });
    happyImg.classList.remove("hidden");
    sadImg.classList.add("hidden");
    setTimeout(updateKey, 500);
  } else {
    PNotify.error({ text: "Куда я жмал" });
    sadImg.classList.remove("hidden");
    happyImg.classList.add("hidden");
  }
});

btn.addEventListener("click", () => {
  updateKey();
  PNotify.info({ text: "Гра перезапущена" });
});
updateKey();
