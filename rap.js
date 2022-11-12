//start scroll top //
let scrollTop = document.querySelector(".scrollTop");
window.onscroll = () => {
  if (this.scrollY >= 100) {
    scrollTop.classList.add("hide");
  } else {
    scrollTop.classList.remove("hide");
  }
  // console.log(this.scrollY);
};

scrollTop.addEventListener("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//end scroll top //

//start menu bar //
let birgar = document.querySelector(".birgar");
let mobile = document.querySelector(".mobile");
let xmark = document.querySelector(".xmark");
let header = document.querySelector("header");

birgar.addEventListener("click", (e) => {
  mobile.style.display = "block";
  birgar.style.display = "none";
  xmark.style.display = "block";
});

xmark.addEventListener("click", (e) => {
  mobile.style.display = "none";
  birgar.style.display = "block";
  xmark.style.display = "none";
});
//end menu bar //

// start header color //
window.addEventListener("scroll", (e) => {
  let scrollValue = window.scrollY;
  if (scrollValue > 120) {
    header.classList.add("bg-color");
  } else {
    header.classList.remove("bg-color");
  }
});
// end header color //

//start videos //
let videoBtn = document.querySelector(".vid-btn");
let vidBox = document.querySelector(".vid-box");

let arr = [
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/UCs069SEq0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/a_YVF47ytLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/Va1mc6dmGjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/wmGgTYOqG8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/cG3dQf_o-wM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];
let i = 0;
videoBtn.addEventListener("click", (e) => {
  vidBox.innerHTML = arr[i];
  i++;
  if (i == arr.length) {
    i = 0;
  }
});
//end videos //
