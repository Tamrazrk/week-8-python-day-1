let selectedColor = null;  // To store the currently selected color
let isMouseDown = false;   // To track whether the mouse is pressed
const colorBlocks = document.querySelectorAll("#sidebar > div:not(button)");
const mainDiv = document.querySelector("#main");
const clearButton = document.querySelector("#sidebar > button");

// Dynamically generate the squares in the #main div
for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 80; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        mainDiv.appendChild(square);
    }
}

// Event listener for color blocks to handle color selection
colorBlocks.forEach(block => {
    block.addEventListener("click", function(event) {
        selectedColor = event.target.style.backgroundColor;
        // Bonus: Indicate which color is currently selected
        // by adding a border around the selected color block
        colorBlocks.forEach(b => b.style.border = "");
        block.style.border = "3px solid black";
    });
});

// Event listeners for the main grid squares to handle coloring
mainDiv.addEventListener("mouseover", function(event) {
    if (isMouseDown && selectedColor && event.target.classList.contains("square")) {
        event.target.style.backgroundColor = selectedColor;
    }
});
mainDiv.addEventListener("click", function(event) {
    if (selectedColor && event.target.classList.contains("square")) {
        event.target.style.backgroundColor = selectedColor;
    }
});

// Event listener for the clear button
clearButton.addEventListener("click", function() {
    const squares = document.querySelectorAll("#main > .square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});

// Event listeners to track mouse state
document.body.addEventListener("mousedown", function() {
    isMouseDown = true;
});
document.body.addEventListener("mouseup", function() {
    isMouseDown = false;
});
