"use strict";

const container = document.querySelector(".container");
const button = document.querySelector("#resize-button");

function gridBuilder(rows, columns) {
  // Clear existing grid
  container.innerHTML = "";

  // Set container to use flexbox for grid layout
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  // Calculate the size of each grid item based on container size
  const gridItemSize = `${100 / rows}%`;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";

      // Set the size of each grid item dynamically
      gridItem.style.flex = `0 0 ${gridItemSize}`;
      gridItem.style.height = gridItemSize;

      // Add random color hover effect
      gridItem.addEventListener("mouseover", () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                  ${Math.floor(Math.random() * 256)}, 
                                  ${Math.floor(Math.random() * 256)})`;
        gridItem.style.backgroundColor = randomColor;
      });

      container.appendChild(gridItem);
    }
  }
}

// Event listener for resize button
button.addEventListener("click", () => {
  let gridSize = prompt("Enter the number of squares per side (1-100):");

  // Validate input
  gridSize = parseInt(gridSize);
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  // Build a new grid with the entered size
  gridBuilder(gridSize, gridSize);
});

// Initialize the default grid
gridBuilder(16, 16);
