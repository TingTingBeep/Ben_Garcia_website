const track = document.getElementById("phoneTrack");

let index = 0;
let startX = 0;

/* UPDATE SLIDE POSITION */
function update(){
  track.style.transform = `translateX(-${index * 100}%)`;
}

/*  ARROW CONTROLS*/

function nextImage(){
  index = Math.min(index + 1, 5);
  update();
}

function prevImage(){
  index = Math.max(index - 1, 0);
  update();
}

/* MOUSE DRAG (SWIPE)*/

track.addEventListener("mousedown",(e)=>{
  startX = e.clientX;
});

track.addEventListener("mouseup",(e)=>{
  let diff = e.clientX - startX;

  if(diff > 50) index = Math.max(index - 1, 0);
  if(diff < -50) index = Math.min(index + 1, 5);

  update();
});

/* =========================
   TOUCH SWIPE (MOBILE)
========================= */

track.addEventListener("touchstart",(e)=>{
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend",(e)=>{
  let diff = e.changedTouches[0].clientX - startX;

  if(diff > 50) index = Math.max(index - 1, 0);
  if(diff < -50) index = Math.min(index + 1, 5);

  update();
});

/* =========================
   SCROLL ANIMATION
========================= */

document.querySelectorAll(".hidden").forEach(el=>{
  new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("show");
    });
  }).observe(el);
});