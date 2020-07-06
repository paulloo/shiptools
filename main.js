import {version} from './package.json'

import * as num from './libs/number'
import * as fn from './libs/function'
import * as url from './libs/url'

const shiptools = {
    ...num,
    ...url,
    ...fn,
    version
}

module.exports = shiptools
