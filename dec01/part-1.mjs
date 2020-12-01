import { readFileSync } from "fs";

const data = readFileSync(new URL(`data.txt`, import.meta.url), {
  encoding: "utf-8",
});

const entries = data.split("\n");
const entryCount = entries.length;

console.log(`Entries: ${entryCount}`);

for (let i = 0; i < entryCount; i++) {
  const entry1 = +entries[i];
  for (let j = i + 1; j < entryCount; j++) {
    const entry2 = +entries[j];

    if (entry1 + entry2 === 2020) {
      console.log(entry1 * entry2);
      process.exit();
    }
  }
}

console.log("No Match!");
