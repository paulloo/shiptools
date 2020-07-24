import {version} from './package.json'

import * as num from './libs/number'
import * as fn from './libs/function'
import * as url from './libs/url'
import * as string from './libs/string'

const shiptools = {
    ...num,
    ...url,
    ...fn,
    ...string,
    version
}

module.exports = shiptools
