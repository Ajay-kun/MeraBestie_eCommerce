router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        const categories = [...new Set(products.map(p => p.category))];
        
   
        const categoryData = {};
        categories.forEach(category => {
            categoryData[category] = {
                products: products.filter(p => p.category === category)
            };
        });

        res.render('admin/products', {
            user: req.user,
            categories,
            categoryData
        });
    } catch (error) {
        console.error('Error loading products:', error);
        res.status(500).send('Error loading products page');
    }
}); 