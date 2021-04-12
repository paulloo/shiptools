import { isObject, isString } from './types'
export const URLSearchParams = (param) => {
    if (isObject(param)) {
        return Object.keys(param).map(key => `${key}=${encodeURIComponent(JSON.stringify(param[key]))}`).join('&')
    } else if (isString(param)) {
        let maps = {};
        let _params = param.match(/(([^&?]+)=([^&]*)?)/ig)
        _params && _params.forEach(res => {

            // ios 兼容有问题
            // let row = decodeURIComponent(res).split(/(?<!=)=(?!=)/);
            let row = decodeURIComponent(res).replace(/=/, '|').split('|');
            try {
                maps[row[0]] = JSON.parse(decodeURIComponent(row[1]))
            } catch (err) {
                try {
                    maps[row[0]] = decodeURIComponent(row[1])
                }
                //特殊字符情况
                catch (err) {
                    try {
                        maps[row[0]] = JSON.parse(row[1])
                    } catch (err) {
                        maps[row[0]] = row[1]
                    }
                }
            }
        })
        return maps
    }
}
