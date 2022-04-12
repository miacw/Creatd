let modalBtnEls = document.querySelectorAll(".modal-btn");
let modal = document.querySelector(".main-modal");
let modalImg = document.querySelector(".modal-img");
let body = document.querySelector("body");

if (window.screen.width > 580) {
  modalBtnEls.forEach((modalBtn) => {
    if ((modalBtn.disabled = true)) {
      modalBtn.removeAttribute("disabled");
    }
    modalBtn.addEventListener("click", function () {
      let thumbnail =
        this.parentElement.parentElement.previousElementSibling.getAttribute(
          "src"
        );

      modalImg.src = `${thumbnail}`;
      modal.classList.add("flex");
      body.classList.add("stop-scroll");
    });
  });
} else {
  modalBtnEls.forEach((modalBtn) => {
    modalBtn.disabled = true;
  });
}

modal.addEventListener("click", function () {
  modal.classList.remove("flex");
  body.classList.remove("stop-scroll");
});
