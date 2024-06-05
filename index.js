
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $17e2a7c06afd6377$exports = {};
$17e2a7c06afd6377$exports = JSON.parse('{"name":"shiptools","version":"0.1.17","description":"\u8239\u7968\u901A\u7528javascript\u901A\u7528\u51FD\u6570\u5DE5\u5177\u5305","main":"index.js","scripts":{"test":"parcel ./index.html","start":"parcel index.html","build":"cross-env NODE_ENV=production parcel build main.ts --dist-dir ./ --no-source-maps --no-scope-hoist"},"author":"paul","license":"ISC","devDependencies":{"@babel/core":"^7.24.6","@babel/plugin-transform-modules-umd":"^7.24.6","@babel/preset-env":"^7.24.6","cross-env":"^7.0.3","typescript":"^3.9.10","@parcel/config-default":"^2.12.0","@parcel/optimizer-esbuild":"^2.12.0","parcel":"^2.12.0"},"dependencies":{}}');


var $a5b5b9aff663c50b$exports = {};

$parcel$export($a5b5b9aff663c50b$exports, "float2Fixed", () => $a5b5b9aff663c50b$export$35b7f04c14dd97a6);
$parcel$export($a5b5b9aff663c50b$exports, "mulNum", () => $a5b5b9aff663c50b$export$2a6fcc3e001c02db);
$parcel$export($a5b5b9aff663c50b$exports, "addNum", () => $a5b5b9aff663c50b$export$9d96effffc876a42);
$parcel$export($a5b5b9aff663c50b$exports, "subNum", () => $a5b5b9aff663c50b$export$e688fd2685be7b82);
$parcel$export($a5b5b9aff663c50b$exports, "divNum", () => $a5b5b9aff663c50b$export$eb3c2837238da4f1);
$parcel$export($a5b5b9aff663c50b$exports, "round", () => $a5b5b9aff663c50b$export$2077e0241d6afd3c);
$parcel$export($a5b5b9aff663c50b$exports, "toNumber", () => $a5b5b9aff663c50b$export$a0a81dc3380ce7d3);
/**
 * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。
 * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998
 */ /**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */ function $a5b5b9aff663c50b$var$strip(num, precision) {
    if (precision === void 0) precision = 12;
    return +parseFloat(num.toPrecision(precision));
}
/**
 * Return digits length of a number
 * @param {*number} num Input number
 */ function $a5b5b9aff663c50b$var$digitLength(num) {
    // Get digit length of e
    var eSplit = num.toString().split(/[eE]/);
    var len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}
