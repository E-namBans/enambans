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

  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
});


// MY AI ROBOT //
const robot = document.getElementById('robot');
const mouth = document.querySelector('.mouth');

// Initial position and very slow speed
let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let speedX = (Math.random() - 0.5) * 0.2; // 
let speedY = (Math.random() - 0.5) * 0.2; // 

// Function to move the robot
function moveRobot() {
   posX += speedX;
  posY += speedY;
  // Collision detection
  if (posX <= 0 || posX >= window.innerWidth - 30) { // Adjusted for smaller size
    speedX *= -1; // Reverse horizontal direction
  }
  if (posY <= 0 || posY >= window.innerHeight - 35) { // Adjusted for smaller size
    speedY *= -1; // Reverse vertical direction
  }
  // Apply position
  robot.style.left = `${posX}px`;
  robot.style.top = `${posY}px`;
  // Continue animation
  requestAnimationFrame(moveRobot);
}

// Add click event listener to change color
robot.addEventListener('click', () => {
  // Generate random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  robot.style.backgroundColor = randomColor;

  // Change expression temporarily
  mouth.style.backgroundColor = 'black';
  mouth.style.width = '4px'; // Adjusted for smaller mouth
  setTimeout(() => {
    mouth.style.backgroundColor = 'white';
    mouth.style.width = '6px'; // Reset to original size
  }, 1000);
});

// Start moving the robot
moveRobot();








