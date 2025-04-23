document.addEventListener('DOMContentLoaded', () => {
  // Category tabs
  const items = document.querySelectorAll('.category-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Product slider
  const slider = document.getElementById('product-slider');
  const btnLeft = document.getElementById('slide-left');
  const btnRight = document.getElementById('slide-right');

  if (!slider || !btnLeft || !btnRight) return; // avoid error if any element is missing

  function getScrollAmount() {
    const product = slider.querySelector('.product');
    return product ? (product.offsetWidth) / 2 : 150; // Half the width of the product + gap
  }

  function checkScrollButtons() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    btnLeft.hidden = slider.scrollLeft <= 0;
    btnRight.hidden = slider.scrollLeft >= maxScrollLeft - 5;
  }

  btnLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  slider.addEventListener('scroll', checkScrollButtons);
  window.addEventListener('load', checkScrollButtons);

  // Scroll to make the first product fully visible on load
  setTimeout(() => {
    slider.scrollTo({ left: 0, behavior: 'instant' });
  }, 0);
});

// toggleNav stays outside
function toggleNav() {
  document.getElementById('mainNav').classList.toggle('show');
  document.querySelector('.header-right').classList.toggle('show');
}
