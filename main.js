import {version} from './package.json'

import * as num from './libs/number'
import * as url from './libs/url'

const shiptools = {
    ...num,
    ...url,
    version
}

console.log("shiptools: ", shiptools)

module.exports = shiptools