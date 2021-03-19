$(document).ready(function () {
    // $('.header-menu__link').click(function(e){
    //     e.preventDefault();
    //     $('.header-menu__link').removeClass('header-menu__link_active');
    //     $(this).addClass('header-menu__link_active');
    // });
    $('.burger').click(function(){
        if(!$('.header-menu').hasClass('open')){
            $('.pe-7s-close').show();
            $('.pe-7s-menu').hide();
            $('.header-menu').addClass('open');
        }
        else{
            $('.pe-7s-close').hide();
            $('.pe-7s-menu').show();
            $('.header-menu').removeClass('open');
        }
    })
    var slide = document.querySelectorAll('.carouse-slide');
    var li = document.querySelectorAll('.carouse-li'); // Слайдер
    var i = 0;
    var timer;
    function autoplay() {
        timer = setTimeout(right, 2000);
    }
    autoplay();
        function right() {  
            slide[i].classList.remove('carouse-slide__active');
            li[i].classList.remove('carouse-li__active');
            i++;
            if(i == slide.length){
                i = 0;
            }
            slide[i].classList.add('carouse-slide__active');
            li[i].classList.add('carouse-li__active');
            clearTimeout(timer);
            autoplay();
            
        
        }

    for(var j = 0; j < li.length; j++){
        li[j].onclick = function () { 
            var activeLi = document.querySelector('.carouse-li__active');
            activeLi.classList.remove('carouse-li__active');
            this.classList.add('carouse-li__active');
            var current = this.getAttribute('data');
            for(var k = 0; k < slide.length; k++){
                slide[k].classList.remove('carouse-slide__active');
            }
            slide[current].classList.add('carouse-slide__active');
            i = current;
            clearTimeout(timer);
            autoplay();
         }   
    }
    
    // var dd = document.querySelectorAll('.slide');
   
   
})