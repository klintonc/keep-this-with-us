document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        document.querySelector('.title').className = 'sliderightTitle';
        document.querySelector('.bgtext').className = 'sliderightBgtext';
        document.querySelector('.bgtextpa').className = 'sliderightBgtextPa';
    },100);
},false);

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if((document.body.scrollTop > 500 &&document.body.scrollTop<700) ||(document.documentElement.scrollTop > 500 &&document.documentElement.scrollTop<700)){
        document.querySelector('.pa').className = 'sliderightPa';
    }
    if((document.body.scrollTop > 700 && document.body.scrollTop<1000) || (document.documentElement.scrollTop>700&&document.documentElement.scrollTop<1000)){
        document.querySelector('.paImg').className = 'sliderightPaImg';
    }
    if(document.body.scrollTop>2300 || document.documentElement.scrollTop>2300){
        document.querySelector('.shape1').className = 'sliderightShape1';
        document.querySelector('.conclude').className = 'sliderightConclude';
    }
}