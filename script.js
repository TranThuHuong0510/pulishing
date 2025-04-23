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
    return product ? (product.offsetWidth + 20) / 2 : 150; // Half the width of the product + gap
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



  //card
  const container = document.querySelector('.skin-match-benefits');
  const wrapper = document.querySelector('.skin-match-benefits-wrapper');
  let isPaused = false;
  let delayTimeout;

  function scrollLoop() {
    if (isPaused) return;

    // Scroll by the width of the first card
    const firstCard = container.firstElementChild;
    const cardWidth = firstCard.offsetWidth + 20; // + gap

    container.style.transition = 'transform 1s linear';
    container.style.transform = `translateX(-${cardWidth}px)`;

    // After transition ends, move first card to end & reset transform
    setTimeout(() => {
      container.appendChild(firstCard); // move to end
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
    }, 1000); // match 1s transition
  }

  // Run scroll loop every 2s
  let interval = setInterval(scrollLoop, 2000);

  // Pause/resume on hover
  wrapper.addEventListener('mouseenter', () => {
    isPaused = true;
    clearInterval(interval);
    clearTimeout(delayTimeout);
  });

  wrapper.addEventListener('mouseleave', () => {
    delayTimeout = setTimeout(() => {
      isPaused = false;
      interval = setInterval(scrollLoop, 2000);
    }, 2000); // delay before resume
  });
});

// toggleNav stays outside
function toggleNav() {
  document.getElementById('mainNav').classList.toggle('show');
  document.querySelector('.header-right').classList.toggle('show');
}
