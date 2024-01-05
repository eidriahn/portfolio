import { handleMobileMenuClose } from "./mobile";

const navbar = document.getElementById("navbar");
let previousScrollPosition = window.scrollY;

if (navbar) {
  window.onscroll = function () {
    let currentScrollPosition = window.scrollY;

    if (previousScrollPosition > currentScrollPosition) {
      navbar.style.top = "0";
    } else {
      handleMobileMenuClose();
      navbar.style.top = "-110px";
    }
    previousScrollPosition = currentScrollPosition;
  };
}
