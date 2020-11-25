import {version} from './package.json'

import * as num from './libs/number'
import * as fn from './libs/function'
import * as url from './libs/url'
import * as string from './libs/string'
import * as types from './libs/types'

const shiptools = {
    ...num,
    ...url,
    ...fn,
    ...string,
    ...types,
    version
}

module.exports = shiptools
