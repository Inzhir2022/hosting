window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('menu__list_active');
    });
  });
});
