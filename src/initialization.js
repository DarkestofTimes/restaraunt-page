export const initialization = (piece1, piece2, piece3) => {
  piece1();
  const button = document.querySelector("#mainButton");
  button.classList.add("active");
  piece2();
  piece3();
};
