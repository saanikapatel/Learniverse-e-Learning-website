
    window.addEventListener("scroll", function () {
            const image = document.querySelector("#man img");
    const container = document.querySelector("#man");


    const scrollY = window.scrollY - container.offsetTop;


    const scale = 1 + scrollY / 1000;

    const maxScale = 1.0;
    const limitedScale = Math.min(scale, maxScale);

    image.style.transform = `scale(${limitedScale})`;
        });





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a class to the navbar when the user scrolls down
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});





window.addEventListener('load', function () {
    const footer = document.querySelector('.footer');
    footer.style.animationPlayState = 'running';
});







    