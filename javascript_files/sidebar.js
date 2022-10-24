var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

let sidebar = document.getElementById("sidebar");
let arrow_icon = document.getElementById("arrow_down_icon");
let main_div = document.getElementById("main");
let sidebar_div1 = document.getElementById("homepage_div");
let sidebar_div2 = document.getElementById("sidebar_div2");
let sidebar_div3 = document.getElementById("sidebar_div3");
let sidebar_div4 = document.getElementById("sidebar_div4");
var arrow_icon_state = 0;

sidebar_div1.addEventListener(`mouseover`, () => {
  sidebar_div1.style.backgroundColor = "red";
})

sidebar_div2.addEventListener(`mouseover`, () => {
  sidebar_div2.style.backgroundColor = "red";
})

sidebar_div3.addEventListener(`mouseover`, () => {
  sidebar_div3.style.backgroundColor = "red";
})

sidebar_div4.addEventListener(`mouseover`, () => {
  sidebar_div4.style.backgroundColor = "red";
})

sidebar_div1.addEventListener(`mouseleave`, () => {
  sidebar_div1.style.backgroundColor = "#3b3030";
})


sidebar_div2.addEventListener(`mouseleave`, () => {
  sidebar_div2.style.backgroundColor = "#3b3030";
})

sidebar_div3.addEventListener(`mouseleave`, () => {
  sidebar_div3.style.backgroundColor = "#3b3030";
})

sidebar_div4.addEventListener(`mouseleave`, () => {
  sidebar_div4.style.backgroundColor = "#3b3030";
})

arrow_icon.addEventListener(`click`, () => {
  if (arrow_icon_state == 0) {
    arrow_icon.style.rotate = "180deg";
    arrow_icon_state = 1;
    arrow_icon.style.left = "175px";
    main_div.style.marginLeft = "12.5%";
    sidebar.style.opacity = 1;
  }
  else {
    arrow_icon.style.rotate = "0deg";
    arrow_icon_state = 0;
    main_div.style.marginLeft = "0%";
    arrow_icon.style.left = "10px";
    sidebar.style.opacity = 0;
  }
      
})
