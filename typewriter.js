const sentence = "Hello, check out this animated sentence!";

let initial = 0;
for (const char of sentence) {
  initial += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char); //prints all the values in one line.

  }, initial) // <= 1s delay to make it noticeable. Can dial it down later.
}
setTimeout(() => {
  console.log("");
}, initial + 50);
