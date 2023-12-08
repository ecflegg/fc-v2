var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
const container = document.querySelector('.main-content');
const transform = document.querySelectorAll('.track');


console.log(transform);
console.log(container);



function loop() {
    

transform.forEach(function (transform) {
    console.log(transform);
        if (isInViewport(transform)) {
            transform.classList.add('fade-in');
        } else {
            transform.classList.remove('fade-in');
        }
        
    });
    scroll(loop);
};

loop();





function isInViewport(transform) {  
    const rect = transform.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};