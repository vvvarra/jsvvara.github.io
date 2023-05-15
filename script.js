// табы

const tabsbtn=document.querySelectorAll(".stepsnav-btn");
const tabsitem=document.querySelectorAll(".stepitem");

tabsbtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentbtn=item;
        let tabid=currentbtn.getAttribute("data-tab");
        let currenttab=document.querySelector(tabid);

        tabsbtn.forEach(function(item){
            item.classList.remove('active');
        });

        tabsitem.forEach(function(item){
            item.classList.remove('active');
        })

        currentbtn.classList.add('active');
        currenttab.classList.add('active');
    });
});


// аккордеон

const accord=document.querySelectorAll('.acc-item__trig');

accord .forEach((it) =>
    it.addEventListener('click', () =>{
        const par=it.parentNode;
        if (par.classList.contains('acc-item--active')){
            par.classList.remove('acc-item--active');
        } else {
            document
                .querySelectorAll('acc-item')
                .forEach((child) => child.classList.add('acc-item--active'))
            
            par.classList.add('acc-item--active');

        }

    })
)


// модальное окно

var modal = document.getElementById('mymodal');
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display="block";

}

span.onclick=function(){
    modal.style.display="none";
}

window.onclick=function(e){
    if (e.target==modal){
        modal.style.display="none";
    }
}


//фильтрация

const fil = document.querySelectorAll('.cards4');
document.querySelector('.butsec4').addEventListener('click', eve=>{

    let filclass = eve.target.dataset['f'];
    
    fil.forEach( elem =>{
        elem.classList.remove('hide');
        if (!elem.classList.contains(filclass) && filclass !=='all'){
            elem.classList.add('hide');
        }
    });
});






//бургер меню

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})


//слайдер

let slideIndex = 1,
slides = document.querySelectorAll('.sliderNew-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.sliderNew-dots'),
dots = document.querySelectorAll('.dot');

showSlides(slideIndex);
function showSlides (n) {
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');
dots.forEach((item) => item.classList.remove('dot-active'));

slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');
}
function plusSlides(n) {
showSlides(slideIndex += n); 
}
function currentSlide(n) {
showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
plusSlides(-1);
});

next.addEventListener('click', function() {
plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {

for (let i = 0; i < dots.length + 1; i++) {

    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
    }
}
});