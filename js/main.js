// Product Data
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["White", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        description: "Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear."
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 59.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Blue", "Black"],
        sizes: ["30", "32", "34", "36"],
        rating: 4.3,
        description: "Modern slim fit jeans with stretch comfort. Versatile for any occasion."
    },
    {
        id: 3,
        name: "Floral Summer Dress",
        price: 49.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Pink", "Blue", "Yellow"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.7,
        description: "Light and breezy floral dress perfect for summer days."
    },
    {
        id: 4,
        name: "Leather Jacket",
        price: 129.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Black", "Brown"],
        sizes: ["M", "L", "XL"],
        rating: 4.8,
        description: "Classic leather jacket with modern styling. Premium quality leather."
    },
    {
        id: 5,
        name: "Casual Blouse",
        price: 39.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["White", "Black", "Red"],
        sizes: ["S", "M", "L"],
        rating: 4.4,
        description: "Elegant casual blouse with a relaxed fit. Perfect for office wear."
    },
    {
        id: 6,
        name: "Denim Jacket",
        price: 79.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        description: "Classic denim jacket with modern details. Versatile layering piece."
    },
    {
        id: 7,
        name: "Formal Shirt",
        price: 45.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["White", "Blue", "Pink"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        description: "Crisp formal shirt perfect for business attire."
    },
    {
        id: 8,
        name: "Summer Shorts",
        price: 34.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Khaki", "Navy", "Black"],
        sizes: ["30", "32", "34", "36"],
        rating: 4.2,
        description: "Comfortable summer shorts with a modern fit."
    },
    {
        id: 9,
        name: "Knit Sweater",
        price: 69.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Gray", "Beige", "Black"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
        description: "Cozy knit sweater perfect for colder days."
    },
    {
        id: 10,
        name: "Pleated Skirt",
        price: 54.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Black", "Navy", "Burgundy"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.6,
        description: "Elegant pleated skirt for a sophisticated look."
    },
    {
        id: 11,
        name: "Hooded Sweatshirt",
        price: 49.99,
        category: "men",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Gray", "Black", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.4,
        description: "Comfortable hooded sweatshirt for casual wear."
    },
    {
        id: 12,
        name: "Maxi Dress",
        price: 79.99,
        category: "women",
        image: "/images/Dokotoo Women's Dress 2025 Summer Deep V Neck Elegant Ruffle Mini Dress Waist Dresses S-2XL.jpg",
        colors: ["Black", "Red", "Blue"],
        sizes: ["S", "M", "L"],
        rating: 4.8,
        description: "Elegant maxi dress perfect for special occasions."
    }
];

// User Management
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let userCarts = JSON.parse(localStorage.getItem('userCarts')) || {};

// Update cart badge
function updateCartBadge() {
    const cartBadge = document.querySelector('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.setAttribute('data-count', totalItems);
}

// User Authentication Functions
function registerUser(email, password, name) {
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        throw new Error('Email already registered');
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        email,
        password, // In a real app, this should be hashed
        name,
        createdAt: new Date().toISOString()
    };

    // Add user to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Initialize user's cart
    userCarts[newUser.id] = [];
    localStorage.setItem('userCarts', JSON.stringify(userCarts));

    return newUser;
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Set current user
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Merge guest cart with user's cart
    const userCart = userCarts[user.id] || [];
    const mergedCart = [...userCart];

    // Add items from guest cart that aren't in user cart
    cart.forEach(guestItem => {
        const existingItem = mergedCart.find(item => item.id === guestItem.id);
        if (existingItem) {
            existingItem.quantity += guestItem.quantity;
        } else {
            mergedCart.push(guestItem);
        }
    });

    // Update cart and save
    cart = mergedCart;
    userCarts[user.id] = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('userCarts', JSON.stringify(userCarts));

    return user;
}

