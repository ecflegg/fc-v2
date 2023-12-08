const cursor = document.querySelector('.cursor');
const a = document.querySelectorAll('a');
const cursorinner = document.querySelector('.cursor-2');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    // console.log(`the x pos= ${x}`);
    const y = e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  });

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorinner.style.left = `${x}px`;
    cursorinner.style.top = `${y}px`;
  });

  document.addEventListener('mousedown', () => {
    cursorinner.classList.add('cursorinnerhover');
  });
  
  document.addEventListener('mouseup', () => {
    cursorinner.classList.remove('cursorinnerhover');
  });

  a.forEach(item => {
    console.log(item);
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });