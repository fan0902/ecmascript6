/**
 * Created by fanlei on 2016/12/2.
 */
"use strict";

class DemoClass {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static print() {
        return "this is DemoClass print()";
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }

}

class SubDemoClass extends DemoClass {

}

(function Let() {
    "use strict";
    console.log("IIFE:()");
})();

+function () {
    "use strict";
    console.log("IIFE:+");
}();

!function () {
    "use strict";
    console.log("IIFE:!");
}();

(function () {
    "use strict";
    let x = "outer_x";
    var y = "outer_y";
    {
        let x = "inner_x";
        var y = "inner_y";
    }
    console.log(x);
    console.log(y);
})();

(function () {
    "use strict";
    let x_m = "x_m";
    var y_m = "y_m";
})();

{
    let xb = "block_x";
    var yb = "block_y";
}

(function () {
    "use strict";
    for (var i = 0; i < 2; i++) {

    }
    console.log("var_i:" + i);
})();

(function () {
    "use strict";
    for (let i = 0; i < 2; i++) {

    }
    try {
        console.log("let_i:" + i);
    }catch (e){
        console.log(e);
    }
})();

(function () {
    "use strict";
    const i = 1;
    //const i = 2;
    console.log("const_i:" + i);
})();

(function () {
    "use strict";
    let y1 = Symbol("y");
    let y2 = Symbol("y");
    console.log("Symbol_y1: " + y1.toString());
    console.log("Symbol_y2: " + y2.toString());
})();



var obj = new DemoClass(1, 2);
console.log(obj.toString());
console.log(DemoClass.print());
console.log(SubDemoClass.print());


