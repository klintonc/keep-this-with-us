document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var phone = document.querySelector('.iphone');
        var text = document.querySelector('.text');
        if (phone) phone.classList.add('slideupIphone');
        if (text) text.classList.add('slideleftText');
    }, 100);
}, false);