function logout() {
    // Save current cart to user's carts before logout
    if (currentUser) {
        userCarts[currentUser.id] = cart;
        localStorage.setItem('userCarts', JSON.stringify(userCarts));
    }

    currentUser = null;
    cart = [];
    localStorage.removeItem('currentUser');
    localStorage.setItem('cart', JSON.stringify(cart));
    updateAuthUI();
    updateCartBadge();
    window.location.href = 'index.html';
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // If user is logged in, also save to their user cart
    if (currentUser) {
        userCarts[currentUser.id] = cart;
        localStorage.setItem('userCarts', JSON.stringify(userCarts));
    }

    updateCartBadge();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // If user is logged in, update their user cart
    if (currentUser) {
        userCarts[currentUser.id] = cart;
        localStorage.setItem('userCarts', JSON.stringify(userCarts));
    }

    updateCartBadge();
    showNotification('Product removed from cart!');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(0, quantity);
        if (item.quantity === 0) {
            removeFromCart(productId);
        } else {
            // Update localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // If user is logged in, update their user cart
            if (currentUser) {
                userCarts[currentUser.id] = cart;
                localStorage.setItem('userCarts', JSON.stringify(userCarts));
            }
            updateCartBadge();
        }
    }
}

// Checkout function
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return false;
    }

    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }

    return true;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Display products
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <button onclick="addToCart(${product.id})" class="btn">Add to Cart</button>
                    <a href="product.html?id=${product.id}" class="btn btn-secondary">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Display best selling products
function displayBestSelling() {
    const bestSelling = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    displayProducts(bestSelling, 'best-selling-products');
}

// Handle user authentication
function updateAuthUI() {
    const authLinks = document.querySelector('.auth-links');
    if (!authLinks) return;

    if (currentUser) {
        authLinks.innerHTML = `
            <span>Welcome, ${currentUser.name}</span>
            <button onclick="logout()" class="btn">Logout</button>
        `;
    } else {
        authLinks.innerHTML = `
            <a href="login.html" class="login-link login-bttn">Login</a>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load user's cart if logged in
    if (currentUser) {
        cart = userCarts[currentUser.id] || [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCartBadge();
    updateAuthUI();
    displayBestSelling();
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Checkout Page Functions
function displayOrderSummary() {
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const subtotal = document.getElementById('subtotal');
    const shipping = document.getElementById('shipping');
    const total = document.getElementById('total');

    if (!cart || cart.length === 0) {
        orderSummaryItems.innerHTML = '<p>Your cart is empty.</p>';
        subtotal.textContent = '$0.00';
        shipping.textContent = '$0.00';
        total.textContent = '$0.00';
        return;
    }

    orderSummaryItems.innerHTML = cart.map(item => `
        <div class="summary-product">
            <div class="product-info">
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <div class="product-details">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
            <span class="product-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingAmount = subtotalAmount > 50 ? 0 : 10;
    const totalAmount = subtotalAmount + shippingAmount;

    subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    shipping.textContent = shippingAmount === 0 ? 'Free' : `$${shippingAmount.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;
}

function initializeCheckoutPage() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.form-tab').forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${button.dataset.tab}-tab`).classList.add('active');
        });
    });

    // Next/Previous tab buttons
    const nextTabBtn = document.querySelector('.next-tab');
    const prevTabBtn = document.querySelector('.prev-tab');
    if (nextTabBtn) {
        nextTabBtn.addEventListener('click', () => {
            document.querySelector('[data-tab="payment"]').click();
        });
    }
    if (prevTabBtn) {
        prevTabBtn.addEventListener('click', () => {
            document.querySelector('[data-tab="shipping"]').click();
        });
    }

    // Payment method switching
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');

            const paymentType = method.dataset.method;
            const cardForm = document.querySelector('.card-form');
            const codForm = document.querySelector('.cod-form');
            const cardInputs = cardForm.querySelectorAll('input, select');

            if (paymentType === 'card') {
                cardForm.style.display = 'block';
                codForm.style.display = 'none';
                // Make card inputs required
                cardInputs.forEach(input => {
                    input.setAttribute('required', 'required');
                });
            } else {
                cardForm.style.display = 'none';
                codForm.style.display = 'block';
                // Remove required attribute from card inputs
                cardInputs.forEach(input => {
                    input.removeAttribute('required');
                });
            }
        });
    });

    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})/g, '$1 ').trim();
            e.target.value = value;

            // Detect card type
            const cardType = document.querySelector('.card-type');
            if (value.startsWith('4')) {
                cardType.className = 'fab fa-cc-visa card-type';
            } else if (value.startsWith('5')) {
                cardType.className = 'fab fa-cc-mastercard card-type';
            } else if (value.startsWith('3')) {
                cardType.className = 'fab fa-cc-amex card-type';
            } else {
                cardType.className = 'fas fa-credit-card card-type';
            }
        });
    }

    // Expiry date formatting
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
            e.target.value = value;
        });
    }

    // CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get selected payment method
            const selectedPayment = document.querySelector('.payment-method.active');
            const paymentType = selectedPayment.getAttribute('data-method');

            // Validate form based on payment method
            const form = e.target;
            const cardForm = document.querySelector('.card-form');
            const cardInputs = cardForm.querySelectorAll('input, select');

            // Remove required attribute from all card inputs first
            cardInputs.forEach(input => {
                input.removeAttribute('required');
            });

            // Add required attribute only if credit card is selected
            if (paymentType === 'card') {
                cardInputs.forEach(input => {
                    input.setAttribute('required', 'required');
                });
            }

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Process order
            placeOrder();
        });
    }

    // Initialize order summary
    displayOrderSummary();
}

