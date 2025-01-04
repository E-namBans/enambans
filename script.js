function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}







const toggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('icon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Switch icon
  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '☀️'; // Sun icon for light mode
  } else {
    icon.textContent = '🌙'; // Moon icon for dark mode
  }
});




const robot = document.getElementById('robot');
const mouth = document.querySelector('.mouth');

// Initial position and very slow speed
let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let speedX = (Math.random() - 0.5) * 0.2; // Even slower horizontal speed
let speedY = (Math.random() - 0.5) * 0.2; // Even slower vertical speed

// Function to move the robot
function moveRobot() {
  // Update position
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








