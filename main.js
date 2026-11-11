const extraMenuItems = {
  hot: [
    ['Vanilla bean flat white', 'Ristretto espresso with silky vanilla milk', '$5.75', 'GLUTEN-FREE'],
    ['Brown sugar mocha', 'Dark chocolate, espresso, brown sugar', '$6.50', 'GLUTEN-FREE'],
    ['London fog', 'Earl Grey, steamed milk, house vanilla', '$5.25', 'GLUTEN-FREE'],
    ['Ceremonial matcha latte', 'Stone-ground matcha whisked to order', '$6.25', 'GLUTEN-FREE'],
    ['Classic drip coffee', 'Rotating small-lot coffee, freshly brewed', '$3.25', 'VEGAN'],
    ['Caramel macchiato', 'Espresso, steamed milk, salted caramel', '$6.00', 'GLUTEN-FREE'],
    ['Hot chocolate', 'Velvety chocolate with whipped cream', '$5.50', 'GLUTEN-FREE'],
    ['Dirty chai', 'Spiced chai with a double espresso shot', '$6.25', 'GLUTEN-FREE'],
    ['Americano', 'Double espresso topped with hot water', '$4.00', 'VEGAN'],
  ],
  cold: [
    ['Iced honey oat latte', 'Espresso, oat milk, local honey over ice', '$6.50', 'LACTOSE-FREE'],
    ['Orange espresso tonic', 'Bright espresso with citrus tonic water', '$6.25', 'VEGAN'],
    ['Iced matcha latte', 'Stone-ground matcha and cold milk', '$6.25', 'GLUTEN-FREE'],
    ['Brown sugar shaken espresso', 'Shaken espresso, brown sugar, oat milk', '$6.25', 'LACTOSE-FREE'],
    ['Vanilla cream cold brew', 'Slow-steeped coffee topped with vanilla cream', '$6.25', 'GLUTEN-FREE'],
    ['Strawberry lemonade', 'Fresh lemon, ripe berries, a little sparkle', '$5.50', 'VEGAN'],
    ['Iced Americano', 'Double espresso, chilled and poured over ice', '$4.50', 'VEGAN'],
    ['Coconut cold brew', 'Cold brew finished with creamy coconut milk', '$6.00', 'DAIRY-FREE'],
    ['Peach iced tea', 'Black tea with a bright peach finish', '$5.25', 'VEGAN'],
    ['Sparkling yuzu cooler', 'Yuzu citrus and soda over plenty of ice', '$5.75', 'VEGAN'],
  ],
  snacks: [
    ['Almond croissant', 'Twice-baked with almond cream and toasted almonds', '$5.25', 'VEGETARIAN'],
    ['Blueberry lemon scone', 'Tender, buttery, with fresh lemon zest', '$4.25', 'VEGETARIAN'],
    ['Banana bread', 'Toasted walnuts and a little cinnamon', '$4.50', 'VEGETARIAN'],
    ['Jammy thumbprint cookie', 'Brown butter cookie with berry jam', '$3.25', 'VEGETARIAN'],
    ['Avocado toast', 'Sourdough, smashed avocado, chilli crunch', '$9.50', 'VEGAN'],
    ['Ham & cheddar croissant', 'Flaky pastry with sharp cheddar and ham', '$7.50', 'NON-VEGETARIAN'],
    ['Lemon poppyseed loaf', 'Soft citrus loaf with a lemon glaze', '$4.50', 'VEGETARIAN'],
    ['Raspberry oat bar', 'Raspberry preserves on a buttery oat base', '$4.00', 'VEGETARIAN'],
    ['Chocolate chip cookie', 'Crisp edges, soft middle, sea salt', '$3.50', 'VEGETARIAN'],
  ],
  seasonal: [
    ['Pumpkin spice latte', 'Espresso, pumpkin, warming autumn spices', '$6.75', 'GLUTEN-FREE'],
    ['Cranberry orange scone', 'Tart cranberries, orange zest, vanilla glaze', '$4.75', 'VEGETARIAN'],
    ['Gingerbread latte', 'Espresso with ginger, cinnamon, and clove', '$6.50', 'GLUTEN-FREE'],
    ['Pear & cardamom danish', 'Seasonal pear in a flaky cardamom pastry', '$5.75', 'VEGETARIAN'],
    ['Peppermint mocha', 'Dark chocolate, espresso, cool peppermint', '$6.75', 'GLUTEN-FREE'],
    ['Maple pecan muffin', 'Toasted pecans and local maple syrup', '$4.75', 'VEGETARIAN'],
    ['Winter citrus tea', 'Black tea steeped with orange and spice', '$5.25', 'VEGAN'],
    ['Salted caramel steamer', 'Warm milk with house salted caramel', '$5.50', 'GLUTEN-FREE'],
    ['Spiced apple cider', 'Warm pressed apple with cinnamon and clove', '$5.25', 'VEGAN'],
    ['Cranberry bliss bar', 'White chocolate, cranberries, orange icing', '$5.00', 'VEGETARIAN'],
  ],
};

