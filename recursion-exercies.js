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
//[1,2,3] 3
function recursiveMultiplier(arr, num) {
    let length = arr.length;
    function recursive(arr, index) {
        if(length >=0) {
            console.log(arr[index]);
            return;
        }
        recursive(arr, index - 1);
    }
    recursive(arr, length);
}

//recursiveMultiplier([1,2,3,4], 3);

function recursiveMultiplier(arr, num) {
    let newArray  = [];
    function recursive(length) {
        if (length >= arr.length) {
            return true;
        }
        newArray.push(arr[length] * num || 1) 
        return recursive(length + 1);
    }
    recursive(0);
    return newArray;
}

//recursiveReverse([1,2,3,4,5]);
function recursiveReverse(arr) {
    let newArray  = [];
   function reverse(length) {
        if(length <= 0) {
            return true;
        }
        newArray.push(arr[length - 1])
       return reverse(length - 1);  
   }
    reverse(arr.length);
    return newArray;
}
