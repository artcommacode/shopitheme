// @flow
import {readFileSync} from 'fs'
import {safeLoad} from 'js-yaml'
import {red} from 'chalk'

export default (configPath: string) => {
  try {
    const configFile = readFileSync(configPath, 'utf8')
    return safeLoad(configFile)
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`${red('ERROR:')} config.yml was expected at ${error.path} but it wasn't found`)
    } else if (error.name === 'YAMLException') {
      console.log(`${red('ERROR:')} config.yml couldn't be parsed: ${error.message}`)
    } else {
      console.log(`${red('ERROR:')} ${error.message}`)
    }
    process.exit(1)
  }
}
