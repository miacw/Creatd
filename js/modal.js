let modalBtnEls = document.querySelectorAll(".modal-btn");
let modal = document.querySelector(".main-modal");
let modalImg = document.querySelector(".modal-img");
let body = document.querySelector("body");

modalBtnEls.forEach((modalBtn) => {
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

modal.addEventListener("click", function () {
  modal.classList.remove("flex");
  body.classList.remove("stop-scroll");
});
