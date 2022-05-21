const fs = require('fs');
const path = require('path');
const pathToCss = path.join(__dirname, 'styles');
const pathToBundle = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(pathToCss,'utf-8', (err, files) => {
	if (err) throw err;	

	fs.writeFile(pathToBundle,'', (err) => {
		if (err) throw err;		
	})

	files.forEach((file) => {
		if (path.extname(file).toLowerCase() === '.css') {
			const stream = fs.createReadStream(path.join(pathToCss, file));
			stream.on('data', (data) => {
				fs.appendFile(pathToBundle, data, (err) => {
					if (err) throw err;
				})
			});
		}
	})
});