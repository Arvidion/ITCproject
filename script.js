const navbarNav = document.querySelector('.nav');
document.querySelector('#hamenu').onclick = () => {
    navbarNav.classList.toggle('active');
}

const hamburger = document.querySelector('#hamenu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});