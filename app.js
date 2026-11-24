const status = document.querySelector("#demo-status");
const toast = document.querySelector("#toast-message");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

document.querySelectorAll("[data-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const style = button.dataset.demo;
    status.textContent = `${style} button clicked — .btn-${style.toLowerCase()} is ready to use.`;
  });
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const className = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(className);
      showToast(`Copied .${className} to clipboard`);
    } catch (error) {
      showToast("Clipboard access failed. Select and copy the class name instead.");
      console.error("Could not copy the Bootstrap button class:", error);
    }
  });
});
