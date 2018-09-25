function sumDigPow(a, b) {
    // Your code here
    let result = [];
    for (let x = a; x <= b; x++) {
        if (eureka(x)) result.push(x);
    }
    return result;
}

function eureka(y) {
    x = y + "";
    let sum = 0;
    let expCounter = 1;
    x.split("").forEach(function (e) {
        sum += Math.pow(e, expCounter);
        expCounter++;
    });
    if (sum == y) return true;
    return false;
}
console.log(sumDigPow(1, 200));