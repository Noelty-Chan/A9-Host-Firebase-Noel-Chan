const officialMenuImage = (path) => `https://www.pokemon-cafe.jp${path}`;
const menuItems = [
  { category: 'food', name: "Best Buddies Pikachu & Pichu's Curry Rice Plate", description: 'Signature curry rice with a cheerful Pikachu and Pichu welcome.', price: 2530, image: '/en/cafe_menu_26061701.jpg' },
  { category: 'food', name: "Snorlax's Naptime Teriyaki Burger", description: 'Teriyaki chicken and egg tucked beneath Snorlax’s tummy bun.', price: 2530, image: '/en/cafe_menu_26061702.jpg' },
  { category: 'food', name: 'Omelet in Mimikyu’s Disguise and Corn Stew', description: 'Mimikyu-inspired omelet with creamy corn stew and bean salad.', price: 2530, image: '/en/cafe_menu_26061703.jpg' },
  { category: 'food', name: 'Pokémon Café Kids Plate — The Pikachu Hamburger', description: 'A Pikachu hamburger plate for children 12 and under.', price: 1540, image: '/en/cafe_menu_26061707.jpg' },
  { category: 'sweets', name: 'Pika Pika Parfait — Chocolate & Berries', description: 'Chocolate and berry parfait topped with Pikachu-shaped mousse.', price: 2090, image: '/en/cafe_menu_26061704.jpg' },
  { category: 'sweets', name: "Eevee's Colorful Fruit Pancake", description: 'A fluffy pancake inspired by Eevee with colorful fruit and mascarpone cream.', price: 2090, image: '/en/cafe_menu_26061705.jpg' },
  { category: 'drinks', name: "Gengar's Confuse Ray Smoothie", description: 'A grape-flavored frozen smoothie with extra fruit pulp.', price: 1265, image: '/en/photo_drink06.jpg' },
  { category: 'drinks', name: "Gengar's Confuse Ray Smoothie with Take-Home Glass", description: 'The grape smoothie served with an original Pokémon Café glass.', price: 2255, image: '/en/cafe_menu_26061708.jpg' },
  { category: 'drinks', name: 'Go! Greninja! Smokescreen White Peach Drink', description: 'Refreshing white peach drink with Water Shuriken-shaped jelly.', price: 1375, image: '/en/cafe_menu_26061706.jpg' },
  { category: 'drinks', name: "Say Hello to Eevee's Royal Milk Tea", description: 'Royal milk tea served with almond cake and whipped cream.', price: 1375, image: '/en/photo_drink01.jpg' },
  { category: 'drinks', name: "Sprigatito's Melon Soda Float", description: 'Sparkling melon soda float with diced melon.', price: 1265, image: '/en/photo_special19.jpg' },
  { category: 'drinks', name: "Fuecoco's Apple Soda Float", description: 'Sparkling apple soda float with diced apple.', price: 1265, image: '/en/photo_special20.jpg' },
  { category: 'drinks', name: "Quaxly's Ramune Soda Float", description: 'Ramune soda float with pulpy coconut gel.', price: 1265, image: '/en/photo_special21.jpg' },
  { category: 'drinks', name: "Polteageist & Sinistea's Apple Tea Party Set", description: 'Fruit tea with apple and apple syrup.', price: 1265, image: '/en/photo_drink04.jpg' },
  { category: 'drinks', name: 'Poltchageist & Sinistcha’s Hospitality Matcha Latte', description: 'Matcha milk served with extra matcha and syrup on the side.', price: 1265, image: '/en/photo_special04.jpg' },
  { category: 'drinks', name: 'Coffee with a Pikachu Tail Cookie', description: 'Coffee served with a Pikachu tail-shaped cookie.', price: 935, image: '/en/ddedf2c9b30e93d314c4eb04f1e2943e954e0e36.jpg', options: ['Hot', 'Iced'] },
  { category: 'drinks', name: 'Hot Coffee with a Pikachu or Pawmi Mug', description: 'Hot coffee with an original Pokémon Café mug.', price: 2695, image: '/en/photo_drink02.jpg', options: ['Pikachu mug', 'Pawmi mug'] },
  { category: 'drinks', name: 'Iced Coffee with Pokémon Café Logo Glass', description: 'Iced coffee served with an original logo glass.', price: 1925, image: '/en/67a3de065a1d7aa2a3d9390218509591bec3cd9e.jpg' },
  { category: 'drinks', name: 'Cocoa', description: 'A soothing, sweet cocoa served hot or iced.', price: 715, image: '/en/4e8a4d28b1d9422ed6307c3d3c87aef9ced7b38e.jpg', options: ['Hot', 'Iced'] },
  { category: 'drinks', name: 'Hot Cocoa with a Pikachu or Pawmi Mug', description: 'Hot cocoa with an original Pokémon Café mug.', price: 2475, image: '/en/b114c8655f1d4575d7945a912896cabae59b9d94.jpg', options: ['Pikachu mug', 'Pawmi mug'] },
  { category: 'drinks', name: 'Iced Cocoa with Pokémon Café Logo Glass', description: 'Iced cocoa served with an original logo glass.', price: 1705, image: '/en/08e0cbca7f63b3917b5a77d9ee67f06200c5bee3.jpg' },
  { category: 'drinks', name: 'Apple Juice, Orange Juice, Cola, or Oolong Tea', description: 'Choose a soft drink in a glass. The stainless tumbler set is ¥3,465.', price: 715, image: '/en/cafe_menu_26061709.jpg', options: ['Apple Juice', 'Orange Juice', 'Cola', 'Oolong Tea'] },
  { category: 'pokemon-latte', name: 'Choose Your Pokémon Latte', description: 'Choose a latte flavor and hot or iced Pokémon latte art.', price: 935, image: '/common/img/menu/2024/photo_drink06.jpg', options: ['Café Latte — Hot', 'Café Latte — Iced', 'Café Mocha — Hot', 'Café Mocha — Iced', 'Caramel Latte — Hot', 'Caramel Latte — Iced'] },
  { category: 'pokemon-latte', name: 'Pokémon Latte with Original Mug (Hot)', description: 'Hot Pokémon latte with an original Pokémon Café mug.', price: 2695, image: '/common/img/menu/2024/photo_drink02.jpg' },
  { category: 'pokemon-latte', name: 'Pokémon Latte with Logo Glass (Iced)', description: 'Iced Pokémon latte with a Pokémon Café logo glass.', price: 1925, image: '/common/img/menu/2024/photo_drink03.jpg' },
];

