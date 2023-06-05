const searchInput = document.getElementById("searchInput");
const searchBtn = document.querySelector(".search-btn");
const searchIcon = document.querySelector(".search-icon i"); // Get the search icon element

// Function to toggle search input and button based on screen size
function toggleSearchElements() {
  if (window.innerWidth <= 900) {
    searchInput.style.display = "none";
    searchIcon.style.display = "none";
    searchBtn.style.display = "block";
  } else {
    searchInput.style.display = "block";
    searchIcon.style.display = "block";
    searchBtn.style.display = "none";
  }
}

// Function to convert icon to placeholder
function convertIconToPlaceholder() {
  if (window.innerWidth <= 900) {
    searchInput.style.display = "block";
    searchIcon.style.display = "block";
    searchBtn.style.display = "none";
    searchInput.value = ""; // Clear the input value
  }
}

// Function to convert placeholder to icon
function convertPlaceholderToIcon() {
  if (window.innerWidth <= 900 && searchInput.value.trim() === "") {
    searchInput.style.display = "none";
    searchIcon.style.display = "none";
    searchBtn.style.display = "block";
    searchInput.value = ""; // Clear the input value
  }
}

// Event listener for input blur
searchInput.addEventListener("blur", function () {
  if (window.innerWidth <= 900) {
    convertPlaceholderToIcon();
  }
});

// Event listener for window resize
window.addEventListener("resize", function () {
  toggleSearchElements();
  if (window.innerWidth > 900) {
    searchInput.removeEventListener("focus", convertIconToPlaceholder);
    searchInput.removeEventListener("input", convertPlaceholderToIcon);
    searchInput.style.display = "block"; // Ensure the input is always displayed
  } else {
    searchInput.addEventListener("focus", convertIconToPlaceholder);
    searchInput.addEventListener("input", convertPlaceholderToIcon);
  }
});

// Event listener for search button click
searchBtn.addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    convertIconToPlaceholder();
  }
});

// Event listener for input focus
searchInput.addEventListener("focus", function () {
  if (window.innerWidth <= 900) {
    searchInput.addEventListener("blur", convertPlaceholderToIcon);
    searchInput.addEventListener("input", convertPlaceholderToIcon);
  }
});

// Initial state based on screen size
toggleSearchElements();
