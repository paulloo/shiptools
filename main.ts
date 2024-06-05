import pkg from './package.json'

import * as num from './libs/number'
import * as fn from './libs/function'
import * as url from './libs/url'
import * as string from './libs/string'
import * as types from './libs/types'

const version = pkg.version || 0
const shiptools = {
    ...num,
    ...url,
    ...fn,
    ...string,
    ...types,
    version
}

module.exports = shiptools
