const menu = document.querySelector('.menu');
const bars = document.querySelector('.btn-bar');

function showHide() {
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        menu.classList.add('show');
    }
}

bars.addEventListener('click', showHide);