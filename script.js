// makes elements fade in smoothly while scrolling
AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 100
});

// shows your progress as you scroll down
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
}); 