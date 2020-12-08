import { readFileSync } from "fs";

const data = readFileSync(new URL(`data.txt`, import.meta.url), {
  encoding: "utf-8",
});

const valid = data
  // break into lines
  .split("\n")
  // break line into rule and password
  .map((x) => x.split(":"))
  // break rule into letter count and letter
  .map(([rule, password]) => [rule.split(" "), password])
  // break letter counts into low and high
  .map(([[count, letter], password]) => [count.split("-"), letter, password])
  // figure out if password matches rule
  .reduce((total, [[low, high], letter, password]) => {
    const regex = new RegExp(`[^${letter}]`, "g");
    const matched = password.replace(regex, "");

    if (matched.length >= low && matched.length <= high) {
      return total + 1;
    }
    return total;
  }, 0);

console.log(`Valid: ${valid}`);
