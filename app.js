const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', () => {
    const Menu = document.querySelector('#toggleMenu');

    Menu.classList.toggle('active');
})

const arrows = document.querySelectorAll('.arrow');
const productList = document.querySelectorAll('.slider-products-list');

arrows.forEach((arrow, i) => {
    const itemLength = productList[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if (itemLength - (7 + clickCounter) >= 0) {
            productList[i].style.transform = `translateX(${productList[i].computedStyleMap().get('transform')[0].x.value - 260}px)`; 
        } else {
            productList[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
        
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const qtyInput = document.querySelector('.qty');
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue < 99) {
            qtyInput.value = currentValue + 1;
        }
    });
});
