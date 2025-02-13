// MAIN_V1.HTML JS CODES

const circle = document.getElementById("mouse_pointer");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
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

    





