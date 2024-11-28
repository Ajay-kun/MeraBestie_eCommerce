document.getElementById('productForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/admin/add-product', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
         
            showNotification('Product added successfully!', 'success');
            
            
            updateDashboardStats();
            
     
            this.reset();
            document.getElementById('imagePreview').style.display = 'none';
            document.querySelector('.upload-placeholder').style.display = 'flex';


            setTimeout(() => {
                window.location.href = '/admin/dashboard';
            }, 1500);
        } else {
            showNotification('Failed to add product. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    }
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);


    setTimeout(() => {
        notification.remove();
    }, 3000);
}

async function updateDashboardStats() {
    try {
        const response = await fetch('/admin/dashboard-stats');
        const stats = await response.json();
        
     
        if (window.location.pathname === '/admin/dashboard') {
            document.querySelector('.total-products .stat-number').textContent = stats.totalProducts;
     
        }
    } catch (error) {
        console.error('Error updating stats:', error);
    }
} 