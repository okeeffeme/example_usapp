// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get confirmation
var confirm = document.getElementById('confirmSubmit');

// Enable or Disable button
function acceptTerms() {
  if (!confirm.checked) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
};

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// For display purposes only, remove for production
document.querySelector("#myBtn").addEventListener("click", function(event){
    event.preventDefault();
}, false);

window.onload = acceptTerms();