const menuGrid = document.querySelector('.menu-grid');
menuItems.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'menu-card';
  card.dataset.category = item.category;
  const categoryLabel = item.category === 'pokemon-latte' ? 'POKÉMON LATTE' : item.category.toUpperCase();
  const optionPicker = item.options ? `<label class="menu-choice-label">Choice<select class="menu-choice" aria-label="Choose an option for ${item.name}">${item.options.map((option) => `<option>${option}</option>`).join('')}</select></label>` : '';
  card.innerHTML = `<div class="card-image"><img src="${officialMenuImage(item.image)}" alt="${item.name}" loading="lazy"><span class="card-tag">${categoryLabel}</span></div><div class="card-info"><div><h3>${item.name}</h3><p>${item.description}</p>${optionPicker}</div><b>¥${item.price.toLocaleString('en-CA')}</b></div>`;
  menuGrid.append(card);
});

const tabs = document.querySelectorAll('.menu-tabs button');
const cards = document.querySelectorAll('.menu-card');
cards.forEach((card) => {
  const addButton = document.createElement('button');
  addButton.className = 'add-to-order';
  addButton.type = 'button';
  addButton.textContent = 'Add to order +';
  addButton.setAttribute('aria-label', `Add ${card.querySelector('h3').textContent} to your order`);
  card.append(addButton);
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    cards.forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Select the first menu category when the page loads.
tabs[0].click();

const orderDialog = document.querySelector('#order-dialog');
const cartItems = document.querySelector('.cart-items');
const orderCount = document.querySelector('.order-count');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total strong');
const checkoutTotal = document.querySelector('.checkout-total strong');
const checkoutButton = document.querySelector('.checkout-start');
const cartView = document.querySelector('.cart-view');
const checkoutForm = document.querySelector('.checkout-form');
const confirmation = document.querySelector('.order-confirmation');
const money = (yen) => `¥${yen.toLocaleString('en-CA')}`;

let cart = new Map();
try {
  const savedCart = JSON.parse(localStorage.getItem('pokemonCafeCartJPY') || '[]');
  savedCart.forEach((item) => {
    if (item && typeof item.name === 'string' && Number.isInteger(item.price) && item.price > 0 && Number.isInteger(item.quantity) && item.quantity > 0) {
      cart.set(item.name, { ...item, quantity: Math.min(item.quantity, 99) });
    }
  });
} catch {
  cart = new Map();
}

function saveCart() {
  try {
    localStorage.setItem('pokemonCafeCartJPY', JSON.stringify([...cart.values()]));
  } catch {
    // The order remains usable if browser storage is unavailable.
  }
}

function renderCart() {
  cartItems.replaceChildren();
  let subtotal = 0;
  let count = 0;
  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    count += item.quantity;
    const row = document.createElement('article');
    row.className = 'cart-item';
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = '';
    const details = document.createElement('div');
    details.className = 'cart-item-details';
    const name = document.createElement('strong');
    name.textContent = item.name;
    const price = document.createElement('span');
    price.textContent = money(item.price * item.quantity);
    const controls = document.createElement('div');
    controls.className = 'quantity-controls';
    const minus = document.createElement('button');
    minus.type = 'button';
    minus.textContent = '−';
    minus.setAttribute('aria-label', `Remove one ${item.name}`);
    minus.addEventListener('click', () => changeQuantity(item.name, -1));
    const quantity = document.createElement('span');
    quantity.textContent = item.quantity;
    const plus = document.createElement('button');
    plus.type = 'button';
    plus.textContent = '+';
    plus.setAttribute('aria-label', `Add one ${item.name}`);
    plus.addEventListener('click', () => changeQuantity(item.name, 1));
    controls.append(minus, quantity, plus);
    details.append(name, price, controls);
    row.append(image, details);
    cartItems.append(row);
  });
  orderCount.textContent = count;
  cartEmpty.hidden = count > 0;
  cartTotal.textContent = money(subtotal);
  checkoutTotal.textContent = money(subtotal);
  checkoutButton.disabled = count === 0;
}

