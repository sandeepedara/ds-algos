function bubbleSort(arr) {
    for (var i =0; i< arr.length - 1; i++) {
        for(var k =0 ; k < arr.length - i; k++) {
            if(arr[k] > arr[k+1]) {
                var temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}
