      const grilledFoods = [
            // BURGERS
            {
                id: 1,
                name: "Classic Beef Burger",
                description: "100% beef patty grilled to perfection, topped with lettuce, tomato, onion, and our signature sauce.",
                price: 12.99,
                emoji: "🍔"
            },
            {
                id: 2,
                name: "Double Cheese Burger",
                description: "Two beef patties with melted cheddar and Swiss cheese, pickles, and special burger sauce.",
                price: 16.99,
                emoji: "🍔"
            },
            {
                id: 3,
                name: "BBQ Bacon Burger",
                description: "Beef patty with crispy beef bacon, BBQ sauce, onion rings, and smoked cheddar cheese.",
                price: 18.99,
                emoji: "🍔"
            },
            {
                id: 4,
                name: "Mushroom Swiss Burger",
                description: "Grilled beef patty topped with sautéed mushrooms and melted Swiss cheese.",
                price: 15.99,
                emoji: "🍔"
            },
            {
                id: 5,
                name: "Chicken Burger",
                description: "Grilled chicken breast with lettuce, tomato, mayo, and honey mustard on a brioche bun.",
                price: 14.99,
                emoji: "🍔"
            },
            {
                id: 6,
                name: "Spicy Jalapeño Burger",
                description: "Beef patty with jalapeños, pepper jack cheese, spicy mayo, and fresh cilantro.",
                price: 17.99,
                emoji: "🍔"
            },
            // CHICKEN
            {
                id: 7,
                name: "Grilled Chicken Wings",
                description: "Juicy chicken wings marinated in herbs and spices, grilled over open flames.",
                price: 13.99,
                emoji: "🍗"
            },
            {
                id: 8,
                name: "BBQ Chicken Breast",
                description: "Tender chicken breast glazed with smoky BBQ sauce and grilled to perfection.",
                price: 19.99,
                emoji: "🍗"
            },
            {
                id: 9,
                name: "Chicken Thighs",
                description: "Marinated chicken thighs grilled with garlic, herbs, and lemon for maximum flavor.",
                price: 16.99,
                emoji: "🍗"
            },
            {
                id: 10,
                name: "Buffalo Chicken Wings",
                description: "Spicy buffalo wings grilled and tossed in tangy buffalo sauce with celery sticks.",
                price: 15.99,
                emoji: "🍗"
            },
            {
                id: 11,
                name: "Honey Garlic Chicken",
                description: "Chicken pieces glazed with honey garlic sauce and grilled until caramelized.",
                price: 18.99,
                emoji: "🍗"
            },
            {
                id: 12,
                name: "Grilled Chicken Skewers",
                description: "Chicken chunks marinated in Mediterranean spices, grilled on skewers with vegetables.",
                price: 17.99,
                emoji: "🍗"
            },
            // BEEF & OTHER MEATS
            {
                id: 13,
                name: "Ribeye Steak",
                description: "Premium ribeye steak grilled to your preference, served with herb butter.",
                price: 32.99,
                emoji: "🥩"
            },
            {
                id: 14,
                name: "BBQ Beef Ribs",
                description: "Tender beef ribs slow-cooked with our signature BBQ sauce and hickory smoke.",
                price: 26.99,
                emoji: "🥩"
            },
            {
                id: 15,
                name: "Grilled Lamb Chops",
                description: "Succulent lamb chops marinated in rosemary and garlic, grilled to perfection.",
                price: 29.99,
                emoji: "🥩"
            },
            {
                id: 16,
                name: "Beef Kabobs",
                description: "Cubed beef marinated in Middle Eastern spices, grilled with onions and peppers.",
                price: 22.99,
                emoji: "🥩"
            },
            {
                id: 17,
                name: "Grilled T-Bone Steak",
                description: "Classic T-bone steak seasoned with herbs and grilled over high heat.",
                price: 34.99,
                emoji: "🥩"
            },
            {
                id: 18,
                name: "Turkey Breast",
                description: "Herb-crusted turkey breast grilled and sliced, served with cranberry glaze.",
                price: 21.99,
                emoji: "🦃"
            },
            {
                id: 19,
                name: "Beef Brisket",
                description: "Slow-smoked beef brisket with dry rub spices, sliced thick and served with BBQ sauce.",
                price: 24.99,
                emoji: "🥩"
            },
            {
                id: 20,
                name: "Grilled Sausages",
                description: "Mixed grill of beef and chicken sausages with grilled onions and peppers.",
                price: 18.99,
                emoji: "🌭"
            }
        ];

        let cart = [];
        let cartCount = 0;

        function renderFoodItems() {
            const foodGrid = document.getElementById('food-grid');
            foodGrid.innerHTML = '';

            grilledFoods.forEach(food => {
                const foodCard = document.createElement('div');
                foodCard.className = 'food-card';
                foodCard.innerHTML = `
                    <div class="food-image">${food.emoji}</div>
                    <div class="food-content">
                        <h3 class="food-title">${food.name}</h3>
                        <p class="food-description">${food.description}</p>
                        <div class="food-price">$${food.price.toFixed(2)}</div>
                        <button class="add-to-cart" onclick="addToCart(${food.id})">Add to Cart</button>
                    </div>
                `;
                foodGrid.appendChild(foodCard);
            });
        }

        function addToCart(foodId) {
            const food = grilledFoods.find(f => f.id === foodId);
            const existingItem = cart.find(item => item.id === foodId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...food, quantity: 1 });
            }

            cartCount++;
            updateCartDisplay();
            showCart();
        }

        function updateCartDisplay() {
            document.getElementById('cart-count').textContent = cartCount;
            
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';

            let total = 0;
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <span>${item.name} x${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                `;
                cartItems.appendChild(itemElement);
                total += item.price * item.quantity;
            });

            document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
        }

        function toggleCart() {
            const cart = document.getElementById('cart');
            cart.classList.toggle('show');
        }

        function showCart() {
            const cart = document.getElementById('cart');
            cart.classList.add('show');
            setTimeout(() => {
                cart.classList.remove('show');
            }, 3000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderFoodItems();
        });

        // Close cart when clicking outside
        document.addEventListener('click', function(e) {
            const cart = document.getElementById('cart');
            const cartLink = e.target.closest('a[href="#"]');
            
            if (!cart.contains(e.target) && !cartLink) {
                cart.classList.remove('show');
            }
        });