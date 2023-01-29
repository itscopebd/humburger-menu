let humburger= document.querySelector(".humburger"),
mobileMenu= document.querySelector(".mobile__menu"),
change= document.querySelectorAll(".humburger div");


humburger.addEventListener("click",function(){
    mobileMenu.classList.toggle("show__menu");
    for(let i =0; i < change.length; i++){
        change[i].classList.toggle("change");
    }

})