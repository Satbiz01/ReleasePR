let cards = document.querySelectorAll('.catalog-list-item')
cards.forEach(card => {
    let icons = card.querySelector('.card-icons');

  
    card.addEventListener('mouseenter', () => {
      icons.classList.remove('hidden');
    });

    card.addEventListener('mouseleave', () => {
      icons.classList.add('hidden');
    });
  });

function goToCart() {
  window.location.href = "cart.html";
}

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-cart")) {
      let btn_bye = event.target
      let card = btn_bye.closest(".catalog-list-item")
      let product_info = {
        title:card.querySelector(".catalog-list-item-p-st").innerText,
        img: card.querySelector(".catalog-list-item-img").getAttribute("src"),
        price: card.querySelector(".catalog-list-item-p-price").innerText
      }
    console.log(product_info)
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product_info)
    localStorage.setItem("cart", JSON.stringify(cart))
  }
});