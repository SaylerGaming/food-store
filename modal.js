var searchBtn = document.querySelector('.search-button');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

searchBtn.addEventListener('click', function(){
    modalBg.classList.add('bg_active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg_active');
});