function $a5b5b9aff663c50b$export$35b7f04c14dd97a6(num) {
    if (num.toString().indexOf("e") === -1) return Number(num.toString().replace(".", ""));
    var dLen = $a5b5b9aff663c50b$var$digitLength(num);
    return dLen > 0 ? $a5b5b9aff663c50b$var$strip(num * Math.pow(10, dLen)) : num;
}
/**
 * 检测数字是否越界，如果越界给出提示
 * @param {*number} num 输入数
 */ function $a5b5b9aff663c50b$var$checkBoundary(num) {
    if ($a5b5b9aff663c50b$var$_boundaryCheckingState) {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
    }
}
function $a5b5b9aff663c50b$export$2a6fcc3e001c02db(num1, num2) {
    var others = [];
    for(var _i = 2; _i < arguments.length; _i++)others[_i - 2] = arguments[_i];
    if (others.length > 0) return $a5b5b9aff663c50b$export$2a6fcc3e001c02db.apply(void 0, [
        $a5b5b9aff663c50b$export$2a6fcc3e001c02db(num1, num2),
        others[0]
    ].concat(others.slice(1)));
    var num1Changed = $a5b5b9aff663c50b$export$35b7f04c14dd97a6(num1);
    var num2Changed = $a5b5b9aff663c50b$export$35b7f04c14dd97a6(num2);
    var baseNum = $a5b5b9aff663c50b$var$digitLength(num1) + $a5b5b9aff663c50b$var$digitLength(num2);
    var leftValue = num1Changed * num2Changed;
    $a5b5b9aff663c50b$var$checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
}
function $a5b5b9aff663c50b$export$9d96effffc876a42(num1, num2, ...num3) {
    var others = [];
    for(var _i = 2; _i < arguments.length; _i++)others[_i - 2] = arguments[_i];
    if (others.length > 0) return $a5b5b9aff663c50b$export$9d96effffc876a42.apply(void 0, [
        $a5b5b9aff663c50b$export$9d96effffc876a42(num1, num2),
        others[0]
    ].concat(others.slice(1)));
    var baseNum = Math.pow(10, Math.max($a5b5b9aff663c50b$var$digitLength(num1), $a5b5b9aff663c50b$var$digitLength(num2)));
    return ($a5b5b9aff663c50b$export$2a6fcc3e001c02db(num1, baseNum) + $a5b5b9aff663c50b$export$2a6fcc3e001c02db(num2, baseNum)) / baseNum;
}
function $a5b5b9aff663c50b$export$e688fd2685be7b82(num1, num2, ...num3) {
    var others = [];
    for(var _i = 2; _i < arguments.length; _i++)others[_i - 2] = arguments[_i];
    if (others.length > 0) return $a5b5b9aff663c50b$export$e688fd2685be7b82.apply(void 0, [
        $a5b5b9aff663c50b$export$e688fd2685be7b82(num1, num2),
        others[0]
    ].concat(others.slice(1)));
    var baseNum = Math.pow(10, Math.max($a5b5b9aff663c50b$var$digitLength(num1), $a5b5b9aff663c50b$var$digitLength(num2)));
    return ($a5b5b9aff663c50b$export$2a6fcc3e001c02db(num1, baseNum) - $a5b5b9aff663c50b$export$2a6fcc3e001c02db(num2, baseNum)) / baseNum;
}
function $a5b5b9aff663c50b$export$eb3c2837238da4f1(num1, num2) {
    var others = [];
    for(var _i = 2; _i < arguments.length; _i++)others[_i - 2] = arguments[_i];
    if (others.length > 0) return $a5b5b9aff663c50b$export$eb3c2837238da4f1.apply(void 0, [
        $a5b5b9aff663c50b$export$eb3c2837238da4f1(num1, num2),
        others[0]
    ].concat(others.slice(1)));
    var num1Changed = $a5b5b9aff663c50b$export$35b7f04c14dd97a6(num1);
    var num2Changed = $a5b5b9aff663c50b$export$35b7f04c14dd97a6(num2);
    $a5b5b9aff663c50b$var$checkBoundary(num1Changed);
    $a5b5b9aff663c50b$var$checkBoundary(num2Changed);
    // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
    return $a5b5b9aff663c50b$export$2a6fcc3e001c02db(num1Changed / num2Changed, $a5b5b9aff663c50b$var$strip(Math.pow(10, $a5b5b9aff663c50b$var$digitLength(num2) - $a5b5b9aff663c50b$var$digitLength(num1))));
}
function $a5b5b9aff663c50b$export$2077e0241d6afd3c(num, ratio) {
    var base = Math.pow(10, ratio);
    return $a5b5b9aff663c50b$export$eb3c2837238da4f1(Math.round($a5b5b9aff663c50b$export$2a6fcc3e001c02db(num, base)), base);
}
var $a5b5b9aff663c50b$var$_boundaryCheckingState = true;
/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 */ function $a5b5b9aff663c50b$var$enableBoundaryChecking(flag) {
    if (flag === void 0) flag = true;
    $a5b5b9aff663c50b$var$_boundaryCheckingState = flag;
}
function $a5b5b9aff663c50b$export$a0a81dc3380ce7d3(value) {
    return +value;
} // isNaN, toNumber


var $88e54ddf303fb709$exports = {};

