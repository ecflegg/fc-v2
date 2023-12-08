// const scroller = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     getDirection: true,
//   });

//   scroller.on('scroll', (instance) => {
//     document.documentElement.setAttribute('data-direction', instance.direction)
// });

// hide nav on scroll

let prevScrollPos = window.scrollY;
console.log(`the scroll position starts at ${prevScrollPos}px`);
const navBar = document.querySelector('#top-nav');

window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos);

    if (prevScrollPos > currentScrollPos) {
        navBar.style.top = '0';
    } else {
        navBar.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;

};



