const buttons = [...document.querySelectorAll(".nimbus")];

function runPublish(button) {
  if (button.dataset.busy === "true") return;
  button.dataset.busy = "true";
  button.classList.remove("is-loading", "is-done");
  button.querySelector(".button-text").textContent = "Loading";
  void button.offsetWidth;
  button.classList.add("is-loading");

  window.setTimeout(() => {
    button.classList.remove("is-loading");
    button.classList.add("is-done");
    button.querySelector(".button-text").textContent = "Done";
  }, 1550);

  window.setTimeout(() => {
    button.classList.remove("is-done");
    button.querySelector(".button-text").textContent = "Publish";
    button.dataset.busy = "false";
  }, 3050);
}

buttons.forEach(button => button.addEventListener("click", () => runPublish(button)));
