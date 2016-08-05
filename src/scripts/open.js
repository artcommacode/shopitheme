// @flow
import opn from 'opn'

export default ({config, args: {browser}}: {config: typeof config, args: typeof args}) => {
  const options = browser ? {app: browser} : {}
  if (config) opn(`https://${config[':store']}`, options)
}
