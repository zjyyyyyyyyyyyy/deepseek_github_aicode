function doSomething(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (i === j) {
                continue;
            }
            for (let k = 0; k < list.length; k++) {
                if (list[i] + list[j] === list[k]) {
                    console.log("Found match:", list[i], list[j], list[k]);
                }
            }
        }
    }
}

function Func(x, y){
    var result = x * y + y - x;
    return result
}
