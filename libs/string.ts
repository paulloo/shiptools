/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} _mask 
 * @example shiptools.mask('12398765432',3,7) // => "123****5432"
 */ 
export const mask = (cc, num1 = 0, num2 = 0, _mask = '*') => {
  let reg = new RegExp(`\^\(\.\{${num1}\}\)\(\.\{${num2 - num1}\}\)\(\.${num2>=cc.length?'\?':'\+'}\)\$`);
  return cc.replace(reg,($0,$1,$2,$3)=> $1+$2.replace(/./g,_mask)+$3) 
}

/**
 * 随机字符串
 * @param len 
 * @param radix 
 */
export function uuid(len = 8, radix = 16): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    const value: string[] = []
    let i = 0
    radix = radix || chars.length
  
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)]
    } else {
      // rfc4122, version 4 form
      let r
  
      // rfc4122 requires these characters
      /* eslint-disable-next-line */
      value[8] = value[13] = value[18] = value[23] = '-'
      value[14] = '4'
  
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!value[i]) {
          r = 0 | (Math.random() * 16)
          value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }
  
    return value.join('')
}