const printSegitiga = 5
if (typeof printSegitiga === "number") {
  for (let i = 1; i <= printSegitiga; i++) {
    for (let j = 1; j <= printSegitiga + 1 - i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log("");
  }
} else {
  console.log("Data harus number");
}