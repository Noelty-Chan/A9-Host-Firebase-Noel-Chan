const extraMenuItems = {
  hot: [
    ['Vanilla bean flat white', 'Ristretto espresso with silky vanilla milk', '$5.75'],
    ['Brown sugar mocha', 'Dark chocolate, espresso, brown sugar', '$6.50'],
    ['London fog', 'Earl Grey, steamed milk, house vanilla', '$5.25'],
    ['Ceremonial matcha latte', 'Stone-ground matcha whisked to order', '$6.25'],
    ['Classic drip coffee', 'Rotating small-lot coffee, freshly brewed', '$3.25'],
    ['Caramel macchiato', 'Espresso, steamed milk, salted caramel', '$6.00'],
    ['Hot chocolate', 'Velvety chocolate with whipped cream', '$5.50'],
    ['Dirty chai', 'Spiced chai with a double espresso shot', '$6.25'],
    ['Americano', 'Double espresso topped with hot water', '$4.00'],
  ],
  cold: [
    ['Iced honey oat latte', 'Espresso, oat milk, local honey over ice', '$6.50'],
    ['Orange espresso tonic', 'Bright espresso with citrus tonic water', '$6.25'],
    ['Iced matcha latte', 'Stone-ground matcha and cold milk', '$6.25'],
    ['Brown sugar shaken espresso', 'Shaken espresso, brown sugar, oat milk', '$6.25'],
    ['Vanilla cream cold brew', 'Slow-steeped coffee topped with vanilla cream', '$6.25'],
    ['Strawberry lemonade', 'Fresh lemon, ripe berries, a little sparkle', '$5.50'],
    ['Iced Americano', 'Double espresso, chilled and poured over ice', '$4.50'],
    ['Coconut cold brew', 'Cold brew finished with creamy coconut milk', '$6.00'],
    ['Peach iced tea', 'Black tea with a bright peach finish', '$5.25'],
    ['Sparkling yuzu cooler', 'Yuzu citrus and soda over plenty of ice', '$5.75'],
  ],
  snacks: [
    ['Almond croissant', 'Twice-baked with almond cream and toasted almonds', '$5.25'],
    ['Blueberry lemon scone', 'Tender, buttery, with fresh lemon zest', '$4.25'],
    ['Banana bread', 'Toasted walnuts and a little cinnamon', '$4.50'],
    ['Jammy thumbprint cookie', 'Brown butter cookie with berry jam', '$3.25'],
    ['Avocado toast', 'Sourdough, smashed avocado, chilli crunch', '$9.50'],
    ['Ham & cheddar croissant', 'Flaky pastry with sharp cheddar and ham', '$7.50'],
    ['Lemon poppyseed loaf', 'Soft citrus loaf with a lemon glaze', '$4.50'],
    ['Raspberry oat bar', 'Raspberry preserves on a buttery oat base', '$4.00'],
    ['Chocolate chip cookie', 'Crisp edges, soft middle, sea salt', '$3.50'],
  ],
  seasonal: [
    ['Pumpkin spice latte', 'Espresso, pumpkin, warming autumn spices', '$6.75'],
    ['Cranberry orange scone', 'Tart cranberries, orange zest, vanilla glaze', '$4.75'],
    ['Gingerbread latte', 'Espresso with ginger, cinnamon, and clove', '$6.50'],
    ['Pear & cardamom danish', 'Seasonal pear in a flaky cardamom pastry', '$5.75'],
    ['Peppermint mocha', 'Dark chocolate, espresso, cool peppermint', '$6.75'],
    ['Maple pecan muffin', 'Toasted pecans and local maple syrup', '$4.75'],
    ['Winter citrus tea', 'Black tea steeped with orange and spice', '$5.25'],
    ['Salted caramel steamer', 'Warm milk with house salted caramel', '$5.50'],
    ['Spiced apple cider', 'Warm pressed apple with cinnamon and clove', '$5.25'],
    ['Cranberry bliss bar', 'White chocolate, cranberries, orange icing', '$5.00'],
  ],
};

const menuImages = {
  hot: ['https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80'],
  cold: ['https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'],
  snacks: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'],
  seasonal: ['https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'],
};

const menuGrid = document.querySelector('.menu-grid');
Object.entries(extraMenuItems).forEach(([category, items]) => {
  items.forEach(([name, description, price], index) => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.dataset.category = category;
    const image = menuImages[category][index % menuImages[category].length];
    card.innerHTML = `<div class="card-image"><img src="${image}" alt="${name}" loading="lazy"><span class="card-tag">GOOD DAY FAVOURITE</span></div><div class="card-info"><div><h3>${name}</h3><p>${description}</p></div><b>${price}</b></div>`;
    menuGrid.append(card);
  });
});

const tabs = document.querySelectorAll('.menu-tabs button');
const cards = document.querySelectorAll('.menu-card');

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
