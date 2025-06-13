let container_card = document.querySelector(".catalog-list")

cart = JSON.parse(localStorage.getItem("cart")) || [] 

cart.forEach(card => {
  let cardHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${catalog-list-item-img.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${catalog-list-item-p-st.title}</h5>
        <p class="card-text"><small class="text-muted">${catalog-list-item-p-price.price}</small></p>
      </div>
    </div>
  </div>
</div>
`
container_card.insertAdjacentHTML("beforeend", cardHTML);
});