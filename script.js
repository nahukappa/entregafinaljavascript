document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");
    const productSelect = document.getElementById("product-select");
    const quoteForm = document.getElementById("quote-form");
    const quoteResult = document.getElementById("quote-result");

   
    const products = [
        { id: 1, name: "Servicio Básico", price: 50 },
        { id: 2, name: "Servicio Premium", price: 100 },
        { id: 3, name: "Producto A", price: 30 },
        { id: 4, name: "Producto B", price: 20 }
    ];

   
    function loadProducts() {
        products.forEach(product => {
            
            const productCard = document.createElement("div");
            productCard.classList.add("product-item");
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
            `;
            productsContainer.appendChild(productCard);

           
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    //calcular cotizacion
    function calculateQuote(event) {
        event.preventDefault();

        const selectedProductId = parseInt(productSelect.value);
        const quantity = parseInt(document.getElementById("quantity").value);

        const selectedProduct = products.find(p => p.id === selectedProductId);

        if (selectedProduct) {
            const total = selectedProduct.price * quantity;
            quoteResult.textContent = `Total: $${total}`;
        }
    }

    //inicializar
    loadProducts();
    quoteForm.addEventListener("submit", calculateQuote);
});
