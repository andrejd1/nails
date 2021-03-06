var modal = document.getElementById('modal');
var close = modal.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal.
window.onload = function() {
  modal.style.display = 'block';
};

// When the user clicks on 'X', close the modal
close.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks outside the modal -- close it.
window.onclick = function(event) {
  if (event.target == modal) {
    // Which means he clicked somewhere in the modal (background area), but not target = modal-content
    modal.style.display = 'none';
  }
};