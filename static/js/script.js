document.addEventListener("DOMContentLoaded", () => {
    displayCart(); // Отображаем корзину при загрузке страницы
});

// Добавление товара в корзину
function addToCart(id, name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Получаем корзину
    cart.push({ id, name, price }); // Добавляем товар
    localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем в localStorage
    alert(`${name} добавлен в корзину!`);
}

// Отображение корзины на странице cart.html
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceEl = document.getElementById("total-price");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = ""; // Очищаем контейнер перед заполнением
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>${item.name} - ${item.price}₽</p>
            <button onclick="removeFromCart(${index})">Удалить</button>
        `;
        cartContainer.appendChild(div);
        totalPrice += item.price;
    });

    totalPriceEl.textContent = `Итоговая цена: ${totalPrice}₽`;
}

// Удаление товара из корзины
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Удаляем товар по индексу
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Обновляем корзину
}

// Очистка корзины
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Тема (светлая/тёмная)
function changeTheme() {
    const theme = document.getElementById("theme").value;
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme") || "light";
    document.body.className = theme;
    if (document.getElementById("theme")) {
        document.getElementById("theme").value = theme;
    }
});
