const fs = require('fs-extra')

try {
	fs.mkdirs('./newDirectoryByfsExtra');
	console.log('Success!!')
} catch (err) {
	console.log(err)
}