function changeQuantity(name, delta) {
  const item = cart.get(name);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart.delete(name);
  else item.quantity = Math.min(item.quantity, 99);
  saveCart();
  renderCart();
}

cards.forEach((card) => {
  card.querySelector('.add-to-order').addEventListener('click', () => {
    const itemName = card.querySelector('h3').textContent;
    const choice = card.querySelector('.menu-choice')?.value;
    const name = choice ? `${itemName} — ${choice}` : itemName;
    const price = Number(card.querySelector('.card-info>b').textContent.replace(/[^0-9]/g, ''));
    const item = cart.get(name) || { name, price, image: card.querySelector('img').src, quantity: 0 };
    item.quantity = Math.min(item.quantity + 1, 99);
    cart.set(name, item);
    saveCart();
    renderCart();
    card.querySelector('.add-to-order').textContent = 'Added ✓';
    window.setTimeout(() => {
      const button = card.querySelector('.add-to-order');
      if (button) button.textContent = 'Add to order +';
    }, 1200);
  });
});

function showCart() {
  cartView.hidden = false;
  checkoutForm.hidden = true;
  confirmation.hidden = true;
  document.querySelector('#order-title').textContent = 'Trainer pack';
}

document.querySelectorAll('.order-open').forEach((button) => button.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  renderCart();
  orderDialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => orderDialog.close());
orderDialog.addEventListener('click', (event) => {
  if (event.target === orderDialog) orderDialog.close();
});
orderDialog.addEventListener('close', showCart);
checkoutButton.addEventListener('click', () => {
  cartView.hidden = true;
  checkoutForm.hidden = false;
  document.querySelector('#order-title').textContent = 'Pickup details';
  checkoutForm.querySelector('input[name="name"]').focus();
});
document.querySelector('.back-to-cart').addEventListener('click', showCart);
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(checkoutForm);
  const subtotal = [...cart.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
  const confirmationItems = document.querySelector('.confirmation-items');
  confirmationItems.replaceChildren();
  cart.forEach((item) => {
    const line = document.createElement('li');
    line.textContent = `${item.quantity} × ${item.name} — ${money(item.price * item.quantity)}`;
    confirmationItems.append(line);
  });
  document.querySelector('.customer-name').textContent = formData.get('name');
  document.querySelector('.customer-email').textContent = formData.get('email');
  document.querySelector('.pickup-message').textContent = `Pickup: ${formData.get('pickup')}. Payment is due at pickup.`;
  document.querySelector('.confirmation-total').textContent = `Order subtotal: ${money(subtotal)}`;
  cart.clear();
  saveCart();
  renderCart();
  cartView.hidden = true;
  checkoutForm.hidden = true;
  confirmation.hidden = false;
  document.querySelector('#order-title').textContent = 'Pack ready';
});
document.querySelector('.finish-order').addEventListener('click', () => orderDialog.close());

renderCart();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});
