import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' },
    cart: []
}));
app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});


app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});


app.set('view engine', 'ejs');
app.set('views', './views');


const categoryData = {
    stationery: {
        title: 'Stationery Items',
        description: 'Premium quality stationery for all your needs',
        image: '/images/categories/stationery.jpg',
        products: [
            {
                name: 'Premium Notebook Set',
                price: 599,
                description: 'Set of 3 premium notebooks with leather cover, perfect for journaling',
                 image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Fountain Pen Collection',
                price: 1299,
                description: 'Elegant fountain pens with smooth writing experience',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Artistic Pencil Box',
                price: 449,
                description: 'Wooden pencil box with intricate designs and compartments',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Designer Sticky Notes',
                price: 199,
                description: 'Colorful sticky notes in various shapes and sizes',
                 image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Luxury Desk Organizer',
                price: 899,
                description: 'Premium wooden desk organizer with multiple compartments',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Calligraphy Set',
                price: 1499,
                description: 'Complete calligraphy set with nibs, ink, and guide book',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Washi Tape Collection',
                price: 299,
                description: 'Set of 10 decorative washi tapes in various patterns',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Premium Planner',
                price: 799,
                description: '2024 planner with goal setting and tracking features',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Art Pencil Set',
                price: 699,
                description: 'Professional grade art pencils in wooden case',
                image: '/images/categories/stationery.jpg'
            },
            {
                name: 'Handmade Paper Set',
                price: 399,
                description: 'Eco-friendly handmade paper for special occasions',
                image: '/images/categories/stationery.jpg'
            }
        ]
    },
    'greeting-cards': {
        title: 'Greeting Cards & Gift Items',
        description: 'Beautiful cards and gifts for every occasion',
        image: '/images/categories/greeting-cards.jpg',
        products: [
            {
                name: 'Birthday Card Collection',
                price: 299,
                description: 'Set of 5 handcrafted birthday cards with envelopes',
                image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Wedding Wishes Box',
                price: 799,
                description: 'Elegant box with wedding cards and accessories',
                 image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Pop-up Anniversary Card',
                price: 399,
                description: '3D pop-up card for special anniversary celebrations',
                 image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Thank You Cards Set',
                price: 249,
                description: 'Pack of 10 elegant thank you cards with gold foiling',
                 image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Festive Card Bundle',
                price: 599,
                description: 'Collection of cards for all major festivals',
                image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'New Baby Wishes Kit',
                price: 499,
                description: 'Congratulatory cards and small gifts for new parents',
                image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Friendship Day Special',
                price: 349,
                description: 'Friendship bands with matching cards',
                image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Get Well Soon Package',
                price: 449,
                description: 'Cheerful cards with small comfort gifts',
                image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Graduation Wishes Set',
                price: 399,
                description: 'Congratulatory cards for graduates',
                 image: '/images/categories/greeting-cards.jpg'
            },
            {
                name: 'Love Notes Collection',
                price: 299,
                description: 'Romantic cards with sweet messages',
                 image: '/images/categories/greeting-cards.jpg'
            }
        ]
    },
    couples: {
        title: 'Gift Items for Couples',
        description: 'Special gifts to celebrate your love',
        image: '/images/categories/couples.jpg',
        products: [
            {
                name: 'Couple Watch Set',
                price: 2499,
                description: 'Matching watches for couples in premium case',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Love Story Photo Frame',
                price: 899,
                description: 'Multiple photo frame with romantic design',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Couples Coffee Mugs',
                price: 599,
                description: 'Set of 2 matching coffee mugs with love quotes',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Love Letter Kit',
                price: 499,
                description: 'Beautiful stationery set for writing love letters',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Matching Cushions',
                price: 799,
                description: 'Pair of cushions with complementary designs',
                 image: '/images/categories/couples.jpg'
            },
            {
                name: 'Romance Gift Hamper',
                price: 1999,
                description: 'Curated gift box with various couple items',
                 image: '/images/categories/couples.jpg'
            },
            {
                name: 'Couple Bracelet Set',
                price: 699,
                description: 'Matching bracelets with custom engraving',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Love Journey Album',
                price: 899,
                description: 'Customizable photo album with romantic themes',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Couple Perfume Set',
                price: 1499,
                description: 'His and her matching fragrances',
                image: '/images/categories/couples.jpg'
            },
            {
                name: 'Anniversary Special Box',
                price: 2999,
                description: 'Luxury gift box for anniversary celebrations',
                image: '/images/categories/couples.jpg'
            }
        ]
    }
};


