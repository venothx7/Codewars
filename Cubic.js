//Hidden "Cubic" numbers

function isSumOfCubes(s) {
    let reg = /\d{1,3}/g;
    let nums = s.match(reg);
    let result = "";
    let totalSum = 0;
    console.log(nums);
    nums.forEach(function (ele) {
        let sum = 0;
        ele.split("").forEach(function (e) {
            sum += Math.pow(e, 3);
        });
        if (sum == ele) {
            result += (parseInt(ele, 10) + " ");
            totalSum += parseInt(ele, 10);
        }
    });
    if (result) {
        result += (totalSum + " Lucky");
    } else {
        result += "Unlucky"
    }
    return result;
}

console.log(isSumOfCubes("153 000 153 407 000 407 1120 Lucky"));
// console.log(parseInt(000, 10));