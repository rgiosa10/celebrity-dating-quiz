window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    const honestInput = document.getElementById("honestInput").value.toLowerCase();
    const heightInput = document.getElementById("heightInput").value.toLowerCase();
    const ageInput = document.getElementById("ageInput").value.toLowerCase();
    

    // Ensure user has input values for every question
    if (!honestInput || !heightInput || !ageInput) {
      // Display error message
      document.getElementById("errorMessage").removeAttribute("class");
    } else {
      // Abe is honest & tall
      if (honestInput === "important" || heightInput === "important" && ageInput === "not important") {
        // Display Abe
        document.getElementById("lincoln").removeAttribute("class");
      } else if (ageInput === "important") {
        // Display JFK
        document.getElementById("kennedy").removeAttribute("class");
      } else {
        document.getElementById("bush").removeAttribute("class");
      }
    }

  }
}