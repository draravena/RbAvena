let bg_img = document.getElementById("bg");

let gw_opt = document.getElementById("global_warming_opt_div");
let pandemics_opt = document.getElementById("pandemics_opt_div");
let d_regions_opt = document.getElementById("destabilizing_regions_opt_div");
let poverty_opt = document.getElementById("poverty_opt_div");

let gw_img = document.getElementById("global_warming_opt");
let pandemics_img = document.getElementById("pandemics_opt");
let d_regions_img = document.getElementById("destabilizing_regions_opt");
let poverty_img = document.getElementById("poverty_opt");

let heading = document.getElementById("main_heading");
let heading_div = document.getElementById("main_heading_div");
let footer = document.getElementById("description");
let footer_div = document.getElementById("description_div");

const default_heading_offset = "-113px";
const gw_heading_offset = "-120px";
const pandemics_heading_offset = "-90px";
const dr_heading_offset = "-109px";
const poverty_offset = "-93px";

let mouseleave = () => {
  gw_img.style.opacity = 1;
  pandemics_img.style.opacity = 1;
  d_regions_img.style.opacity = 1;
  poverty_img.style.opacity = 1;

  gw_opt.style.opacity = 1;
  pandemics_opt.style.opacity = 1;
  d_regions_opt.style.opacity = 1;
  poverty_opt.style.opacity = 1;

  footer.style.opacity = 1;
  footer_div.style.opacity = 1;
  
  heading.innerHTML = "Select an option";
  heading_div.style.left = default_heading_offset;
  
  bg_img.style.opacity = 0;
}

function footer_transition() {
  footer.style.opacity = 0.75;
  footer_div.style.opacity = 0.75;
}

pandemics_opt.addEventListener(`mouseleave`, mouseleave);
gw_opt.addEventListener(`mouseleave`, mouseleave);
d_regions_opt.addEventListener(`mouseleave`, mouseleave);
poverty_opt.addEventListener(`mouseleave`, mouseleave);


gw_opt.addEventListener(`mouseover`, () => {
  heading.innerHTML = "Global Warming";
  heading_div.style.left = gw_heading_offset;
  
  bg_img.src = "images/index.html/hover_transitions/global_warming_transition.webp";
  bg_img.style.opacity = 1;

  gw_img.style.opacity = 0.5;
  pandemics_img.style.opacity = 0;
  d_regions_img.style.opacity = 0;
  poverty_img.style.opacity = 0;

  gw_opt.style.opacity = 0.5;
  pandemics_opt.style.opacity = 0;
  d_regions_opt.style.opacity = 0;
  poverty_opt.style.opacity = 0;

  footer_transition();
  })

pandemics_opt.addEventListener(`mouseover`, () => {
  heading.innerHTML = "Pandemics";
  heading_div.style.left = pandemics_heading_offset;

  bg_img.src = "images/index.html/hover_transitions/pandemics_transition.webp";
  bg_img.style.opacity = 1;

  gw_img.style.opacity = 0;
  pandemics_img.style.opacity = 0.5;
  d_regions_img.style.opacity = 0;
  poverty_img.style.opacity = 0;

  gw_opt.style.opacity = 0;
  pandemics_opt.style.opacity = 0.5;
  d_regions_opt.style.opacity = 0;
  poverty_opt.style.opacity = 0;

  footer_transition();
})

d_regions_opt.addEventListener(`mouseover`, () => {
  heading.innerHTML = "Global Tension";
  heading_div.style.left = dr_heading_offset;

  bg_img.src = "images/index.html/hover_transitions/d_regions_transition.webp";
  bg_img.style.opacity = 1;

  gw_img.style.opacity = 0;
  pandemics_img.style.opacity = 0;
  d_regions_img.style.opacity = 0.5;
  poverty_img.style.opacity = 0;

  gw_opt.style.opacity = 0;
  pandemics_opt.style.opacity = 0;
  d_regions_opt.style.opacity = 0.5;
  poverty_opt.style.opacity = 0;

  footer_transition();
})

poverty_opt.addEventListener(`mouseover`, () => {
  heading.innerHTML = "Mass Poverty";
  heading_div.style.left = dr_heading_offset;

  bg_img.src = "images/index.html/hover_transitions/poverty_transition.jpg";
  bg_img.style.opacity = 1;

  gw_img.style.opacity = 0;
  pandemics_img.style.opacity = 0;
  d_regions_img.style.opacity = 0;
  poverty_img.style.opacity = 0.5;

  gw_opt.style.opacity = 0;
  pandemics_opt.style.opacity = 0;
  d_regions_opt.style.opacity = 0;
  poverty_opt.style.opacity = 0.5;

  footer_transition();
})




