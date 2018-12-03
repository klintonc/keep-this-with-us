document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelectorAll('.member-photo').forEach(function (photo) {
            photo.classList.add('zoomimg');
        });
        var title = document.querySelector('.bg2 .title');
        if (title) title.classList.add('zoomtitle');
    }, 500);
}, false);
