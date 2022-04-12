var navbar = document.querySelector(".navigation");
var aboutContainer = document.querySelector(".about-div");
var main = document.querySelector(".main");
var aboutContainerOffset = aboutContainer.offsetHeight;
var aboutContainerOffsetTop = aboutContainer.offsetTop;
var aboutBtn = document.querySelector(".about");

window.onscroll = function () {
  stickyScroll();
};

aboutBtn.addEventListener("click", function () {
  aboutIndex();
});

function stickyScroll() {
  if (window.pageYOffset >= main.offsetHeight - 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    console.log(main.offsetHeight);
    console.log(window.pageYOffset);
  }
}

function aboutIndex() {
  window.scrollTo(0, main.offsetHeight);
  console.log("scroll");
}
