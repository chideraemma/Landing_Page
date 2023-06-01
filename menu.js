// JavaScript for Toggle Menu
let navBar = document.getElementById("navLinks");
let openMenu = document.getElementById("open-menu");
let closeMenu=document.getElementById("close-menu"); 

openMenu.addEventListener("click", function(){
navBar.style.right= "0"  ;
// console.log("ok");
})
closeMenu.addEventListener("click", function(){
    navBar.style.right='-300px';
    // console.log("ok");
});