var isstatus = document.querySelector("h2");
var add = document.querySelector('.add-btn')
var remove = document.querySelector('.remove-btn')

add.addEventListener("click",function(){
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
})

remove.addEventListener("click",function(){
    isstatus.innerHTML = "Strenger"
    isstatus.style.color = "red"
})  