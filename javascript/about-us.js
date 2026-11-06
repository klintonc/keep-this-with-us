document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('#img').className = 'zoomimg';
        document.getElementById('img1').className = 'zoomimg';
        document.querySelector('#img2').className = 'zoomimg';
        document.querySelector('.title').className = 'zoomtitle';
    },500);
}, false);