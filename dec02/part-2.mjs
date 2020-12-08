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
  .map(([rule, password]) => [rule.split(" "), password.trim()])
  // break letter counts into first and second
  .map(([[count, letter], password]) => [count.split("-"), letter, password])
  // figure out if password matches rule
  .reduce((total, [[first, second], letter, password]) => {
    if (
      (password[+first - 1] === letter || password[+second - 1] === letter) &&
      password[+first - 1] !== password[+second - 1]
    ) {
      return total + 1;
    }
    return total;
  }, 0);

console.log(`Valid: ${valid}`);