$parcel$export($88e54ddf303fb709$exports, "debounceStart", () => $88e54ddf303fb709$export$be60dbd3deb25b04);
$parcel$export($88e54ddf303fb709$exports, "debounce", () => $88e54ddf303fb709$export$61fc7d43ac8f84b0);
$parcel$export($88e54ddf303fb709$exports, "debounceEnd", () => $88e54ddf303fb709$export$d807ae104ee9b59e);
$parcel$export($88e54ddf303fb709$exports, "throttle", () => $88e54ddf303fb709$export$de363e709c412c8a);
$parcel$export($88e54ddf303fb709$exports, "assign", () => $88e54ddf303fb709$export$e6e34fd1f2686227);
$parcel$export($88e54ddf303fb709$exports, "keys", () => $88e54ddf303fb709$export$ed97f33186d4b816);
$parcel$export($88e54ddf303fb709$exports, "values", () => $88e54ddf303fb709$export$68c286be0e7e55b7);
$parcel$export($88e54ddf303fb709$exports, "uniq", () => $88e54ddf303fb709$export$f70730c3d1fc524e);
$parcel$export($88e54ddf303fb709$exports, "minBy", () => $88e54ddf303fb709$export$8c826aa0fa59ac68);
$parcel$export($88e54ddf303fb709$exports, "cloneDeep", () => $88e54ddf303fb709$export$629a2bd3f5a49ecc);
$parcel$export($88e54ddf303fb709$exports, "compact", () => $88e54ddf303fb709$export$8e16b83750b44988);
$parcel$export($88e54ddf303fb709$exports, "findIndex", () => $88e54ddf303fb709$export$de3a4d4a0d731119);
$parcel$export($88e54ddf303fb709$exports, "uniqWith", () => $88e54ddf303fb709$export$959b75e301023b5e);
$parcel$export($88e54ddf303fb709$exports, "filter", () => $88e54ddf303fb709$export$3dea766d36a8935f);
$parcel$export($88e54ddf303fb709$exports, "map", () => $88e54ddf303fb709$export$871de8747c9eaa88);
$parcel$export($88e54ddf303fb709$exports, "forEach", () => $88e54ddf303fb709$export$4b80e395e36b5a56);
$parcel$export($88e54ddf303fb709$exports, "remove", () => $88e54ddf303fb709$export$cd7f480d6b8286c3);
$parcel$export($88e54ddf303fb709$exports, "extend", () => $88e54ddf303fb709$export$8b58be045bf06082);
$parcel$export($88e54ddf303fb709$exports, "fill", () => $88e54ddf303fb709$export$9563e054e6f787fb);
$parcel$export($88e54ddf303fb709$exports, "difference", () => $88e54ddf303fb709$export$acaf96a27438246b);
$parcel$export($88e54ddf303fb709$exports, "chunk", () => $88e54ddf303fb709$export$5f7ec48d69707ddd);
$parcel$export($88e54ddf303fb709$exports, "concat", () => $88e54ddf303fb709$export$ee1b3e54f0441b22);
/**
 * 函数防抖 (立即执行版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */ const $88e54ddf303fb709$export$be60dbd3deb25b04 = (fn, delay = 2000)=>$88e54ddf303fb709$export$61fc7d43ac8f84b0(fn, delay, true);
