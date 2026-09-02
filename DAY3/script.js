var wow = document.querySelector("#post-image");
var like = document.querySelector("i");

wow.addEventListener("dblclick",function(){
    like.style.transform ='translate(-50%, -50%) scale(5)'
    like.style.color = "#d13355"
    like.style.opacity = 0.9;

    setTimeout(function(){
    like.style.transform ='translate(-50%, -50%) scale(6)'
    like.style.color = "#c00030"
    like.style.opacity = 100;
    },100);

    setTimeout(function(){
    like.style.transform ='translate(-50%, -50%) scale(5)'
    like.style.color = "#c00030"
    like.style.opacity = 20;
    },150);

    setTimeout(function(){
    like.style.transform ='translate(-50%, -50%) scale(2)'
    like.style.color = "#cabdc1"
    like.style.opacity = 0.11;
    },800);

    setTimeout(function(){
    like.style.transform ='translate(-50%, -50%) scale(0)'
    like.style.color = "#c5adb3"
    like.style.opacity = 0.13;
    },1200);

})