/**
 * Created by fanlei on 2016/12/4.
 */
"use strict";

var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (; ;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
}

var test = {
    [Symbol.iterator]: function*() {
        var pre = 0;
        for (; ;) {
            pre++;
            yield pre;
        }
    }
}

function* gen() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

for (var n of test) {
    if (n > 5)
        break;
    console.log(n);
}

let hw = gen();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

let noop = () => false;
console.log("noop: " + noop());

let a = {
    [(() => 42)()]: 1,
    foo: function () {
        console.log("ffff");
    }
}

a.foo.call();
console.log(a);

var map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map);


var set = new Set();
set.add(1);
set.add("b");
console.log(set);

set.forEach(function (x, y, z) {
    console.log(x + " " + y + " " + z);
});

map.forEach(function (k, v, w, z) {
    console.log("k:" + k + " v:" + v + " " + w + " " + z);
});