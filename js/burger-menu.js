// Get Elements
let burgerMenu = document.querySelector(".burger-icon");
let nav = document.querySelector(".nav");

// burgerMenu.addEventListener("click", function () {
//   nav.classList.toggle("fade");
// });

burgerMenu.addEventListener("click", function (event) {
  event.preventDefault();

  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
    nav.style.height = "auto";

    let height = nav.clientHeight + 50 + "px";

    nav.style.height = "0px";

    setTimeout(function () {
      nav.style.height = height;
    }, 0);
  } else {
    nav.style.height = "0px";

    nav.addEventListener(
      "transitionend",
      function () {
        nav.classList.remove("active");
      },
      {
        once: true,
      }
    );
  }
});
