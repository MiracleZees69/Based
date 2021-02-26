            var text = document.getElementById('text')
            scroll = window.pageYOffset;
            document.addEventListener('scroll', function (e){
            var offset = window.pageYOffset;
            scroll = offset;
            text.style.top = - scroll/20 + '%';
            })
      const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});