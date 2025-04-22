// category-tabs.js
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.category-item');
    
    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  });
  

  function toggleNav() {
    document.getElementById('mainNav').classList.toggle('show');
    document.querySelector('.header-right').classList.toggle('show');
  }