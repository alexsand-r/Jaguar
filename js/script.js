const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


// -----------------------------  swiper ---------------------

const preferencesSwiper = document.querySelector('.swiper-preferences');

if (preferencesSwiper) {
  const swiper = new Swiper('.swiper-preferences', {
    // Optional parameters
  
    loop: true,

   // добавляем руку
    grabCursor: true,
   
    // автовисота
    //autoHeight: true,

    // скорость переключения слайдов
    speed: 500,
    

    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      autoHeight: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.control-preferences__arrow--right',
      prevEl: '.control-preferences__arrow--left',
      },
      
    // Default parameters
  //slidesPerView: 1,
 // spaceBetween: 50,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    }
    },
  //автопрокрутка
    autoplay: {
    //пауза між прокрутками
     delay: 1500, 
    // закінчити прокрутку на останьому слайді
      stopOnLastSlide: true,
    // відключити після ручного перемикання  
      disableOnInteraction: false
  }
  
    // And if we need scrollbar
    //*scrollbar: {
    //  el: '.swiper-scrollbar',
    //},*/
  });
  
}
