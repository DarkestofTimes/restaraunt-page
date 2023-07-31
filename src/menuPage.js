export const renderMenu = () => {
  const header = document.querySelector("#header");
  const menuPage = `
    <div class="page menu" id="menuPage">
    <div class="menuContainer">
      <h2 class="menuHeading">fancy boneappletea</h2>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
      <div class="menuItem">
        <img
          src=""
          alt=""
          class="menuImg"
          width="300px"
          height="300px"
          loading="lazy" />
        <h3 class="menuItemHeading">fancy french words</h3>
        <p class="menuItemDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime
          similique vel quos praesentium, esse corporis libero ad, at, iure
          ipsam? Quam atque saepe sequi?
        </p>
        <p class="menuItemPrice">500$</p>
      </div>
    </div>
  </div>`;

  header.insertAdjacentHTML("afterend", menuPage);
};
