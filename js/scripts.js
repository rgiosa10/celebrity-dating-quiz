function getInput() {
  honestInput = document.getElementById("honestInput").value.toLowerCase();
  heightInput = document.getElementById("heightInput").value.toLowerCase();
  ageInput = document.getElementById("ageInput").value.toLowerCase();
};

function displayMatch() {
  // Ensure user has input values for every question
  if (!honestInput || !heightInput || !ageInput) {
    // Display error message
    console.log("Error Print")
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
  };
};

window.addEventListener("load", function() {
  
  let honestInput;
  let heightInput;
  let ageInput;

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  form.addEventListener("submit", getInput);  
  form.addEventListener("submit", displayMatch);
});
