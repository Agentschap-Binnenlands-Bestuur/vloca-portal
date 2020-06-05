(() => {
  console.info('this is I, LeClercq');
  let _mobileNav = document.body.querySelector(".mobilemenu__toggle");
  let _mobileMenu = document.body.querySelector(".mobilemenu");
  console.info(_mobileNav);

  _mobileNav.addEventListener('click', function(e){
    console.info('clicked', e);

    if (_mobileMenu.dataset.show === "true") {
      _mobileMenu.dataset.show = false;
      this.classList.replace('vi-cross', 'vi-burger');
    } else {
      _mobileMenu.dataset.show = true;
      this.classList.replace('vi-burger', 'vi-cross');
    }

    console.info(_mobileMenu.dataset.show);
  });
})()
