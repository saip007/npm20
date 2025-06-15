const { Command } = require('commander');
const program = new Command();

program
  .description('An application for pizza ordering')
  .option('-p, --peppers', 'Add peppers', 'chilli')
  .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
  .option('-s', 'You do not want any cheese', 'old cheese');

program.parse();

const options = program.opts();
console.log('you ordered a pizza with:' ,options);
// if (options.peppers) console.log('  - peppers');
// const cheese = !options.cheese ? 'no' : options.cheese;
// console.log('  - %s cheese', cheese);