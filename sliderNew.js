let position = 0;
let width = 540;
let slidesToShow = 2;
let list = slider.querySelector('ul');
let listElems = slider.querySelectorAll('li');

slider.querySelector('.prev').onclick = function () {
    position += width;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

slider.querySelector('.next').onclick = function () {
    position -= width;
    position = Math.max(position, -width * (listElems.length - slidesToShow));
    list.style.marginLeft = position + 'px';
};