var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
const container = document.querySelector('.main-content');
const line = document.querySelectorAll('hr');



console.log(line);
console.log(container);



function loop() {
    

line.forEach(function (line) {
    console.log(line);
        if (isInViewport(line)) {
            line.classList.add('grow');
        } else {
            line.classList.remove('grow');
        }
        
    });
    scroll(loop);
};

loop();





function isInViewport(line) {  
    const rect = line.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



