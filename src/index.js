import "./styles.css";
import { renderHeader } from "./header";
import { renderMain } from "./mainPage";
import { renderContact } from "./contactPage";
import { renderMenu } from "./menuPage";
import { renderFooter } from "./footer";
import { initialization } from "./initialization";
import { clearPage } from "./clearPage";
import { renderPage } from "./renderPage";

initialization(renderHeader, renderMain, renderFooter);

const buttons = document.querySelectorAll(".header__button");
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const target = ev.target.closest(".header__button");
    clearPage();
    console.log(target.id);
    renderPage(target.id, renderMain, renderMenu, renderContact);
  });
});
