
const products = [
  { id:1, name:"Rose Bouquet", price:499, img:"https://tse3.mm.bing.net/th/id/OIP.bVRTmLjV4JUoGbfuJSH2SgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { id:2, name:"Tulip Bundle", price:399, img:"https://tse4.mm.bing.net/th/id/OIP.4le1uiB0ekwliZhjG74uEwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { id:3, name:"Sunflower Basket", price:449, img:"https://tse4.mm.bing.net/th/id/OIP.kXDpC166Rs9c1tX5yjwUMQHaHM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { id:4, name:"Mixed Flower Box", price:599, img:"https://tse3.mm.bing.net/th/id/OIP.Ai_rJDbCc6kft154QA1TywHaIE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"}
];

let cart = [];

const container = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const modal = document.getElementById("cartModal");

function renderProducts(){
  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.innerText = cart.length;
}

document.getElementById("cartBtn").onclick = () => {
  modal.classList.remove("hidden");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });

  totalPrice.innerText = total;
};

document.getElementById("closeCart").onclick = () => modal.classList.add("hidden");

renderProducts();
