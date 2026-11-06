document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        document.querySelector('.title').className = 'sliderightTitle';
        document.querySelector('.pa1').className = 'slideleftpa1';
        document.querySelector('.pa2').className = 'slideleftpa2';
        document.querySelector('.pa3').className = 'slideleftpa3';
        document.querySelector('.pa4').className = 'slideleftpa4';
    },100);
},false);