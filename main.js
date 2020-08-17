//RESPOMNSIVE NAVBAR
const lines = document.querySelector('.lines');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

lines.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s  ease forwards  ${index / 7 + 0.3}s`;
        }
    });
    lines.classList.toggle('toggle');
});

// HEADER SLIDER
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        document.querySelector('.controls .active-slide').classList.remove('active-slide');
        indicator.classList.add('active-slide');
        slider.style.transform = 'translateX(' + (sectionIndex) * -33.3 + '%)';
    });
});

arrowLeft.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
    document.querySelector('.controls .active-slide').classList.remove('active-slide');
    indicatorParents.children[sectionIndex].classList.add('active-slide');
    slider.style.transform = 'translateX(' + (sectionIndex) * -33.3 + '%)';
})

arrowRight.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex +1 : 0;
    document.querySelector('.controls .active-slide').classList.remove('active-slide');
    indicatorParents.children[sectionIndex].classList.add('active-slide');
    slider.style.transform = 'translateX(' + (sectionIndex) * -33.3 + '%)';
})


//WORK SECTION - MULTIPLE CAROUSEL 
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const track = document.querySelector('.track');
let containerWidth = document.querySelector('#work .container').offsetWidth;

window.addEventListener('click', ()=> {
    containerWidth = document.querySelector('#work .container').offsetWidth;
});
let index = 0;

next.addEventListener('click', ()=> {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * containerWidth}px)`;
    if (track.offsetWidth - (index * containerWidth) < containerWidth) {
        next.classList.add('hide');
    }
});

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0 ) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * containerWidth}px)`;
});
