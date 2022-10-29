let sidebar = document.getElementById("sidebar");
let arrow_icon = document.getElementById("arrow_down_icon");
let main_div = document.getElementById("main");
var arrow_icon_state = 0;

arrow_icon.addEventListener(`click`, () => {
  if (arrow_icon_state == 0) {
    arrow_icon.style.rotate = "-180deg";
    arrow_icon_state = 1;
    main_div.style.marginLeft = "12.5%";
    arrow_icon.style.marginLeft = "12.5%";
    sidebar.style.width = "12.5%";
  }
  else {
    arrow_icon.style.rotate = "0deg";
    arrow_icon_state = 0;
    main_div.style.marginLeft = "0%";
    arrow_icon.style.marginLeft = "0%";
    sidebar.style.width = "0%";
  }
})
