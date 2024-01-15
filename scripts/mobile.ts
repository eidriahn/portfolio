import { Menu, X, createElement } from "lucide";

export const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

export const handleMobileMenu = () => {
  console.log("yesa =>");
  mobileMenu?.classList.toggle("max-h-0");
  mobileMenu?.classList.toggle("max-h-screen");

  const menuIcon = createElement(
    mobileMenu?.classList.contains("max-h-0") ? Menu : X
  );
  menuIcon.setAttribute("class", "w-10 h-10");

  mobileMenuButton?.replaceChildren(menuIcon);
};

export const handleMobileMenuClose = () => {
  mobileMenu?.classList.add("max-h-0");
  mobileMenu?.classList.remove("max-h-screen");

  const menuIcon = createElement(Menu);
  menuIcon.setAttribute("class", "w-10 h-10");

  mobileMenuButton?.replaceChildren(menuIcon);
};
