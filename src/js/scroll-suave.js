const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

function scrollTop(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const ancora = document.querySelector(href);
    topo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linkInterno.addEventListener('click', scrollTop);