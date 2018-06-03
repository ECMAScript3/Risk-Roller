var state = {
	a: 3,
	d: 2,
	airfield: 0
}
const roll = require("roll.js");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("d#\tSets defense dice\nSets attack dice\nair#\tSets airfield bonus\nroll#\tRolls # times");


function loop() {
	rl.question("Command:", (ans) => {
	  	{
	  		let k = /(a\ [1-4])|(a[1-4])/.exec(ans);
			if (k !== null) {
				state.a = parseInt(/[1-4]/.exec(k[0])[0]);
			}
		}
		{
			let k = /(d\ [1-3])|(d[1-3])/.exec(ans);
			if (k !== null) {
				state.d = parseInt(/[1-4]/.exec(k[0])[0]);
			}
		}
		{
			let k = /(air[0-1])|(air\ [0-1])/.exec(ans);
			if (k !== null) {
				state.airfield = parseInt(/[0-1]/.exec(k[0])[0]);
			}
		}
		{
			let k = /(roll\ [0-9*]+)|(roll[0-9]+)/.exec(ans);
			if (k !== null) {
				let aL = 0;
				let dL = 0;
				let j = parseInt(/[0-9]+/.exec(k[0])[0]);
				while (j-- > 0) {
					let r = roll(state);
					aL += r.aL;
					dL += r.dL;
				}
				console.log("Attack lost:\t" + aL);
				console.log("Defense lost:\t" + dL);
			};
		};
		if (ans === "") {
			let r = roll(state);
			console.log("Attack lost:\t" + r.aL);
			console.log("Defense lost:\t" + r.dL);
		}

		loop();
	});
}
loop();