const users = {
    'admin@merabesite.com': {
        name: 'Admin',
        password: 'admin123',
        role: 'admin'
    },
    'customer@example.com': {
        name: 'John Doe',
        password: 'customer123',
        role: 'customer'
    }
};


const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Access denied');
    }
};


app.get('/', (req, res) => {
    res.render('index', {
        title: 'MERA Besite - Thoughtful Gifts for Every Occasion'
    });
});

app.get('/category/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const category = categoryData[categoryId];

    if (!category) {
        return res.status(404).send('Category not found');
    }

    res.render('category', {
        title: `${category.title} - MERA Besite`,
        category: category,
        categoryId: categoryId
    });
});


app.get('/admin', isAdmin, (req, res) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard - MERA Besite',
        user: req.session.user,
        products: Object.values(categoryData).flatMap(category => 
            category.products.map(product => ({
                ...product,
                category: category.title
            }))
        ),
        categoryData: categoryData,
        recentOrders: sampleOrders
    });
});

app.get('/admin/add-product', isAdmin, (req, res) => {
    res.render('admin/add-product', {
        title: 'Add Product - MERA Besite',
        categories: Object.keys(categoryData)
    });
});


app.get('/orders', isAuthenticated, (req, res) => {
    res.render('orders', {
        title: 'My Orders - MERA Besite',
        orders: sampleOrders 
    });
});


const sampleOrders = [
    {
        id: "ORD001",
        date: "2024-03-15",
        items: [
            {
                name: "Premium Notebook Set",
                price: 599,
                quantity: 2
            }
        ],
        status: "Processing",
        total: 1198
    },
    {
        id: "ORD002",
        date: "2024-03-14",
        items: [
            {
                name: "Couple Watch Set",
                price: 2499,
                quantity: 1
            }
        ],
        status: "Delivered",
        total: 2499
    },
    {
        id: "ORD003",
        date: "2024-03-13",
        items: [
            {
                name: "Birthday Card Collection",
                price: 299,
                quantity: 3
            }
        ],
        status: "Processing",
        total: 897
    }
];


app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'Login - MERA Besite',
        error: null 
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];

    if (user && user.password === password) {
        req.session.user = {
            email,
            name: user.name,
            role: user.role
        };
        res.redirect(user.role === 'admin' ? '/admin' : '/');
    } else {
        res.render('login', {
            title: 'Login - MERA Besite',
            error: 'Invalid email or password'
        });
    }
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register - MERA Besite',
        error: null
    });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    
    if (users[email]) {
        return res.render('register', {
            title: 'Register - MERA Besite',
            error: 'Email already exists'
        });
    }

    users[email] = {
        name,
        password,
        role: 'customer'
    };

    req.session.user = {
        email,
        name,
        role: 'customer'
    };

    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
app.get('/products', (req, res) => {
    res.render('products', {
        title: 'Our Products - MERA Besite',
        categoryData: categoryData
    });
});


app.post('/add-to-cart', (req, res) => {
    const product = req.body;
    const cart = req.session.cart || [];
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    req.session.cart = cart;

    res.json({ success: true, cartCount: cart.length });
});


app.get('/cart', (req, res) => {
    res.render('cart', {
        title: 'Shopping Cart - MERA Besite',
        cartItems: req.session.cart || []
    });
});

app.get('/checkout', isAuthenticated, (req, res) => {
    const cartItems = req.session.cart || [];
    const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

    res.render('checkout', {
        title: 'Checkout - MERA Besite',
        cartItems: cartItems,
        user: req.session.user,
        total: total
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us - MERA Bestie'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us - MERA Bestie'
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port : http://localhost:${PORT}`);
});
