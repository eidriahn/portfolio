import { handleMobileMenu } from "./mobile";

const navLinkElements = document.getElementsByName("link");

navLinkElements.forEach((element) => {
  element.addEventListener("click", (ev) => {
    const section = document.getElementById(element.getAttribute("value")!);

    if (window.innerWidth <= 1024) {
      handleMobileMenu();
    }

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
