const fs = require('fs');
const path = require('path');

// fs.stat(path.join(__dirname, 'files-copy'), function (err) {
// 	if (!err) {
// 		console.log('Директория есть');		
// 		removeFolder();		
// 	}
// 	else if (err.code === 'ENOENT') {
// 		console.log('директории нет');	
// 		createFolder();	
// 	}
// });

async function removeFolder() {
	try {
		await fs.promises.rm(path.join(__dirname, 'files-copy'), {
			recursive: true,
			force: true
		});
	} catch (e) {
		console.log(e);
	}
}

async function createFolder() {
	try {
		await fs.promises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
	} catch (e) {
		console.log(e);
	}
}
createFolder();

fs.readdir(path.join(__dirname, 'files'), (err, e) => {
	if (err) {
		throw err;
	}
	console.log('files copied:', e.length);
	e.forEach(file => {
		fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
			if (err) {
				throw err;
			}
			console.log('copied', `${file}`);
		})
	})
})