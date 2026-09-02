var addrm = document.querySelector(".add-rm-btn");
var isstatus = document.querySelector("h2")

var check = 0;

addrm.addEventListener("click",function(){
    if (check == 0){
        isstatus.innerHTML = 'Friends❤️',
        isstatus.style.color = 'green',
        check = 1;
        addrm.innerHTML = "Remove"
        addrm.style.backgroundColor = "gray"
    }
    else{
        isstatus.innerHTML = 'Strenger😏',
        isstatus.style.color = 'red',
        check = 0;
        addrm.innerHTML = "Add Friend"
        addrm.style.backgroundColor = "#5d8e8f"
    }
})