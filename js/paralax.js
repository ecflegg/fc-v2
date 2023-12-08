const graphic = document.querySelectorAll('.para');
const spin = document.querySelectorAll('.about-para');





window.addEventListener('scroll', ()=> {
    let offset = window.scrollY;
    console.log(offset);
    graphic.forEach(element => {
    element.style.transform = `translateY(-${offset * 0.9}px) rotate(${offset * 0.04}deg)`;
    
    });
    
});

window.addEventListener('scroll', ()=> {
    let offset = window.scrollY;
    console.log(offset);
    spin.forEach(element => {
    element.style.transform = `rotate(${offset * 0.08}deg)`;
    
    });
    
});