function placeOrder() {
    // Get selected payment method
    const selectedPayment = document.querySelector('.payment-method.active');
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    // Get payment method type
    const paymentType = selectedPayment.getAttribute('data-method');

    // Save order details to localStorage
    const orderDetails = {
        orderNumber: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        items: cart,
        total: document.getElementById('total').textContent,
        paymentMethod: paymentType === 'cod' ? 'Cash on Delivery' : 'Credit Card',
        shippingAddress: {
            name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            zip: document.getElementById('zip').value,
            country: document.getElementById('country').value
        }
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // Function to clear cart and redirect
    const clearCartAndRedirect = () => {
        // Clear cart from localStorage
        localStorage.removeItem('cart');
        // Clear the cart array
        cart = [];
        // Save empty cart to localStorage
        localStorage.setItem('cart', JSON.stringify([]));
        // Update cart count
        updateCartBadge();
        // Redirect to order received page
        window.location.href = 'order-received.html';
    };

    // For cash on delivery, proceed directly to order received page
    if (paymentType === 'cod') {
        clearCartAndRedirect();
        return;
    }

    // For credit card payment
    if (paymentType === 'card') {
        // Validate card details
        const cardNumber = document.getElementById('cardNumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;

        if (!cardNumber || !expiry || !cvv || !cardName) {
            alert('Please fill in all card details');
            return;
        }

        // Process card payment (simulated)
        setTimeout(() => {
            clearCartAndRedirect();
        }, 1000);
    }
}

// Initialize page-specific functions
document.addEventListener('DOMContentLoaded', function () {
    // Initialize checkout page if we're on the checkout page
    if (document.querySelector('.checkout-section')) {
        initializeCheckoutPage();
    }
    // ... other page initializations ...
});

// Cart Page Functions
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const subtotal = document.getElementById('subtotal');
    const shipping = document.getElementById('shipping');
    const total = document.getElementById('total');

    if (!cartItems) return; // Not on cart page

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart text-center mt-3 mb-3">
                <i class="fas fa-shopping-cart fa-3x mb-2" style="color: var(--accent-color);"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn">Continue Shopping</a>
            </div>
        `;
        subtotal.textContent = '$0.00';
        shipping.textContent = '$0.00';
        total.textContent = '$0.00';
        return;
    }

    // Calculate totals
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingAmount = subtotalAmount > 50 ? 0 : 10;
    const totalAmount = subtotalAmount + shippingAmount;

    // Update summary
    subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    shipping.textContent = shippingAmount === 0 ? 'Free' : `$${shippingAmount.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;

    // Update cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: var(--border-radius-md);">
            <div style="flex: 1;">
                <h3>${item.name}</h3>
                <div class="item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="quantity-controls">
                    <button onclick="updateItemQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button onclick="updateItemQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                <button onclick="removeItem(${item.id})" class="remove-item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateItemQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(id);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartBadge();
        }
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartBadge();
}

// Initialize cart page if on cart page
if (document.getElementById('cartItems')) {
    updateCartDisplay();
}

// Login Page Functions
function initializeLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return; // Not on login page

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset error messages
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate email
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            return;
        }

        // Validate password
        if (!password) {
            document.getElementById('passwordError').textContent = 'Password is required';
            return;
        }

        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
            return;
        }

        try {
            const user = loginUser(email, password);
            showNotification('Login successful!');
            window.location.href = 'index.html';
        } catch (error) {
            showNotification(error.message);
            if (error.message === 'Invalid credentials') {
                document.getElementById('passwordError').textContent = 'Invalid email or password';
            }
        }
    });

    // Real-time validation
    document.getElementById('email').addEventListener('input', function () {
        const email = this.value;
        const emailError = document.getElementById('emailError');

        if (!email) {
            emailError.textContent = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    document.getElementById('password').addEventListener('input', function () {
        const password = this.value;
        const passwordError = document.getElementById('passwordError');

        if (!password) {
            passwordError.textContent = 'Password is required';
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
        } else {
            passwordError.textContent = '';
        }
    });
}

// Initialize login page if on login page
if (document.getElementById('loginForm')) {
    initializeLoginPage();
}

// Signup Page Functions
function initializeSignupPage() {
    const signupForm = document.getElementById('signupForm');
    if (!signupForm) return; // Not on signup page

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
        document.getElementById('termsError').textContent = '';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        // Validate name
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            return;
        }
        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
            return;
        }
        if (!/^[A-Za-z ]{2,}$/.test(name)) {
            document.getElementById('nameError').textContent = 'Name must contain only letters';
            return;
        }

        // Validate email
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            return;
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            return;
        }

        // Validate password
        if (!password) {
            document.getElementById('passwordError').textContent = 'Password is required';
            return;
        }
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            document.getElementById('passwordError').textContent = 'Password must contain letters, numbers, and special characters';
            return;
        }

        // Validate confirm password
        if (!confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
            return;
        }
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            return;
        }

        // Validate terms
        if (!terms) {
            document.getElementById('termsError').textContent = 'You must agree to the Terms & Conditions';
            return;
        }

        try {
            const user = registerUser(email, password, name);
            loginUser(email, password);
            showNotification('Account created successfully!');
            window.location.href = 'index.html';
        } catch (error) {
            showNotification(error.message);
            if (error.message === 'Email already registered') {
                document.getElementById('emailError').textContent = 'This email is already registered';
            }
        }
    });

    // Real-time validation
    document.getElementById('name').addEventListener('input', function () {
        const name = this.value;
        const nameError = document.getElementById('nameError');

        if (!name) {
            nameError.textContent = 'Name is required';
        } else if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
        } else if (!/^[A-Za-z ]{2,}$/.test(name)) {
            nameError.textContent = 'Name must contain only letters';
        } else {
            nameError.textContent = '';
        }
    });

    document.getElementById('email').addEventListener('input', function () {
        const email = this.value;
        const emailError = document.getElementById('emailError');

        if (!email) {
            emailError.textContent = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    document.getElementById('password').addEventListener('input', function () {
        const password = this.value;
        const passwordError = document.getElementById('passwordError');

        if (!password) {
            passwordError.textContent = 'Password is required';
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            passwordError.textContent = 'Password must contain letters, numbers, and special characters';
        } else {
            passwordError.textContent = '';
        }
    });

    document.getElementById('confirmPassword').addEventListener('input', function () {
        const confirmPassword = this.value;
        const password = document.getElementById('password').value;
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        if (!confirmPassword) {
            confirmPasswordError.textContent = 'Please confirm your password';
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
        } else {
            confirmPasswordError.textContent = '';
        }
    });
}

// Initialize signup page if on signup page
if (document.getElementById('signupForm')) {
    initializeSignupPage();
}

// Shop Page Functions
function initializeShopPage() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return; // Not on shop page

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    // Set initial category filter
    if (categoryParam) {
        document.getElementById('category').value = categoryParam;
    }

    // Filter and sort products
    function filterAndSortProducts() {
        const category = document.getElementById('category').value;
        const sortBy = document.getElementById('sort').value;

        let filteredProducts = [...products];

        // Apply category filter
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // Featured - no sorting needed
                break;
        }

        // Display filtered and sorted products
        displayProducts(filteredProducts, 'products-grid');
    }

    // Add event listeners for filters
    document.getElementById('category').addEventListener('change', filterAndSortProducts);
    document.getElementById('sort').addEventListener('change', filterAndSortProducts);

    // Initial load
    filterAndSortProducts();
}

// Initialize shop page if on shop page
if (document.getElementById('products-grid')) {
    initializeShopPage();
} 