function generateOutput(n) {
    return `${Array(n + 1).fill("1").join("")}**`;
}


const n5 = generateOutput(5);
const n4 = generateOutput(4);

console.log(n5)
