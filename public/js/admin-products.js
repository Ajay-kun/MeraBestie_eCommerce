document.addEventListener('DOMContentLoaded', function() {
    
    const tabs = document.querySelectorAll('.tab-btn');
    const categorySections = document.querySelectorAll('.category-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

         
            const selectedCategory = tab.dataset.category;
            categorySections.forEach(section => {
                if (selectedCategory === 'all' || section.dataset.category === selectedCategory) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });


    const searchInput = document.getElementById('productSearch');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productCategory = card.querySelector('.product-category').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


function editProduct(productId) {
    window.location.href = `/admin/edit-product/${productId}`;
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        fetch(`/admin/delete-product/${productId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
        
                const productCard = document.querySelector(`[data-product-id="${productId}"]`);
                productCard.remove();
            } else {
                alert('Failed to delete product');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while deleting the product');
        });
    }
} 