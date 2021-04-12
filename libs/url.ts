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

/**
 * 转换JSON格式字符串为url拼接字符串
 * @param param JSON形式的参数字符串
 */
 export const transParams = (param) => {
    console.log('enter transparam', param);
    let paramObj = JSON.parse(param);
    let paramStr = ''
    for (const key in paramObj) {
      if (paramObj.hasOwnProperty(key)) {
        const element = paramObj[key];
        paramStr = `${paramStr}${paramStr.length>0?'&':'?'}${key}=${element}`;
      }
    }
    console.log('transParams转换后的参数', paramStr);
    return paramStr;
  }