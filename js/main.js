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
  let btnCf = document.querySelector('.js_btn_cf');
  let tittle = document.querySelector('.js_pop_box_tittle')


  if (btnC) {
    for (let i = 0; i < btnC.length; i++) {
      btnC[i].addEventListener('click', function () {
        document.querySelector('body').classList.add('noscroll')
        popC.classList.add('active');
        tittle.innerHTML = '';
        tittle.innerHTML = 'ОБРАТНАЯ СВЯЗЬ'
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

  if (btnCf) {
    btnCf.addEventListener('click', function () {
      document.querySelector('body').classList.add('noscroll')
      popC.classList.add('active');
      tittle.innerHTML = '';
      tittle.innerHTML = 'ЗАФИКСИРОВАТЬ СТОИМОСТЬ'
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
      if (footerBox.classList.contains('active')) {
        footerBtn.innerHTML = '';
        footerBtn.innerHTML = 'СКРЫТЬ'
      } else {
        footerBtn.innerHTML = '';
        footerBtn.innerHTML = 'НАШИ ОФИСЫ В РОССИИ'
      }
    })
  }

})();


//input range
(() => {

  let ranges = document.querySelector('.range-input')
  if (ranges) {
    ranges.addEventListener('input', handleInputRange)
  }

  let ranges2 = document.querySelector('.range-input2')
  if (ranges2) {
    ranges2.addEventListener('input', handleInputRange2)
  }

  let ranges3 = document.querySelector('.range-input3')
  if (ranges3) {
    ranges3.addEventListener('input', handleInputRange3)
  }


  function handleInputRange(e) {
    e.target.nextElementSibling.innerHTML = 'ОТ' + ' ' + e.target.value + ' ' + 'М2';
  }

  function handleInputRange2(e) {
    e.target.nextElementSibling.innerHTML = 'ОТ' + ' ' + e.target.value + ' ' + 'РУБ';
  }

  function handleInputRange3(e) {
    e.target.nextElementSibling.innerHTML = 'ОТ' + ' ' + e.target.value + ' ' + 'Mлн.';
  }

})();


//network btn animation
(() => {
  let networkBox = document.querySelector('.js_network_box');
  let networkBtn = document.querySelector('.js_network_btn');


  if (networkBtn) {

    networkBtn.addEventListener('click', function () {
      networkBox.classList.toggle('active');
      this.classList.toggle('active')
    })
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(networkBtn);
    const gambLk = e.composedPath().includes(networkBox);
    if (!lkEl && !gambLk) {
      networkBox.classList.remove('active');
      networkBtn.classList.remove('active');
    }

  })


})();


//network btn animation
(() => {
  let buttonBox = document.querySelector('.js-p-button-box');
  let buttonBtn = document.querySelector('.js-p-button-btn');


  if (buttonBtn) {

    buttonBtn.addEventListener('click', function () {
      buttonBox.classList.toggle('active');
      this.classList.toggle('active')
    })
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(buttonBtn);
    const gambLk = e.composedPath().includes(buttonBox);
    if (!lkEl && !gambLk) {
      buttonBtn.classList.remove('active');
      buttonBox.classList.remove('active');
    }

  })


})();

let pButton = document.querySelector('.js-p-button')
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    pButton.classList.add('hidden');
  } else {
    pButton.classList.remove('hidden');
  }
});


//options pop animation
(() => {
  let optionsBox = document.querySelector('.js_options_box');
  let optionsBtn = document.querySelectorAll('.js_options_btn');
  let optionsClose = document.querySelector('.js_options_close')


  if (optionsBtn) {
    for (let i = 0; i < optionsBtn.length; i++) {
      optionsBtn[i].addEventListener('click', function () {
        optionsBox.classList.add('active')
      })
    }
  }

  if (optionsClose) {
    optionsClose.addEventListener('click', function () {
      optionsBox.classList.remove('active')
    })

  }

})();



//options pop animation
(() => {
  let navBox = document.querySelector('.js_nav_box');
  let navBtn = document.querySelector('.js_nav_btn');
  let navClose = document.querySelector('.js_nav_close')

  if (navBtn) {
    navBtn.addEventListener('click', function (e) {
      e.preventDefault;
      e.stopPropagation;
      navBox.classList.add('active');
      document.querySelector('body').classList.add('noscroll')
    })
  }

  if (navClose) {
    navClose.addEventListener('click', function () {
      navBox.classList.remove('active')
      document.querySelector('body').classList.remove('noscroll')
    })
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(navBtn);
    const gambLk = e.composedPath().includes(navBox);
    if (!lkEl && !gambLk) {
      navBox.classList.remove('active');
      document.querySelector('body').classList.remove('noscroll')
    }

  })


})();
