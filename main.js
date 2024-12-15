"use strict";

const container = document.querySelector(".container");
const button = document.querySelector("#resize-button");

function gridBuilder(rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
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

gridBuilder(16, 16);
