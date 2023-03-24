let menu__mobile = document.querySelector(".menu__mobile");
let menu__mobileShow = document.querySelector(".menu__header--mobile");
let close__menu = document.querySelector(".close");

menu__mobile.addEventListener("click", myShowMenu);

function myShowMenu() {
  menu__mobileShow.style.display = "block";
}

close__menu.addEventListener("click", myHideMenu);

function myHideMenu() {
    menu__mobileShow.style.display = "none";
//   console.log("close");
}


// slider swiper

