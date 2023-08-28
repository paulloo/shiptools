/**
 * 函数防抖 (立即执行版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const debounceStart = (fn, delay = 2000) => debounce(fn,delay,true)


/**
 * 函数防抖 (非立即执行版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const debounceEnd = (fn, delay = 2000) => debounce(fn,delay,false)


/**
 * 函数防抖 (完全版)
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 * @param {boolean} immediate true 表立即执行，false 表非立即执行
 */
export const debounce = (fn, delay, immediate = false) => {
	let timer = null;
	let status = true;
	if (!immediate) return function () {
		let args = arguments;
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => fn.apply(this, args), delay)
	}
	else return function () {
		clearTimeout(timer);
		if (status) {
			status = false;
			fn.call(this, arguments);
		}
		timer = setTimeout(() => status = true, delay);
	}
}


/**
 * 函数节流
 * @param {function} fn 函数
 * @param {number} delay 延迟执行毫秒数
 */
export const throttle = (fn, delay) => {
	let timer = null;
	return function () {
		let args = arguments;
		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				fn.apply(this, args)
			}, delay)
		}

	}
}

// 对象属性复制
export function assign(obj, source) {
	for (var key in source) {
	  if (source.hasOwnProperty(key)) {
		obj[key] = source[key];
	  }
	}
	return obj;
}

//   获取对象所有键
export function keys(obj){
	return Object.keys(obj);
}

// 获取对象所有值
export function values(obj) {
    return Object.values(obj);
}


// 数组去重
export function uniq(array) {
    return Array.from(new Set(array));
}

// 根据迭代器函数获取最小值
export function minBy(array, iteratee) {
    return array.reduce((min, cur) => iteratee(cur) < iteratee(min) ? cur : min, array[0]);
}

// 对象深拷贝
export function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 删除数组中假值
export function compact(array) {
    return array.filter(Boolean);
}

// 返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
export function findIndex(array, predicate) {
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])) return i;
    }
    return -1;
}

export function uniqWith(array, comparator) {
    return array.reduce((acc, current) => {
        const x = acc.find(item=> comparator(current, item));
        if (!x) return acc.concat([current]);
        else return acc;
    }, []);
}

// 过滤数组中每一项
export function filter(arr, func) {
    return arr.filter(func);
}

// 对数组中的每一项运行给定函数
export function map(arr, func) {
    return arr.map(func);
}

// 遍历数组
export function forEach(arr, func) {
    arr.forEach(func);
}

// 移除数组中符合条件的元素
export function remove(arr, func) {
    return arr.filter(v => !func(v));
}

// 合并对象(与assign类似)
export function extend(obj1, obj2) {
    return {...obj1, ...obj2};
}

// 使用值填充数组
export function fill(arr, value, start = 0, end = arr.length) {
    for(let i=start; i<end; i++) {
        arr[i] = value;
    }
    return arr;
}

// 返回两个数组的差集
export function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

// 将数组分割成固定大小的小块
export function chunk(arr, size) {
    var result: any = [];
    for(var i = 0; i < arr.length; i += size) 
        result.push(arr.slice(i, i + size));
    return result;
}

// assign, isFunction, minBy, cloneDeep, debounce, filter, map, forEach, remove, extend, difference, chunk