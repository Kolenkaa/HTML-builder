const { readdir } = require("fs/promises");
const { stat } = require("fs");
const { join, extname, basename } = require("path");

async function getFilesInfo() {
	try {
		const pathToFolder = join(__dirname, "secret-folder");

		const files = await readdir(pathToFolder, { withFileTypes: true });

		const filteredFiles = files.filter((item) => item.isFile());

		filteredFiles.forEach((file) => {
			const fileExtension = extname(file.name);
			const fileName = basename(file.name, fileExtension);

			const fileExtensionWithoutDot = fileExtension.split(".")[1];

			stat(join(__dirname, "secret-folder", file.name), (err, stats) => {
				console.log(`${fileName} - ${fileExtensionWithoutDot} - ${stats.size} bytes`);
			});
		});
	} catch (err) {
		console.error(err);
	}
}

getFilesInfo();