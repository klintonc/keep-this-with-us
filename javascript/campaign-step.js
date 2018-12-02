document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        [
            ['.bg2 .title', 'sliderightTitle'],
            ['.pa1', 'slideleftpa1'],
            ['.pa2', 'slideleftpa2'],
            ['.pa3', 'slideleftpa3'],
            ['.pa4', 'slideleftpa4']
        ].forEach(function (target) {
            var element = document.querySelector(target[0]);
            if (element) element.classList.add(target[1]);
        });
    }, 100);
}, false);
