var thumbnailImgAll = document.querySelectorAll(".thumbnail");

thumbnailImgAll.forEach((thumbnailEl) => {
  thumbnailEl.addEventListener("mouseover", function () {
    let thumbnailImg = thumbnailEl.firstElementChild;
    let modalSlide = thumbnailImg.nextElementSibling;
    console.log(modalSlide);
    modalSlide.classList.remove("hide");
  });
});