const menuImageIds = [
  '1521017432531-fbd92d768814', '1524350876685-274059332603', '1442512595331-e89e73853f31', '1504754524776-8f4f37790ca0',
  '1517433670267-08bbd4be890f', '1551024506-0bccd828d307', '1586444248902-2f64eddc13df', '1587241321921-91a834d6d191',
  '1530610476181-d83430b64dcd', '1509365465985-25d11c17e812', '1533920379810-6bedac961555', '1445116572660-236099ec97a0',
  '1549903072-7e6e0bedb7fb', '1476224203421-9ac39bcb3327', '1484723091739-30a097e8f929', '1490645935967-10de6ba17061',
  '1555939594-58d7cb561ad1', '1546069901-ba9599a7e63c', '1442975631115-c4f7b05b8a2c', '1520209759809-a9bcb6cb3241',
  '1525351484163-7529414344d8', '1572442388796-11668a67e53d', '1466637574441-749b8f19452f', '1517701550927-30cf4ba1dba5',
  '1514432324607-a09d9b4aefdd', '1570968915860-54d5c301fa9f', '1461023058943-07fcbe16d735', '1516035069371-29a1b244cc32',
  '1527515637462-cff94eecc1ac', '1517248135467-4c7edcad34c4', '1512621776951-a57141f2eefd', '1540189549336-e6e99c3679fe',
  '1485808191679-5f86510681a2', '1554118811-1e0d58224f24', '1544787219-7f47ccb76574', '1481833761820-0509d3217039',
  '1493857671505-72967e2e2760', '1547592180-85f173990554',
];

const menuGrid = document.querySelector('.menu-grid');
let imageLock = 11;
Object.entries(extraMenuItems).forEach(([category, items]) => {
  items.forEach(([name, description, price, dietaryTag], index) => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.dataset.category = category;
    const imageId = menuImageIds[imageLock - 11];
    const image = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=900&q=80`;
    imageLock++;
    card.innerHTML = `<div class="card-image"><img src="${image}" alt="${name}" loading="lazy"><span class="card-tag">${dietaryTag}</span></div><div class="card-info"><div><h3>${name}</h3><p>${description}</p></div><b>${price}</b></div>`;
    menuGrid.append(card);
  });
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

// The first tab is Seasonal, so make its selection match the initial card view.
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
const money = (cents) => `$${(cents / 100).toFixed(2)}`;

let cart = new Map();
try {
  const savedCart = JSON.parse(localStorage.getItem('goodDayCart') || '[]');
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
    localStorage.setItem('goodDayCart', JSON.stringify([...cart.values()]));
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
    const name = card.querySelector('h3').textContent;
    const price = Math.round(Number(card.querySelector('.card-info>b').textContent.replace('$', '')) * 100);
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
  document.querySelector('#order-title').textContent = 'Your order';
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
  document.querySelector('#order-title').textContent = 'Order confirmed';
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
