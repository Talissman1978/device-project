const header = document.querySelector(".main-header");
const plusBtn = document.querySelector(".catalog-circle");
const cartOverLink = document.querySelector(".cart-over-link");
const popover = document.querySelector(".popover");

plusBtn.addEventListener('click', () => {
  header.classList.toggle('open')
})

cartOverLink.addEventListener('click', () => {
  popover.classList.toggle('popover-open')
})