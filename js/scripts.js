window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const honestInput = document.getElementById("honestInput").value.toLowerCase();
    const heightInput = document.getElementById("heightInput").value.toLowerCase();
    const ageInput = document.getElementById("ageInput").value.toLowerCase();

    if (!honestInput || !heightInput || !ageInput) {
      // Display error message
      document.getElementById("errorMessage").removeAttribute("class");
    } else if (honestInput && heightInput && ageInput) {
      // Abe is honest & tall
      if (honestInput === "important" && heightInput === "important" && ageInput === "not important") {
        // Display Abe
        document.getElementById("lincoln").removeAttribute("class");
      } else if (ageInput === "important") {
        // Display JFK
        document.getElementById("kennedy").removeAttribute("class");
      } else {
        document.getElementById("bush").removeAttribute("class");
      }
    };
  });
});