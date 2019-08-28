function selectionSort(arr) {
    var min = arr[0];
    for(var i = 0 ; i < arr.length; i++) {
       if(arr[i] < min) {
           min = arr[i];
           arr.splice(i,1);
           arr.unshift(min);
       }
    }
    return arr;
}

//selectionSort([10, 4, 11, 2, 13])
