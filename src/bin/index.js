#! /usr/bin/env node
// @flow
import {join} from 'path'
import minimist from 'minimist'
import {red} from 'chalk'
import open from '../scripts/open'
import loadConfig from '../lib/loadconfig'

const [script, ...argv] = process.argv.slice(2)
const configPath = join(process.cwd(), 'config.yml')
const args = minimist(argv)

switch (script) {
  case 'open':
    open({config: loadConfig(configPath), args})
    break
  default:
    console.log(`${red('ERROR:')} the command "${script}" wasn't found`)
    process.exit(1)
    break
}
