
/*
let showMenu = () =>{
    nav_list.classList.toggle("vis")
}
showMenu()
*/
function showMenu(){
    console.log("hoge")
    var nav_list = document.getElementById("nav-list")
    nav_list.classList.toggle("vis")
    var nav_list2 = document.getElementById("fa-xmark")
    nav_list2.classList.toggle("vis2") 
    var nav_list3 = document.getElementById("fa-bars")
    nav_list3.classList.toggle("vis3") 

}

function showMenu2(){
    console.log("hoge2")
    var nav_list = document.getElementById("nav-list")
    nav_list.classList.toggle("vis")
    var nav_list2 = document.getElementById("fa-bars")
    nav_list2.classList.toggle("vis3") 
    var nav_list3 = document.getElementById("fa-xmark")
    nav_list3.classList.toggle("vis2") 

}

/*
let ham = document.getElementById("ham")
ham.addEventListener("click", showMenu)
*/

let fa_bars = document.getElementById("fa-bars")
fa_bars.addEventListener("click", showMenu)

let fa_xmark = document.getElementById("fa-xmark")
fa_xmark.addEventListener("click", showMenu2)




/*
let batsu = document.getElementById("batsu")
batsu.addEventListener("click", showMenu2)
*/

let aaa = document.getElementById("aaa")


