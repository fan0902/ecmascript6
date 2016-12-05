/**
 * Created by fanlei on 2016/12/4.
 */
var foo = function(){
    "use strict";
    console.log("foo this:" + this);
    return "foo";
}

var foo1 = () => {
    "use strict";
    console.log("foo1 this:" + this);
    return "foo1";
}

console.log(foo());
console.log(foo1());