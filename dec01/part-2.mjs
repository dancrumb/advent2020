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

    for (let k = j + 1; k < entryCount; k++) {
      const entry3 = +entries[k];

      if (entry1 + entry2 + entry3 === 2020) {
        console.log(entry1 * entry2 * entry3);
        process.exit();
      }
    }
  }
}

console.log("No Match!");
