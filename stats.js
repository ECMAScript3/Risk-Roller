const roll = require("./roll.js");
const math = require("mathjs");
const state = {
	a: 3,
	d: 2,
	airfield: 0
}
let t = [];
let i = 1000;
while (i-- > 0) {
    let dL = 0;
    let aL = 0;
    let j = 1000;
    while (j-- > 0) {
        let k = roll(state);
        dL += k.dL;
        aL += k.aL;
    }
    t.push(aL/dL);
}
console.log("Sample Size:\t " + 1000);
console.log("Num Samples:\t " + 1000);
console.log("Std Dev:\t " + math.std(t));
console.log("Mean:\t " + math.mean(t));
