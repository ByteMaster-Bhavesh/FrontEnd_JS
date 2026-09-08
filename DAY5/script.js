var main = document.querySelector("#main")
var dot = document.querySelector("#dot")

main.addEventListener("mousemove", function(dets){
    dot.style.left = dets.x+"px" 
    dot.style.top = dets.y+"px" 
})

