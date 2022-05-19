const readline = require("readline");
const fs = require("fs");
const path = require("path");

function createFile() {
	fs.writeFile(path.join(__dirname, "file.txt"), "", (err) => {
		if (err) throw err;
	});
}

function appendFile(newText) {
	fs.appendFile(path.join(__dirname, "file.txt"), newText, (err) => {
		if (err) throw err;
	});
}

function run() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	createFile();

	console.log("Hey, dude, type something...");

	rl.on("line", (data) => {
		if (data.trim() === "exit") {
			console.log("Bye...");
			return rl.close();
		}
		appendFile(`${data}\n`);
	});

	rl.on("SIGINT", () => {
		console.log("Bye...");
		rl.close();
	});
}

run();