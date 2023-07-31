export const clearPage = () => {
  const page = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".header__button");
  buttons.forEach((button) => button.classList.remove("active"));
  page.forEach((page) => page.remove());
};
