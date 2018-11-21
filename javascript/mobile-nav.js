(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('site-menu');
    var carousel = window.jQuery ? window.jQuery('#carouselExampleIndicators') : null;
    var mobile = window.matchMedia('(max-width: 1024px)');
    if (!toggle || !menu) return;

    function isOpen() {
        return document.body.classList.contains('menu-open');
    }

    function setOpen(open) {
        document.body.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        if (carousel && carousel.carousel) carousel.carousel(open ? 'pause' : 'cycle');
    }

    toggle.addEventListener('click', function () {
        setOpen(!isOpen());
    });

    menu.addEventListener('click', function (event) {
        if (event.target === menu || event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen()) {
            setOpen(false);
            toggle.focus();
        }
    });

    mobile.addEventListener('change', function (event) {
        if (!event.matches && isOpen()) setOpen(false);
    });
})();
