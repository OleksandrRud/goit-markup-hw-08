(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile__button--open"),
    closeMenuBtn: document.querySelector(".mobile__button--close"),
    menu: document.querySelector(".mobile"),
    body: document.querySelector(".body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();