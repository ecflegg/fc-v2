// fade-out

const links = document.querySelectorAll('a.fade');
const main = document.querySelector('.main-content');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        const href = this.getAttribute('href');
        main.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    });
};

// slide-up 

const nextLink = document.querySelectorAll('.next-link');
const nextSection = document.querySelector('.next-project');
// console.log(nextSection);

for (let i = 0; i < nextLink.length; i++) {
    nextLink[i].addEventListener('click', function(event) {
        console.log(nextLink[i]);
        event.preventDefault();
        const href = this.getAttribute('href');
        main.classList.add('fade-out');
        nextSection.classList.add('slide-up');
        
        

        setTimeout(function() {
            window.location.href = href;
        },1000);
    });
};