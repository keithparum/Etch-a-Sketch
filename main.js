"use strict";

const container = document.querySelector(".container");

function gridBuilder(rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      container.appendChild(gridItem);
    }
  }
}

gridBuilder(16, 16);