const $88e54ddf303fb709$export$d807ae104ee9b59e = (fn, delay = 2000)=>$88e54ddf303fb709$export$61fc7d43ac8f84b0(fn, delay, false);
const $88e54ddf303fb709$export$61fc7d43ac8f84b0 = (fn, delay, immediate = false)=>{
    let timer;
    let status = true;
    if (!immediate) return function() {
        let args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>fn.apply(this, args), delay);
    };
    else return function() {
        clearTimeout(timer);
        if (status) {
            status = false;
            fn.call(this, arguments);
        }
        timer = setTimeout(()=>status = true, delay);
    };
};
const $88e54ddf303fb709$export$de363e709c412c8a = (fn, delay)=>{
    let timer;
    return function() {
        let args = arguments;
        if (!timer) timer = setTimeout(()=>{
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
};
function $88e54ddf303fb709$export$e6e34fd1f2686227(obj, source) {
    for(var key in source)if (source.hasOwnProperty(key)) obj[key] = source[key];
    return obj;
}
function $88e54ddf303fb709$export$ed97f33186d4b816(obj) {
    return Object.keys(obj);
}
function $88e54ddf303fb709$export$68c286be0e7e55b7(obj) {
    return Object.values(obj);
}
function $88e54ddf303fb709$export$f70730c3d1fc524e(array) {
    return Array.from(new Set(array));
}
function $88e54ddf303fb709$export$8c826aa0fa59ac68(array, iteratee) {
    return array.reduce((min, cur)=>iteratee(cur) < iteratee(min) ? cur : min, array[0]);
}
function $88e54ddf303fb709$export$629a2bd3f5a49ecc(obj, hash = new WeakMap()) {
    // 如果是null则不进行拷贝操作
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 如果是函数或者普通的值或者undefined的话则不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 如是对象的话则进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    // 找到的是所属类原型上的constructor, 而原型上的 constructor指向的是当前类本身
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for(let key in obj)if (obj.hasOwnProperty(key)) // 递归拷贝
    cloneObj[key] = $88e54ddf303fb709$export$629a2bd3f5a49ecc(obj[key], hash);
    return cloneObj;
}
function $88e54ddf303fb709$export$8e16b83750b44988(array) {
    return array.filter(Boolean);
}
function $88e54ddf303fb709$export$de3a4d4a0d731119(array, predicate) {
    for(let i = 0; i < array.length; i++){
        if (predicate(array[i])) return i;
    }
    return -1;
}
function $88e54ddf303fb709$export$959b75e301023b5e(array, comparator) {
    return array.reduce((acc, current)=>{
        const x = acc.find((item)=>comparator(current, item));
        if (!x) return acc.concat([
            current
        ]);
        else return acc;
    }, []);
}
function $88e54ddf303fb709$export$3dea766d36a8935f(arr, func) {
    return arr.filter(func);
}
function $88e54ddf303fb709$export$871de8747c9eaa88(arr, func) {
    return arr.map(func);
}
function $88e54ddf303fb709$export$4b80e395e36b5a56(arr, func) {
    arr.forEach(func);
}
function $88e54ddf303fb709$export$cd7f480d6b8286c3(arr, func) {
    return arr.filter((v)=>!func(v));
}
function $88e54ddf303fb709$export$8b58be045bf06082(target) {
    var sources = Array.prototype.slice.call(arguments, 1);
    // 遍历每个源对象
    for(var i = 0; i < sources.length; i++){
        var src = sources[i];
        if (!src) continue;
        // 遍历每个属性
        for(var key in src)if (src.hasOwnProperty(key)) target[key] = src[key];
    }
    return target;
}
function $88e54ddf303fb709$export$9563e054e6f787fb(arr, value, start = 0, end = arr.length) {
    for(let i = start; i < end; i++)arr[i] = value;
    return arr;
}
function $88e54ddf303fb709$export$acaf96a27438246b(arr1, arr2) {
    return arr1.filter((x)=>!arr2.includes(x));
}
function $88e54ddf303fb709$export$5f7ec48d69707ddd(arr, size) {
    var result = [];
    for(var i = 0; i < arr.length; i += size)result.push(arr.slice(i, i + size));
    return result;
}
function $88e54ddf303fb709$export$ee1b3e54f0441b22() {
    // 将传入的参数转换为数组
    var args = Array.prototype.slice.call(arguments);
    // 创建一个空数组用于存储结果
    var result = [];
    // 遍历每个参数
    for(var i = 0; i < args.length; i++){
        // 如果参数是一个数组，则将其元素添加到result数组中
        if (Array.isArray(args[i])) for(var j = 0; j < args[i].length; j++)result.push(args[i][j]);
        else result.push(args[i]);
    }
    // 返回结果数组
    return result;
} // assign, isFunction, minBy, cloneDeep, debounce, filter, map, forEach, remove, extend, difference, chunk


var $be0841b14eb6a97e$exports = {};

$parcel$export($be0841b14eb6a97e$exports, "URLSearchParams", () => $be0841b14eb6a97e$export$522bbcd37da4eada);
var $9c884761a65e2d1c$exports = {};

$parcel$export($9c884761a65e2d1c$exports, "isNull", () => $9c884761a65e2d1c$export$630801d484da15df);
$parcel$export($9c884761a65e2d1c$exports, "isUndefined", () => $9c884761a65e2d1c$export$fce6876652108ab);
$parcel$export($9c884761a65e2d1c$exports, "isBoolean", () => $9c884761a65e2d1c$export$f9ce7b637dfbe238);
$parcel$export($9c884761a65e2d1c$exports, "isNumber", () => $9c884761a65e2d1c$export$7e4aa119212bc614);
$parcel$export($9c884761a65e2d1c$exports, "isString", () => $9c884761a65e2d1c$export$844ec244b1367d54);
$parcel$export($9c884761a65e2d1c$exports, "isSymbol", () => $9c884761a65e2d1c$export$a244864fd9645c7f);
$parcel$export($9c884761a65e2d1c$exports, "isObject", () => $9c884761a65e2d1c$export$a6cdc56e425d0d0a);
$parcel$export($9c884761a65e2d1c$exports, "isRegExp", () => $9c884761a65e2d1c$export$49841c62b9eff15);
$parcel$export($9c884761a65e2d1c$exports, "isArray", () => $9c884761a65e2d1c$export$43bee75e5e14138e);
$parcel$export($9c884761a65e2d1c$exports, "isFunction", () => $9c884761a65e2d1c$export$f6e2535fb5126e54);
$parcel$export($9c884761a65e2d1c$exports, "getType", () => $9c884761a65e2d1c$export$e2b5c5db9e2009fd);
$parcel$export($9c884761a65e2d1c$exports, "isEmpty", () => $9c884761a65e2d1c$export$dd1bc94b04021eeb);
$parcel$export($9c884761a65e2d1c$exports, "isNaN", () => $9c884761a65e2d1c$export$c9f5652083b8129d);
$parcel$export($9c884761a65e2d1c$exports, "isEqual", () => $9c884761a65e2d1c$export$248d38f6296296c5);
const $9c884761a65e2d1c$var$toString = (value)=>Object.prototype.toString.call(value);
const $9c884761a65e2d1c$export$630801d484da15df = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object Null]";
const $9c884761a65e2d1c$export$fce6876652108ab = (value)=>value === void 0;
const $9c884761a65e2d1c$export$f9ce7b637dfbe238 = (value)=>typeof value === "boolean";
const $9c884761a65e2d1c$export$7e4aa119212bc614 = (value)=>typeof value === "number";
const $9c884761a65e2d1c$export$844ec244b1367d54 = (value)=>typeof value === "string";
const $9c884761a65e2d1c$export$a244864fd9645c7f = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object Symbol]";
const $9c884761a65e2d1c$export$a6cdc56e425d0d0a = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object Object]";
const $9c884761a65e2d1c$export$49841c62b9eff15 = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object RegExp]";
const $9c884761a65e2d1c$export$43bee75e5e14138e = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object Array]";
const $9c884761a65e2d1c$export$f6e2535fb5126e54 = (value)=>$9c884761a65e2d1c$var$toString(value) == "[object Function]";
const $9c884761a65e2d1c$export$e2b5c5db9e2009fd = (value)=>$9c884761a65e2d1c$var$toString(value).match(/\s([a-z]+)/i)[1].toLocaleLowerCase();
const $9c884761a65e2d1c$export$dd1bc94b04021eeb = (value)=>{
    if (value === void 0 || value === null) return true;
    else if ($9c884761a65e2d1c$export$a6cdc56e425d0d0a(value)) return !Object.keys(value).length;
    else if ($9c884761a65e2d1c$export$43bee75e5e14138e(value)) return !value.length;
    else if ($9c884761a65e2d1c$export$844ec244b1367d54(value)) return !value;
    else return value.toString().length == 0;
};
function $9c884761a65e2d1c$export$c9f5652083b8129d(value) {
    return value !== value;
}
function $9c884761a65e2d1c$export$248d38f6296296c5(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
} // isEqual


