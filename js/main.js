var swiper = new Swiper(".mySwiper", {
    slidesPerView: 12.3,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".autoSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const mobileSwiper = new Swiper('.swiper-container-mobile', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
});

var swiper = new Swiper(".redSwiper", {
    slidesPerView: 8.1,
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".catSwiper", {});

var swiper = new Swiper(".popularSwiper", {
    slidesPerView: 9.2,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".bestSwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function toggleText() {
    const textContent = document.getElementById('textContent');
    const toggleButton = document.getElementById('toggleButton');

    if (textContent.classList.contains('line-clamp-3')) {
        textContent.classList.remove('line-clamp-3');
        toggleButton.innerText = 'بستن';
    } else {
        textContent.classList.add('line-clamp-3');
        toggleButton.innerText = 'مشاهده بیشتر';
    }
};

// JavaScript to toggle the support window visibility
const supportButton = document.getElementById("supportButton");
const supportWindow = document.getElementById("supportWindow");
const icon = document.getElementById("icon");
const closeIcon = document.getElementById("closeIcon");

// Toggle window on button click
supportButton.addEventListener("click", () => {
    supportWindow.classList.toggle("hidden");
    icon.src = supportWindow.classList.contains("hidden")
        ? "./public/images/support/headphones.svg" // Show headphone icon
        : "./public/images/support/svgexport-32.svg"; // Show close icon
});

// Close window when clicking on the close icon inside the window
closeIcon.addEventListener("click", () => {
    supportWindow.classList.add("hidden");
    icon.src = "./public/images/support/headphones.svg"; // Reset to headphone icon
});


// تغییرات اسکرول برای دکمه و پاپ‌آپ
window.addEventListener('scroll', () => {
    const button = document.getElementById('supermarketButton');
    const expandedText = button.querySelector('.expanded-text');  // متن "تنوع بالا و پرتخفیف"
    const mainText = button.querySelector('.main-text');  // متن "سوپرمارکت"

    // بررسی اسکرول و تغییرات دکمه
    if (window.scrollY > 50) {
        // اسکرول بیشتر از 50px
        expandedText.classList.remove('hidden');  // نمایش متن "تنوع بالا و پرتخفیف"
        mainText.classList.add('hidden');  // مخفی کردن متن "سوپرمارکت"
        button.classList.add('expanded'); // اضافه کردن کلاس برای نمایش متن کامل
    } else {
        // اسکرول کمتر از 50px
        expandedText.classList.add('hidden');  // مخفی کردن متن "تنوع بالا و پرتخفیف"
        mainText.classList.remove('hidden');  // نمایش متن "سوپرمارکت"
        button.classList.remove('expanded'); // حذف کلاس
    }
});

// پیدا کردن متغیرهای popupToggle، overlay، و popup
const popupToggle = document.getElementById('popupToggle');
const overlay = document.querySelector('.overlay');
const popup = document.getElementById('popupContainer');

// نمایش/مخفی کردن پاپ‌آپ با تغییر وضعیت checkbox
popupToggle.addEventListener('change', function () {
    if (popupToggle.checked) {
        overlay.classList.remove('hidden');
        popup.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
        popup.classList.add('hidden');
    }
});

// بستن پاپ‌آپ با کلیک روی overlay
overlay.addEventListener('click', function () {
    popupToggle.checked = false;
    overlay.classList.add('hidden');
    popup.classList.add('hidden');
});

// پیدا کردن دکمه بستن (تصویر)
const closePopupButton = document.querySelector('#closePopupButton img');

// بستن پاپ‌آپ با کلیک روی تصویر close
closePopupButton.addEventListener('click', function () {
    popupToggle.checked = false;  // تغییر وضعیت به false برای بسته شدن پاپ‌آپ
    overlay.classList.add('hidden');  // مخفی کردن overlay
    popup.classList.add('hidden');   // مخفی کردن پاپ‌آپ
});








