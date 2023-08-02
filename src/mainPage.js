import mainImage from "../img/photo-1572715376701-98568319fd0b.avif";

export const renderMain = () => {
  const header = document.querySelector("#header");
  const mainPage = `
    <div class="page main" id="mainPage">
        <div class="mainContentWrapper">
            <h1 class="mainHeading">fancy heading</h1>
            <img
                class="mainImg"
                src="${mainImage}"
                alt="chef working of a plate"
                width="320"
                height="320"
                loading="lazy" />
            <p class="mainP">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sed
                ut vel ipsa in aliquam exercitationem consectetur iusto, saepe hic
                aliquid, id cumque suscipit, impedit iure quisquam neque. Odit,
                totam blanditiis porro aut maiores animi facilis tenetur
                reprehenderit quisquam, quo veniam mollitia vero, consectetur
                assumenda dignissimos dolorum iusto in eum.
            </p>
        </div>
    </div>`;

  header.insertAdjacentHTML("afterend", mainPage);
};
