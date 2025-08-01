const products = [
  { id: 1, name: "Shoes", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyy9QPOZ-qGvhXVRHEh99Ym6535RwSJ6qN9IlUYgsFyEIH5EGKcwvvnAKZPVOfbVxF8anACKpNhh32eT8QCUEK2ohr7jI4tM54tyOfmITdfqRGyqRrIz5vwA" },
  { id: 2, name: "T-shirt", price: 499, image: "https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg" },
  { id: 3, name: "Mobile phone", price: 111199, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-storage-select-202409-6-9inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=90&.v=cHljZ3VQbTFnaDEvbFVKOExvRXVPbEIvTXY5NjBUQVhVcnFORUt4SFI2RHpVbGorSnlad2JxMmYyeHpKTjlBZC93dTVzOEphdmJzWEZSV3JrcnJ5Um9MeXJHUnUva2huMjl4akFHOXNwVjFOU1YvbEhQdCtlZmMrckc2K3RtQzRnRlQyZ2lURjdzSEo5ZmdxUXpVQlVn&traceId=1" }
];

let cart = [];
let total = 0;

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  total += product.price;
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = total;
}
