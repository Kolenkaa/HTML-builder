const fs = require('fs');
const path = require('path');
const pathToCss = path.join(__dirname, 'styles');
const pathToBundle = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(pathToCss, { encoding: 'utf8', withFileTypes: true }, (err, files) => {
	if (err) throw err;

	fs.writeFile(pathToBundle, '', (err) => {
		if (err) throw err;
	})

	files.forEach((file) => {
		const fileName = file.name;
		if (path.extname(fileName).toLowerCase() === '.css' && file.isFile()) {
			const stream = fs.createReadStream(path.join(pathToCss, fileName));
			stream.on('data', (data) => {
				fs.appendFile(pathToBundle, data, (err) => {
					if (err) throw err;
				})
			});
		}
	})
});