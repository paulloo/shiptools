import shiptools from './index'

console.log("shiptools:", shiptools)
const  {
    addNum,
    keys,
    isFunction,
    isNaN,
    uniq,
    minBy,
    compact,
    findIndex,
    isEmpty,
    toString,
    uniqWith,
    isEqual,
    values,
    toNumber,
    filter,
    map,
    remove,
    assign,
    cloneDeep,
    debounce,
    forEach,
    extend,
    fill,
    difference,
    chunk
} = shiptools


console.log(addNum(2, 3))

// console.log(assign({a: 1}, {b: 2})); // {a: 1, b: 2}

console.log(keys({a: 1, b: 2})); // ['a', 'b']

console.log(isFunction(function(){})); // true

console.log(isNaN(NaN)); // true

console.log(uniq([1, 2, 2, 3, 3])); // [1, 2, 3]

console.log(minBy([1, 2, 3], n => Math.abs(n - 2))); // 2

let obj = {a: 1};
let cloneObj = cloneDeep(obj);
cloneObj.a = 2;
console.log(obj.a); // 1

console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]

console.log(findIndex([5, 12, 8, 130, 44], (n) => n > 13)); // 3

console.log(isEmpty([])); // true

console.log(toString(123)); // "123"

console.log(uniqWith([{ x: 1 }, { x: 2 }, { x: 1 }], isEqual)); // [{ x: 1 }, { x: 2 }]

console.log(isEqual({x: 1}, {x: 1})); // true

console.log(values({a: 1, b: 2})); // [1, 2]

console.log(toNumber("123")); // 123

window.addEventListener('scroll', debounce(() => {
    console.log('Scroll event handler invoked.');
}, 200));

console.log(filter([1, 2, 3, 4], num => num >= 3)); // [3, 4]

console.log(map([1, 2, 3, 4], num => num * 2)); // [2, 4, 6, 8]

forEach([1, 2, 3, 4], num => console.log(num)); // logs 1, 2, 3, 4

console.log(remove([1, 2, 3, 4], num => num >= 3)); // [1, 2]


console.log(extend({a: 1}, {b: 2})); // {a: 1, b: 2}


console.log(fill([1, 2, 3, 4], 0, 1, 3)); // [1, 0, 0, 4]

console.log(difference([1, 2, 3], [2, 3, 4])); // [1]


console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]