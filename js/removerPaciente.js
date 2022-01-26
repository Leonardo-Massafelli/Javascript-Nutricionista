const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (evt) => {
  evt.target.parentNode.classList.add("fadeOut");

  setTimeout(() => {
    evt.target.parentNode.remove();
  }, 500);
});
