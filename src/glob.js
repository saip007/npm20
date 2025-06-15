import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'


var jsFiles = await glob('**.js', {ignore: 'node_modules/**'})

console.log(jsFiles)