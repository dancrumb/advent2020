import { readFileSync } from "fs";

const data = readFileSync(new URL(`data.txt`, import.meta.url), {
  encoding: "utf-8",
});

const entries = data.split("\n").map((x) => parseInt(x, 10));

entries.forEach((entryI, i) => {
  entries.slice(i + 1).forEach((entryJ, j) => {
    entries.slice(j + 1).forEach((entryK) => {
      if (entryI + entryJ + entryK === 2020) {
        console.log(entryI * entryJ * entryK);
        process.exit();
      }
    });
  });
});

console.log("No Match!");
