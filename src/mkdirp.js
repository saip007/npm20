const { mkdirp } = require('mkdirp')

mkdirp('./newDirectoryBymkdirp').then(made =>
  console.log(`made directories, starting with ${made}`)
)