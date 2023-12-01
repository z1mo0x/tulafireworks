const combo = document.querySelectorAll('.combo__item');
const compound = document.querySelectorAll('.combo__item-wrapper');

combo.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        const elements = compound[index].querySelectorAll('a');
        const images = combo[index].querySelectorAll('.combo__item-images img');
        elements.forEach((el, i) => {
            el.addEventListener('mouseover', () => {
                images.forEach(elem => {
                    elem.classList.add('filtered')
                    elem.classList.remove('no-filtered')
                })
                images[i].classList.add('no-filtered')
            });
            compound[index].addEventListener('mouseout', () => {
                images.forEach(elem => {
                    elem.classList.remove('filtered')
                    elem.classList.remove('no-filtered')
                })
            });
        });
    });
});