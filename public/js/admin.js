
document.addEventListener('DOMContentLoaded', function() {
   
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this product?')) {
                
                const row = this.closest('tr');
                row.style.animation = 'fadeOut 0.3s';
                setTimeout(() => row.remove(), 300);
            }
        });
    });

    
    const productForm = document.getElementById('addProductForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Product added successfully! (Demo only)');
            this.reset();
        });
    }
}); 