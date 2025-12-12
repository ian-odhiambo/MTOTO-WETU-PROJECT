// Mobile Menu Toggle
const menuBtn = document.querySelector("header button");
const nav = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

// --------------------------
// LIVE UPDATES SECTION
// --------------------------

const updatesContainer = document.createElement("div");
updatesContainer.className =
  "container mx-auto px-4 py-8 bg-white mt-8 rounded-xl shadow-sm";

updatesContainer.innerHTML = `
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Tutor Updates</h2>

  <div class="flex space-x-2 mb-4">
    <input id="updateInput" 
           class="border rounded-lg p-2 flex-grow" 
           type="text" 
           placeholder="Write an update...">

    <button id="addUpdateBtn" 
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Add
    </button>
  </div>

  <ul id="updatesList" class="space-y-2"></ul>
`;

document.body.appendChild(updatesContainer);

// Add Updates
const updateInput = document.getElementById("updateInput");
const updateBtn = document.getElementById("addUpdateBtn");
const updatesList = document.getElementById("updatesList");

updateBtn.addEventListener("click", () => {
  const text = updateInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className =
    "p-3 bg-gray-100 rounded-lg border flex justify-between items-center";
  li.innerHTML = `
      <span>${text}</span>
      <button class="text-red-500 hover:text-red-700 delete-btn">Delete</button>
  `;

  updatesList.appendChild(li);
  updateInput.value = "";
});

// Delete updates
updatesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

// --------------------------
// ANIMATE PROGRESS BARS
// --------------------------

function animateBars() {
  const bars = document.querySelectorAll("div[style*='width']");
  bars.forEach((bar) => {
    const finalWidth = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.transition = "1.2s ease";
      bar.style.width = finalWidth;
    }, 200);
  });
}

animateBars();
