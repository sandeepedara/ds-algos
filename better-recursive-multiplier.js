var recursiveMultiplier = function(arr, num) {
    if(arr.length === 0) {
        return arr;
    }
    var last = arr.pop();
    recursiveMultiplier(arr, num);
    arr.push(last*num)
    return arr;
}


recursiveMultiplier([1,2,3], 3)