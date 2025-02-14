// MAIN_V1.HTML JS CODES

const circle = document.getElementById("mouse_pointer");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});



// DARK MODE ICON TOGGLE//
const toggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('icon');
const leftElement = document.querySelector('.left'); 
const rightElement = document.querySelector('.right');
const heading = document.getElementById('heading');
const toggleCircle = document.querySelector('.toggle');
const toggleCircleHover = document.querySelector('.toggle:hover');
const animationElement = document.querySelector('.animation');
const footerDark = document.getElementById('footer');
const heading1 = document.getElementById('heading1');
const paragraph1 = document.getElementById('paragraph1');
const header = document.querySelector('header');
const explore = document.getElementById('explore_more');
const explore1 = document.getElementById('explore_more1');
const explore2 = document.getElementById('explore_more2');
const explore3 = document.getElementById('explore_more3');


// FUNCTIONS

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  leftElement.classList.toggle('dark-mode');
  rightElement.classList.toggle('dark-mode');
  heading.classList.toggle('dark-mode');
  toggleCircle.classList.toggle('dark-mode');
  animationElement.classList.toggle('dark-mode');
 footerDark.classList.toggle('dark-mode')
 heading1.classList.toggle('dark-mode');
 paragraph1.classList.toggle('dark-mode');
header.classList.toggle('dark-mode');
explore.classList.toggle('dark-mode');
explore1.classList.toggle('dark-mode');
explore2.classList.toggle('dark-mode');
explore3.classList.toggle('dark-mode');

// if (document.body.classList.contains('dark-mode')) {
//   icon.textContent = '☀️';
// } else {
//   icon.textContent = '🌙';
// }
});

















const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date-display').innerText = date.toLocaleDateString('en-US', options);


// script.js
const mouse_pointer = document.getElementById("mouse_pointer");

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  // Get mouse coordinates
  const x = e.clientX;
  const y = e.clientY;

  // Update circle position
  mouse_pointer.style.left = `${x}px`;
  mouse_pointer.style.top = `${y}px`;
});

    





