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
    this.style.transition = `.3s ease-in`;
    this.style.height = this.style.width = `0px`;
  oGallery.classList.toggle('show', false);
  });
  oBig.classList.toggle('active');
  oBig.style.width = `${nWidth / 1.3}px`; oBig.style.height = `${nHeight / 1.3}px`;
  oBig.style.top = oBig.style.left = `50%`;
  oBig.style.transform = `translate(-50%, -50%)`;
  oGallery.classList.toggle('show', true);
});