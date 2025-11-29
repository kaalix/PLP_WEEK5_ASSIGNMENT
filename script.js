// ================================
// PART 1: VARIABLES + CONDITIONALS
// ================================

let visitorName = "Guest";
let registeredWorkshops = 0;

if (registeredWorkshops === 0) {
  console.log("No workshops registered yet.");
} else {
  console.log("You have registered!");
}


// ================================
// PART 2: FUNCTIONS
// ================================

// Function 1: Toggle "About" description text
function toggleAbout() {
  const text = document.getElementById("aboutText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// Function 2: Add a new workshop row dynamically
function addRandomWorkshop() {
  const table = document.getElementById("workshopTable");

  const row = document.createElement("tr");
  row.innerHTML = `
      <td>Special Edition</td>
      <td>October 1, 2025</td>
      <td>2 hours</td>
      <td>150,000 BIF</td>
  `;

  table.appendChild(row);
}



// ================================
// PART 3: LOOPS
// ================================

// Loop 1: Display topics in console
const topics = document.querySelectorAll("#topicList li");
topics.forEach(topic => console.log("Topic:", topic.textContent));

// Loop 2: Count table rows
const rows = document.querySelectorAll("#workshopTable tr");
for (let i = 0; i < rows.length; i++) {
  console.log("Row", i + 1, ":", rows[i].cells[0].textContent);
}



// ================================
// PART 4: DOM INTERACTIONS
// ================================

// 1. Button toggles description
document.getElementById("toggleAboutBtn")
        .addEventListener("click", toggleAbout);

// 2. Add workshop row
document.getElementById("addWorkshopBtn")
        .addEventListener("click", addRandomWorkshop);

// 3. Form feedback message
document.getElementById("registerForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          document.getElementById("formMessage").textContent =
            "Thank you for registering, " + document.getElementById("fullname").value + "!";
        });
