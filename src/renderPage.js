export const renderPage = (id, main, menu, contact) => {
  const button = document.querySelector(`#${id}`);
  button.classList.add("active");
  switch (id) {
    case "mainButton":
      main();
      break;
    case "menuButton":
      menu();
      break;
    case "contactButton":
      contact();
      break;
  }
};
