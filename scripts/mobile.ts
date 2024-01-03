import { Menu, X, createElement, createIcons } from "lucide";

export const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

export const handleMobileMenu = () => {
  mobileMenu?.classList.toggle("w-screen");
  mobileMenu?.classList.toggle("w-0");
  mobileMenuButton?.classList.toggle("text-white");

  const menuIcon = createElement(
    mobileMenu?.classList.contains("w-screen") ? X : Menu
  );
  menuIcon.setAttribute("class", "w-10 h-10");

  mobileMenuButton?.replaceChildren(menuIcon);
};

createIcons({ icons: { Menu } });
