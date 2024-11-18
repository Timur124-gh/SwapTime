// Открытие чата
function openChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
}

// Отправка сообщения
function sendMessage(event) {
  if (event.key === 'Enter') {
    const messageInput = document.getElementById('chat-input');
    const message = messageInput.value;
    if (message.trim() !== '')
let userRating = 0;

// Функция для выбора рейтинга
function rateProduct(stars) {
  userRating = stars;
  document.getElementById('rating-message').textContent = `Ваш рейтинг: ${stars}`;

  // Обновляем цвет звезд
  const starElements = document.querySelectorAll('.star');
  starElements.forEach((star, index) => {
    star.style.color = index < stars ? '#ffcc00' : '#ccc';
  });
}
let cart = [];  // Хранение товаров в корзине
let totalPrice = 0;  // Общая стоимость аренды

// Функция для добавления товара в корзину
function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  totalPrice += price;

  // Обновляем UI с товарами в корзине
  updateCartUI();
}

// Функция для обновления UI корзины
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItems.innerHTML = ''; // Очищаем текущий список товаров
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} ₽`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = totalPrice; // Обновляем общую цену
}

// Функция для оформления аренды
function checkout() {
  if (cart.length === 0) {
    alert('Ваша корзина пуста!');
    return;
  }

  const userConfirmed = confirm(`Вы подтверждаете аренду на сумму ${totalPrice} ₽?`);
  if (userConfirmed) {
    alert('Спасибо за заказ! Ваша аренда оформлена.');
    // Очистить корзину после оформления
    cart = [];
    totalPrice = 0;
    updateCartUI(); // Обновляем корзину
  }
}