const $be0841b14eb6a97e$export$522bbcd37da4eada = (param)=>{
    if ((0, $9c884761a65e2d1c$export$a6cdc56e425d0d0a)(param)) return Object.keys(param).map((key)=>`${key}=${encodeURIComponent(JSON.stringify(param[key]))}`).join("&");
    else if ((0, $9c884761a65e2d1c$export$844ec244b1367d54)(param)) {
        let maps = {};
        let _params = param.match(/(([^&?]+)=([^&]*)?)/ig);
        _params && _params.forEach((res)=>{
            // ios 兼容有问题
            // let row = decodeURIComponent(res).split(/(?<!=)=(?!=)/);
            let row = decodeURIComponent(res).replace(/=/, "|").split("|");
            try {
                maps[row[0]] = JSON.parse(decodeURIComponent(row[1]));
            } catch (err) {
                try {
                    maps[row[0]] = decodeURIComponent(row[1]);
                } //特殊字符情况
                catch (err) {
                    try {
                        maps[row[0]] = JSON.parse(row[1]);
                    } catch (err) {
                        maps[row[0]] = row[1];
                    }
                }
            }
        });
        return maps;
    }
};


var $c5fd11b0d0f822dc$exports = {};

$parcel$export($c5fd11b0d0f822dc$exports, "mask", () => $c5fd11b0d0f822dc$export$d99f0801a68bbcf1);
$parcel$export($c5fd11b0d0f822dc$exports, "uuid", () => $c5fd11b0d0f822dc$export$31b40729666a4ae0);
$parcel$export($c5fd11b0d0f822dc$exports, "transParams", () => $c5fd11b0d0f822dc$export$13a35dd9077d1a66);
$parcel$export($c5fd11b0d0f822dc$exports, "toString", () => $c5fd11b0d0f822dc$export$f84e8e69fd4488a5);
/**
 * 根据位置,使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num1 
 * @param {number} num2 
 * @param {string} _mask 
 * @example shiptools.mask('12398765432',3,7) // => "123****5432"
 */ const $c5fd11b0d0f822dc$export$d99f0801a68bbcf1 = (cc, num1 = 0, num2 = 0, _mask = "*")=>{
    let reg = new RegExp(`\^\(\.\{${num1}\}\)\(\.\{${num2 - num1}\}\)\(\.${num2 >= cc.length ? "?" : "+"}\)\$`);
    return cc.replace(reg, ($0, $1, $2, $3)=>$1 + $2.replace(/./g, _mask) + $3);
};
function $c5fd11b0d0f822dc$export$31b40729666a4ae0(len = 8, radix = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const value = [];
    let i = 0;
    radix = radix || chars.length;
    if (len) // Compact form
    for(i = 0; i < len; i++)value[i] = chars[0 | Math.random() * radix];
    else {
        // rfc4122, version 4 form
        let r;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */ value[8] = value[13] = value[18] = value[23] = "-";
        value[14] = "4";
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for(i = 0; i < 36; i++)if (!value[i]) {
            r = 0 | Math.random() * 16;
            value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
    }
    return value.join("");
}
function $c5fd11b0d0f822dc$export$13a35dd9077d1a66(param) {
    console.log("enter transparam", param);
    let paramObj = JSON.parse(param);
    let paramStr = "";
    for(const key in paramObj)if (paramObj.hasOwnProperty(key)) {
        const element = paramObj[key];
        paramStr = `${paramStr}${paramStr.length > 0 ? "&" : "?"}${key}=${element}`;
    }
    console.log("transParams\u8F6C\u6362\u540E\u7684\u53C2\u6570", paramStr);
    return paramStr;
}
function $c5fd11b0d0f822dc$export$f84e8e69fd4488a5(value) {
    return "" + value;
} // toString



const $8d7a97033b427055$var$version = (0, (/*@__PURE__*/$parcel$interopDefault($17e2a7c06afd6377$exports))).version || 0;
const $8d7a97033b427055$var$shiptools = {
    ...$a5b5b9aff663c50b$exports,
    ...$be0841b14eb6a97e$exports,
    ...$88e54ddf303fb709$exports,
    ...$c5fd11b0d0f822dc$exports,
    ...$9c884761a65e2d1c$exports,
    version: $8d7a97033b427055$var$version
};
module.exports = $8d7a97033b427055$var$shiptools;


