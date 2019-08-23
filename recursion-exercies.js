//1
function loop(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }
}

//2
function loop(number) {
    console.log(number);
    if(number <=0) {
        return;
    }
    return loop(number - 1);
}

//3
function exponent(base, expo) {
    let result = 1;
    while(expo > 0) {
        result =  base * result;
        expo--;
    }
    return result
}

//4
function recursiveExponent(base, expo) {
    if(expo <= 0) {
        return 1;
    }
    return base * recursiveExponent(base, expo - 1);
}

//5
function recursiveMultiplier(arr, num) {
}


function recursiveMultiplier(arr, num) {
    let newArray = [];
    arr.forEach((a) => {
        newArray.push(a * num);
    });
    return newArray;
}