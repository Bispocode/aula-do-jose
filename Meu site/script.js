function moveSlide(direction,carouselId) {
    const carousel = dicument.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contais('active'));

    items[activeIndex].classList.remove('active');

    let nextIndex = activeIndex + direction;

    if (nextIndex >= items.lenght) {
        nextIndex = 0;
    }
    if (nextIndex < 0){
        nextIndex = items.lenght - 1;
    }
    items [nextIndex].classList.add('active');
}