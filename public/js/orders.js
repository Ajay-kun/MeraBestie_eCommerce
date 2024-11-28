document.addEventListener('DOMContentLoaded', function() {
   
    const cancelButtons = document.querySelectorAll('.btn-cancel');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel this order?')) {
                const orderCard = this.closest('.order-card');
                const statusElement = orderCard.querySelector('.order-status');
                statusElement.textContent = 'Cancelled';
                statusElement.className = 'order-status cancelled';
                this.remove();
            }
        });
    });
}); 