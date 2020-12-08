import { readFileSync } from "fs";

const data = readFileSync(new URL(`map.txt`, import.meta.url), {
  encoding: "utf-8",
});

const rows = data.split("\n");

const rowWidth = rows[0].length;

let trees = 0;
let row = 0;
let col = 0;

while (row < rows.length) {
  if (rows[row][col % rowWidth] === "#") {
    trees = trees + 1;
  }
  col = col + 3;
  row = row + 1;
}

console.log(`Trees: ${trees}`);
