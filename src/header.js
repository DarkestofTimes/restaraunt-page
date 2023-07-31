export const renderHeader = () => {
  const content = document.querySelector("#content");
  const header = `
      <div class="header" id="header">
       
        <nav>
          <ul>
            <li class="header__li">
              <button id="mainButton" class="header__button">
                <span class="header__buttonText">home</span>
              </button>
            </li>
            <li class="header__li">
              <button id="menuButton" class="header__button">
                <span class="header__buttonText">menu</span>
              </button>
            </li>
            <li class="header__li">
              <button id="contactButton" class="header__button">
                <span class="header__buttonText">contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>`;

  content.insertAdjacentHTML("afterbegin", header);
};
