(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

const sliderMainPic = document.querySelector('.slider__main-image');
const sliderPics = document.querySelectorAll('.slider__blocks-pics');
const sliderButtonFirst = document.querySelector('.first-block');
const sliderButtonSecond = document.querySelector('.second-block');
const sliderTextFirst = document.getElementById('first-text');
const sliderTextSecond = document.getElementById('second-text');
const firstPic = document.getElementById('first-pic');
const secondPic = document.getElementById('second-pic');
let bollean_1 = true, bollean_2 = false, bollean_3 = false,
bollean_4 = true, bollean_5 = false, bollean_6 = false, bollean_7 = true, bollean_8 = false, bollean_9 = false;

sliderButtonFirst.addEventListener('click', ()=>{

    if(bollean_1 == true){

        if(bollean_4 == true){
        sliderMainPic.setAttribute('src', 'images/slider-2.jpg');
        sliderMainPic.classList.add('image--active');
        firstPic.setAttribute('src', 'images/slider-1.jpg');
        firstPic.classList.add('image--active-low');
        sliderTextFirst.textContent = "Классное представление!";
        bollean_1 = false;
        bollean_2 = true;
        bollean_4 = false;
        bollean_5 = true;
    }

    else if(bollean_6 == true){
        sliderMainPic.setAttribute('src', 'images/slider-3.jpg');
        sliderMainPic.classList.add('image--active');
        firstPic.setAttribute('src', 'images/slider-1.jpg');
        firstPic.classList.add('image--active-low');
        sliderTextFirst.textContent = "Классное представление!";
        bollean_1 = false;
        bollean_3 = true;
        bollean_5 = true;
        bollean_6 = false;
    }
    }

    else if(bollean_2 == true){
        // 2 картинка
        if(bollean_5 == true){
        sliderMainPic.setAttribute('src', 'images/slider-1.jpg');
        sliderMainPic.classList.remove('image--active');
        firstPic.setAttribute('src', 'images/slider-2.jpg')
        sliderTextFirst.textContent = "Опера VS Оперетта";
        bollean_1 = true;
        bollean_2 = false;
        bollean_4 = true;
        bollean_5 = false;
    }

else if(bollean_6 == true){
    sliderMainPic.setAttribute('src', 'images/slider-3.jpg');
    sliderMainPic.classList.add('image--active');
    firstPic.setAttribute('src', 'images/slider-2.jpg')
    firstPic.classList.remove('image--active-low');
    sliderTextFirst.textContent = "Опера VS Оперетта";
    bollean_2 = false;
    bollean_3 = true;
    bollean_4 = true;
    bollean_6 = false;
}
    }

    else if(bollean_3 == true){
        // вторая картинка
        if(bollean_4 == true){
            sliderMainPic.setAttribute('src', 'images/slider-2.jpg');
            sliderMainPic.classList.add('image--active');
            firstPic.setAttribute('src', 'images/slider-3.jpg');
            firstPic.classList.remove('image--active-low');
            sliderTextFirst.textContent = "Антонио Вивальди. Времена года";
            bollean_2 = true;
            bollean_3= false;
            bollean_4 = false;
            bollean_6 = true;
        }

        // первая картинка
        else if(bollean_5 == true){

            sliderMainPic.setAttribute('src', 'images/slider-1.jpg');
            sliderMainPic.classList.remove('image--active');
            firstPic.setAttribute('src', 'images/slider-3.jpg')
            firstPic.classList.remove('image--active-low');
            sliderTextFirst.textContent = "Антонио Вивальди. Времена года";
            bollean_1 = true;
            bollean_3 = false;
            bollean_5 = false;
            bollean_6 = true;

        }
        
    }
})

sliderButtonSecond.addEventListener('click', () => {
    if (bollean_1 == true){
        if(bollean_7 == true){
        sliderMainPic.setAttribute('src', 'images/slider-3.jpg');
        sliderMainPic.classList.add('image--active');
        secondPic.setAttribute('src', 'images/slider-1.jpg')
        secondPic.classList.add('image--active-low');
        sliderTextSecond.textContent = "Классное представление!";
        bollean_1 = false;
        bollean_3 = true;
        bollean_7 = false;
        bollean_9 = true;
    }

   else if(bollean_8 == true){
        sliderMainPic.setAttribute('src', 'images/slider-2.jpg');
        sliderMainPic.classList.add('image--active');
        secondPic.setAttribute('src', 'images/slider-1.jpg')
        secondPic.classList.add('image--active-low');
        sliderTextSecond.textContent = "Классное представление!";
        bollean_1 = false;
        bollean_2 = true;
        bollean_8 = false;
        bollean_9 = true;
    }
 }

    else if(bollean_2 == true){
if(bollean_7 == true){
    sliderMainPic.setAttribute('src', 'images/slider-3.jpg');
    sliderMainPic.classList.add('image--active');
    secondPic.setAttribute('src', 'images/slider-2.jpg')
    secondPic.classList.remove('image--active-low');
    sliderTextSecond.textContent = "Опера VS Оперетта";
    bollean_2 = false;
    bollean_3 = true;
    bollean_7 = false;
    bollean_8 = true;
}
else if(bollean_9 == true){
    sliderMainPic.setAttribute('src', 'images/slider-1.jpg');
    sliderMainPic.classList.remove('image--active');
    secondPic.setAttribute('src', 'images/slider-2.jpg')
    secondPic.classList.remove('image--active-low');
    sliderTextSecond.textContent = "Опера VS Оперетта";
    bollean_1 = true;
    bollean_2 = false;
    bollean_8 = true;
    bollean_9 = false;
}}

else if(bollean_3 == true){
    if(bollean_9 == true){
        sliderMainPic.setAttribute('src', 'images/slider-1.jpg');
        sliderMainPic.classList.remove('image--active');
        secondPic.setAttribute('src', 'images/slider-3.jpg')
        secondPic.classList.remove('image--active-low');
        sliderTextSecond.textContent = "Антонио Вивальди. Времена года";
        bollean_1 = true;
        bollean_3 = false;
        bollean_7 = true;
        bollean_9 = false;
    }

    else if(bollean_8 == true){
        sliderMainPic.setAttribute('src', 'images/slider-2.jpg');
        sliderMainPic.classList.add('image--active');
        secondPic.setAttribute('src', 'images/slider-3.jpg')
        secondPic.classList.remove('image--active-low');
        sliderTextSecond.textContent = "Антонио Вивальди. Времена года";
    bollean_2 = true;
    bollean_3 = false;
    bollean_7 = true;
    bollean_8 = false;
    }
}
})

// burger

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');

menuBtn.addEventListener('click', ()=>{
menu.classList.toggle('header__list--active');
})

// buttons
const LeftBtn = document.querySelector('.news__calendar-btn-left');
const RightBtn = document.querySelector('.news__calendar-btn-right');
const innerList = document.querySelector('.news__calendar-inner__list');
let i = 0;
let j = 0;
RightBtn.addEventListener('click',()=>{
  
   
    i=i-54;
    innerList.style.transform = `translate(${i}px)`

    if(i== -162){
        innerList.style.transform = 'translate(0px)';
          i=0; 
    }
    
})

LeftBtn.addEventListener('click',()=>{
    i=i+54;

    innerList.style.transform = `translate(${i}px)`
    if(i== 54){
        innerList.style.transform = 'translate(-108px)';
          i=-108; 
    }
    
             
    })

    const menuLinks = document.querySelectorAll('.header__list-link');
    
    if (window.innerWidth <= 767){
        for(let i=0; i< menuLinks.length; i +=1){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__list--active');
            });
        }
    }

    