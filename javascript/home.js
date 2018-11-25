(function () {
    var targets = [
        ['.pack', 'slideinpack'],
        ['.hoverpic1', 'slideup'],
        ['.hoverpic2', 'slideup'],
        ['.hoverpic3', 'slideup']
    ];

    var items = targets.map(function (target) {
        var element = document.querySelector(target[0]);
        if (element) element.setAttribute('data-reveal-class', target[1]);
        return element;
    }).filter(Boolean);

    function reveal(element) {
        element.classList.add(element.getAttribute('data-reveal-class'));
    }

    document.querySelectorAll('.flip-card').forEach(function (card) {
        function flip() {
            var flipped = card.classList.toggle('is-flipped');
            card.setAttribute('aria-pressed', String(flipped));
        }

        card.addEventListener('click', flip);
        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                flip();
            }
        });
    });

    if (!('IntersectionObserver' in window)) {
        items.forEach(reveal);
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -15% 0px' });

    items.forEach(function (element) {
        observer.observe(element);
    });
})();
