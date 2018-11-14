window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if((document.body.scrollTo > 1000 && document.body.scrollTo<1500) || (document.documentElement.scrollTop >1000 &&document.documentElement.scrollTop<1500)){
        document.querySelector('.pack').className = 'slideinpack';
    }
    if((document.body.scrollTo > 1500 &&document.body.scrollTo < 1800) || (document.documentElement.scrollTop >1500&&document.documentElement.scrollTop<1800)){
        document.querySelector('.hoverpic1').className = 'slideup';
    }
    if((document.body.scrollTo > 1800 &&document.body.scrollTo < 2100) || (document.documentElement.scrollTop >1800&&document.documentElement.scrollTop<2100)){
        document.querySelector('.hoverpic2').className = 'slideup';
    }
    if(document.body.scrollTo > 2100 &&document.body.scrollTo  || document.documentElement.scrollTop >2100){
        document.querySelector('.hoverpic3').className = 'slideup';
    }
}