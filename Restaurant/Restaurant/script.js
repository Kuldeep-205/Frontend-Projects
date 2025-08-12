// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    menuToggle.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Search Filter on index.html
    const searchInput = document.querySelector("#foodSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            let filter = searchInput.value.toLowerCase();
            let items = document.querySelectorAll(".food-menu-box");
            items.forEach(item => {
                let text = item.innerText.toLowerCase();
                item.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    // Price calculation on order.html
    const qtyInput = document.querySelector("#quantity");
    const priceDisplay = document.querySelector("#totalPrice");
    if (qtyInput && priceDisplay) {
        const pricePerItem = parseFloat(priceDisplay.dataset.price);
        qtyInput.addEventListener("input", function() {
            let qty = parseInt(qtyInput.value) || 1;
            priceDisplay.textContent = "$" + (pricePerItem * qty).toFixed(2);
        });
    }
});
