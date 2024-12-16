document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            const item = {
                id: product.dataset.id,
                name: product.dataset.name,
                price: parseInt(product.dataset.price)
            };
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${item.name} добавлен в корзину!`);
        });
    });

    if (document.getElementById("cart-container")) {
        const cartContainer = document.getElementById("cart-container");
        const totalPriceEl = document.getElementById("total-price");
        let total = 0;
        cart.forEach(item => {
            const div = document.createElement("div");
            div.textContent = `${item.name} - ${item.price}₽`;
            cartContainer.appendChild(div);
            total += item.price;
        });
        totalPriceEl.textContent = `Итоговая цена: ${total}₽`;
    }

    const theme = localStorage.getItem("theme") || "light";
    document.body.className = theme;
    if (document.getElementById("theme")) {
        document.getElementById("theme").value = theme;
    }
});

function changeTheme() {
    const theme = document.getElementById("theme").value;
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}
