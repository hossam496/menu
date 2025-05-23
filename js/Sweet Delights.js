        const westernSweets = [
            {
                id: 1,
                name: "Classic Tiramisu",
                description: "Italian coffee-flavored dessert with mascarpone cheese, ladyfingers, and cocoa powder.",
                price: 8.99,
                emoji: "🍰"
            },
            {
                id: 2,
                name: "French Macarons",
                description: "Delicate almond cookies with smooth ganache filling in assorted flavors.",
                price: 12.99,
                emoji: "🧁"
            },
            {
                id: 3,
                name: "New York Cheesecake",
                description: "Rich and creamy cheesecake with graham cracker crust and berry compote.",
                price: 9.99,
                emoji: "🍰"
            },
            {
                id: 4,
                name: "Belgian Chocolate Truffles",
                description: "Premium dark chocolate truffles dusted with cocoa powder.",
                price: 15.99,
                emoji: "🍫"
            },
            {
                id: 5,
                name: "Apple Pie à la Mode",
                description: "Traditional American apple pie with cinnamon and vanilla ice cream.",
                price: 7.99,
                emoji: "🥧"
            },
            {
                id: 6,
                name: "Crème Brûlée",
                description: "French vanilla custard with caramelized sugar crust and fresh berries.",
                price: 10.99,
                emoji: "🍮"
            },
            {
                id: 7,
                name: "Black Forest Cake",
                description: "German chocolate cake with cherries, whipped cream, and chocolate shavings.",
                price: 11.99,
                emoji: "🍰"
            },
            {
                id: 8,
                name: "Cannoli Siciliani",
                description: "Sicilian pastry tubes filled with sweet ricotta and chocolate chips.",
                price: 6.99,
                emoji: "🥐"
            },
            {
                id: 9,
                name: "Strawberry Shortcake",
                description: "Light sponge cake with fresh strawberries and whipped cream.",
                price: 8.99,
                emoji: "🍓"
            },
            {
                id: 10,
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with molten center served with vanilla ice cream.",
                price: 9.99,
                emoji: "🍫"
            }
        ];

        const easternSweets = [
            {
                id: 11,
                name: "Turkish Baklava",
                description: "Layers of phyllo pastry with nuts and honey syrup, a Middle Eastern classic.",
                price: 7.99,
                emoji: "🥮"
            },
            {
                id: 12,
                name: "Japanese Mochi",
                description: "Soft rice cake filled with sweet red bean paste or ice cream.",
                price: 5.99,
                emoji: "🍡"
            },
            {
                id: 13,
                name: "Indian Gulab Jamun",
                description: "Deep-fried milk dumplings soaked in rose-flavored sugar syrup.",
                price: 6.99,
                emoji: "🍯"
            },
            {
                id: 14,
                name: "Chinese Mooncakes",
                description: "Traditional pastries filled with lotus seed paste and salted egg yolk.",
                price: 13.99,
                emoji: "🥮"
            },
            {
                id: 15,
                name: "Thai Mango Sticky Rice",
                description: "Sweet sticky rice with fresh mango slices and coconut milk.",
                price: 8.99,
                emoji: "🥭"
            },
            {
                id: 16,
                name: "Korean Bingsu",
                description: "Shaved ice dessert topped with sweet condensed milk and fruit.",
                price: 11.99,
                emoji: "🍧"
            },
            {
                id: 17,
                name: "Persian Rosewater Cookies",
                description: "Delicate cookies flavored with rosewater and topped with pistachios.",
                price: 9.99,
                emoji: "🍪"
            },
            {
                id: 18,
                name: "Japanese Dorayaki",
                description: "Pancake sandwich filled with sweet red bean paste, a popular Japanese treat.",
                price: 4.99,
                emoji: "🥞"
            },
            {
                id: 19,
                name: "Lebanese Knafeh",
                description: "Cheese pastry soaked in sweet syrup and topped with crushed pistachios.",
                price: 10.99,
                emoji: "🧀"
            },
            {
                id: 20,
                name: "Vietnamese Che Ba Mau",
                description: "Three-color dessert with beans, coconut milk, and crushed ice.",
                price: 7.99,
                emoji: "🍨"
            }
        ];

        let cart = [];
        let cartCount = 0;

        function renderSweets() {
            const westernGrid = document.getElementById('western-grid');
            const easternGrid = document.getElementById('eastern-grid');
            
            westernGrid.innerHTML = '';
            easternGrid.innerHTML = '';

            westernSweets.forEach(sweet => {
                const sweetCard = createSweetCard(sweet);
                westernGrid.appendChild(sweetCard);
            });

            easternSweets.forEach(sweet => {
                const sweetCard = createSweetCard(sweet);
                easternGrid.appendChild(sweetCard);
            });
        }

        function createSweetCard(sweet) {
            const card = document.createElement('div');
            card.className = 'sweet-card fade-in';
            card.innerHTML = `
                <div class="sweet-image">${sweet.emoji}</div>
                <div class="sweet-content">
                    <h3 class="sweet-title">${sweet.name}</h3>
                    <p class="sweet-description">${sweet.description}</p>
                    <div class="sweet-price">$${sweet.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${sweet.id})">Add to Cart</button>
                </div>
            `;
            return card;
        }

        function addToCart(sweetId) {
            const allSweets = [...westernSweets, ...easternSweets];
            const sweet = allSweets.find(s => s.id === sweetId);
            const existingItem = cart.find(item => item.id === sweetId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...sweet, quantity: 1 });
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

        // Smooth scrolling
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

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimations);

        // Close cart when clicking outside
        document.addEventListener('click', function(e) {
            const cart = document.getElementById('cart');
            const cartLink = e.target.closest('a[href="#"]');
            
            if (!cart.contains(e.target) && !cartLink) {
                cart.classList.remove('show');
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderSweets();
            handleScrollAnimations();
        });