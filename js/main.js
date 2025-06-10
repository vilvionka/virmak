//menu
(() => {
  let menu = document.querySelector('.js_menu');
  let menuClose = document.querySelector('.js_menu_close');
  let menuBtn = document.querySelector('.header_burger');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
    })
  }
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      menu.classList.remove('active');
    })
  }

})();

//link main animation
(() => {
  let links = document.querySelectorAll('.main_link_box_item');


  if (links) {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseover', function () {
        links.forEach(el => {
          el.classList.remove('active');
        });
        this.classList.add('active');
      })
    }
  }


})();

// form animation pop_up
(() => {
  let popO = document.querySelector('.js_pop_o');
  let popC = document.querySelector('.js_pop_c');
  let popBoxC = document.querySelector('.js_pop_box_c');
  let popBoxO = document.querySelector('.js_pop_box_o');
  let btnC = document.querySelectorAll('.js_btn_c');
  let btnO = document.querySelectorAll('.js_btn_o');


  if (btnC) {
    for (let i = 0; i < btnC.length; i++) {
      btnC[i].addEventListener('click', function () {
        document.querySelector('body').classList.add('noscroll')
        popC.classList.add('active');
      })
    }
  }

  if (btnO) {
    for (let i = 0; i < btnO.length; i++) {
      btnO[i].addEventListener('click', function () {
        document.querySelector('body').classList.add('noscroll')
        popO.classList.add('active');
      })
    }
  }

  if (popC) {
    popC.addEventListener('click', function (e) {
      if (e.target !== e.composedPath().includes(btnC)) {
        popC.classList.remove('active');
        document.querySelector('body').classList.remove('noscroll')
      }
    })
  }

  if (popO) {
    popO.addEventListener('click', function (e) {
      if (e.target !== e.composedPath().includes(btnO)) {
        popO.classList.remove('active');
        document.querySelector('body').classList.remove('noscroll')
      }
    })
  }

})();

//footer btn
(() => {
  let footerBox = document.querySelector('.js_footer_box');
  let footerBtn = document.querySelector('.js_footer_btn');
  let footerWrap = document.querySelector('.js_footer_wrap');


  if (footerBtn) {

    footerBtn.addEventListener('click', function () {
      footerBox.classList.toggle('active');
      footerWrap.classList.toggle('active');
      if(footerBox.classList.contains('active')){
        footerBtn.innerHTML = '';
        footerBtn.innerHTML = 'СКРЫТЬ'
      }else{
        footerBtn.innerHTML = '';
        footerBtn.innerHTML = 'НАШИ ОФИСЫ В РОССИИ'
      }
    })
  }



})();