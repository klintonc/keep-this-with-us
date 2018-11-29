(function () {
    function addClass(selector, className) {
        var element = document.querySelector(selector);
        if (element) element.classList.add(className);
        return element;
    }

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            addClass('.bg2 .title', 'sliderightTitle');
            addClass('.bgtext', 'sliderightBgtext');
            addClass('.bgtextpa', 'sliderightBgtextPa');
        }, 100);

        var targets = [
            ['.pa', function () { addClass('.pa', 'sliderightPa'); }],
            ['.paImg', function () { addClass('.paImg', 'sliderightPaImg'); }],
            ['.shape1', function () {
                addClass('.shape1', 'sliderightShape1');
                addClass('.conclude', 'sliderightConclude');
            }]
        ];

        if (!('IntersectionObserver' in window)) {
            targets.forEach(function (target) { target[1](); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.revealCallback();
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -15% 0px' });

        targets.forEach(function (target) {
            var element = document.querySelector(target[0]);
            if (!element) return;
            element.revealCallback = target[1];
            observer.observe(element);
        });
    });
})();
