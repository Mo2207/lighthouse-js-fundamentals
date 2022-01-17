
for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse"); // if divisible by both 3 $ 4
  } else if (i % 4 === 0) {
    console.log("Lighthouse"); // if divisible by 4 only
  } else if (i % 3 === 0) {
    console.log("Loopy"); // if divisible by 3 only
  } else {
    console.log(i); // log number
  }
}
