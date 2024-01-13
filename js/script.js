const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


// plavnoe


const nav= document.getElementById('nav-icon2'),
      ul = document.querySelector('.drop');
      nav.addEventListener('click', () =>{
    nav.classList.toggle('open');
    ul.classList.toggle('none');})

// karusel
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    // slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4500); // Change image every 2 seconds
}







const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function(ev) {
  if (ev.target.tagName != 'IMG') { return false; };
  let oTarget = ev.target, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
  let oBig = this.appendChild(document.createElement('DIV'));
  oBig.style.position = `absolute`;
  oBig.style.top = `${oTarget.offsetTop}px`; oBig.style.left = `${oTarget.offsetLeft}px`;
  oBig.style.width = `${oTarget.offsetWidth}px`; oBig.style.height = `${oTarget.offsetHeight}px`;
  if (this.offsetHeight < this.offsetWidth) {
    nHeight = this.offsetHeight; nWidth = nHeight * nRatio;
  } else {
    nWidth = this.offsetWidth; nHeight = nWidth / nRatio;
  };
  oBig.style.background = `center / 100% 100% no-repeat url('${oTarget.currentSrc}')`;
  oBig.insertAdjacentHTML('beforeend', '<div class="close">×</div>');
  oBig.addEventListener('transitionend', function() { this.querySelector('.close').style.opacity = 1; });
  oBig.addEventListener('click', function(ev) {
    ev.stopPropagation();
    this.addEventListener('transitionend', function() { this.remove(); });
    this.style.transition = `.5s ease-in`;
    this.style.height = this.style.width = `0px`;
  oGallery.classList.toggle('show', false);
  });
  oBig.classList.toggle('active');
  oBig.style.width = `${nWidth / 1.3}px`; oBig.style.height = `${nHeight / 1.3}px`;
  oBig.style.top = oBig.style.left = `50%`;
  oBig.style.transform = `translate(-50%, -50%)`;
  oGallery.classList.toggle('show', true);
});