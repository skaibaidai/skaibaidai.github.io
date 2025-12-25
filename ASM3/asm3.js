document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.querySelector(".email-form-container");
  // Thay thế infoContent bằng infoDetails (thông tin cá nhân chi tiết)
  const infoDetails = document.querySelector(".info-details");
  const emailInput = document.querySelector("#emailInput");
  const errorText = document.querySelector(".error-text");
  const btn = document.querySelector("#submitEmail");

  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        errorText.textContent = "Email không hợp lệ!";
        errorText.classList.remove("hide");
      } else {
        errorText.classList.add("hide");

        if (emailForm) {
          emailForm.classList.add("hide");
        }

        if (infoDetails) {
          infoDetails.classList.remove("hide");
        }
      }
    });
  }
});
document.querySelectorAll(".profile-item").forEach((block) => {
  const title = block.querySelector(".toggle-title");
  const content = block.querySelector(".content");
  const btn = block.querySelector(".toggle-btn");

  if (!title || !content || !btn) return;

  title.addEventListener("click", () => toggle());
  btn.addEventListener("click", () => toggle());

  function toggle() {
    const isHidden = content.classList.contains("hide");

    if (isHidden) {
      content.classList.remove("hide");
      btn.textContent = "View Less";
    } else {
      content.classList.add("hide");
      btn.textContent = "View More";
    }
  }
});
