import { createElement, createIcons, Menu, X } from "lucide";

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("w-screen");
  mobileMenu?.classList.toggle("w-0");
  mobileMenuButton.classList.toggle("text-white");
  const menuIconX = createElement(
    mobileMenu?.classList.contains("w-screen") ? X : Menu
  );
  menuIconX.setAttribute("class", "w-10 h-10 z-30");

  mobileMenuButton.replaceChildren(menuIconX);
});

createIcons({ icons: { Menu } });
