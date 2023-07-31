export const renderFooter = () => {
  const content = document.querySelector("#content");
  const footer = `
    <div class="footer">
    <p class="footerP">
      Made by
      <a href="https://github.com/DarkestofTimes" target="_blank"
        >DarkTimes</a
      >
    </p>
    <p class="footerP">
      Photo by
      <a
        href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        >Jason Leung</a
      >
      on
      <a
        href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        >Unsplash</a
      >
    </p>
  </div>`;

  content.insertAdjacentHTML("beforeend", footer);
};
