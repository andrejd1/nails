const modal = document.getElementById('modal');
const close = modal.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal.
window.onload = function() {
  const currentDate = new Date();
  const targetDate = new Date('2024-11-21T23:59:59'); // Set the target date to November 21st, 2023

  // Check if the current date is before the target date
  if (currentDate <= targetDate) {
    // Check if the modal has already been displayed during this session
    if (!sessionStorage.getItem('modalDisplayed')) {
      modal.style.display = 'block';
      // Set the modalDisplayed item in the sessionStorage
      sessionStorage.setItem('modalDisplayed', 'true');
    }
  }
};

// When the user clicks on 'X', close the modal
close.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks outside the modal -- close it.
window.onclick = function(event) {
  if (event.target === modal) {
    // Which means he clicked somewhere in the modal (background area), but not target = modal-content
    modal.style.display = 'none';
  }
};