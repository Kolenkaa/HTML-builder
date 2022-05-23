const fs = require('fs');
const path = require('path');

const templateFile = fs.readFile(path.join(__dirname, '/template.html'), (err) => {
	if (err) throw err;
})
console.log(templateFile);


// const pathToArticles = path.join(__dirname, 'components', 'articles.html');
// const pathToFooter = path.join(__dirname, 'components', 'footer.html');
// const pathToHeader = path.join(__dirname, 'components', 'header.html');


// (async function () {
// 	try {
// 		const templateFile = await fs.readFile(path.join(__dirname, 'template.html'), (err) => {
// 			if (err) throw err;
// 		})

// 		fs.readFile(path.join(__dirname, 'components'), 'utf-8', (err, templateFile) => {
// 			if (err) throw err;

// 			if (!err) {
// 				fs.readFile(pathToHeader, "utf-8", (err, fileContentHeader) => {
// 					if (err) throw err;

// 					templateFile = templateFile.replace(/\{\{header\}\}/, fileContentHeader);

// 					fs.readFile(pathToArticles, "utf-8", (err, fileContentArticles) => {
// 						if (err) throw err;

// 						templateFile = templateFile.replace(/\{\{articles\}\}/, fileContentArticles);

// 						fs.readFile(pathToFooter, "utf-8", (err, fileContentFooter) => {
// 							if (err) throw err;

// 							templateFile = templateFile.replace(/\{\{footer\}\}/, fileContentFooter);
// 						})
// 					})
// 				})
// 			}
// 		})

// 	} catch (error) {
// 		console.log(err);
// 	}
// }
// )();