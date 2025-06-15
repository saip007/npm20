#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).parse()

if (argv.name) {
  console.log('Hey, %s is here!',argv.name)
} else {
  console.log('Sorry I\'m not programmed to tell what you want \n tell me your name')
}