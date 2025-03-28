const svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "600");
svg.setAttribute("height", "400");
document.body.appendChild(svg);

const cellSize = 20;

// Define the twelve pentominoes as 2D arrays
const pentominoes = [
    [[1, 1, 1, 1, 1]], // I
    [[1, 1, 1], [1, 0, 1]], // U
    [[1, 1, 1, 0], [0, 1, 1]], // P
    [[0, 1, 1], [1, 1, 0], [1, 0, 0]], // W
    [[1, 1, 1], [0, 1, 0], [0, 1, 0]], // T
    [[1, 1, 1, 1], [0, 0, 0, 1]], // L
    [[1, 1, 1, 1], [1, 0, 0, 0]], // J
    [[1, 1, 1], [1, 0, 0], [1, 0, 0]], // N
    [[1, 1, 1], [0, 0, 1], [0, 0, 1]], // U
    [[1, 1, 1], [0, 1, 1]], // V
    [[1, 1, 0], [0, 1, 1], [0, 1, 0]], // Y
    [[1, 1, 1, 1], [0, 1, 0, 0]] // Z
];

// Function to draw a pentomino at a given position
function drawPentomino(shape: number[][], startX: number, startY: number) {
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x] === 1) {
                const rect = document.createElementNS(svgNS, "rect");
                rect.setAttribute("x", (startX + x * cellSize).toString());
                rect.setAttribute("y", (startY + y * cellSize).toString());
                rect.setAttribute("width", cellSize.toString());
                rect.setAttribute("height", cellSize.toString());
                rect.setAttribute("fill", "blue");
                rect.setAttribute("stroke", "black");
                svg.appendChild(rect);
            }
        }
    }
}

// Draw all pentominoes on the SVG
let xPos = 10;
let yPos = 10;
for (const pentomino of pentominoes) {
    drawPentomino(pentomino, xPos, yPos);
    xPos += 100;
    if (xPos > 500) {
        xPos = 10;
        yPos += 80;
    }
}
