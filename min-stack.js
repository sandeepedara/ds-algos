//Stack using string to storage.
//Stack using Object {} as storage
var Stack = function(capacity) {
    this.capacity = capacity;
    this.currentIndex = 0;
    this.storage = {
    };
}

Stack.prototype.push = function(value) {
    if(this.capacity === this.currentIndex) {
        return "Max capacity reached"
    }
    this.storage[this.currentIndex] = value;
    return ++this.currentIndex;
}

Stack.prototype.pop = function() {
    if(this.currentIndex === 0) {
        return false;
    } 
    var value = this.storage[this.currentIndex - 1];
    delete this.storage[this.currentIndex - 1];
    this.currentIndex--;
    return value;
}

Stack.prototype.peek = function() {
    return this.storage[this.currentIndex - 1] || Infinity;
}

Stack.prototype.count = function() {
    return  this.currentIndex;
}

Stack.prototype.contains = function(toFind) {
    for(var i = 0; i < this.currentIndex; i++) {
        if(this.storage[i] === toFind) {
            return true;
        }
    } 
    return false;
}

Stack.prototype.until = function (toFind) {
    for(var i = 0; i < this.currentIndex; i++) {
        if(this.storage[i] === toFind) {
            return this.currentIndex - i;
        }
    } 
    return false;
}

//////////////////////////////////////////////////////////

function MinStack(capacity) {
    this.storage = {},
    this._capacity = capacity;
    this.min = new Stack();
    this.currentIndex = 0;
}

MinStack.prototype.push = function(value) {
    if(this.capacity === this.currentIndex) {
        return "Max capacity reached"
    }
    this.storage[this.currentIndex] = value;
    if(this.min.peek() > value) {
        this.min.push(value);
    }
    else {
        this.min.push(this.min.peek());
    }
    return ++this.currentIndex;
}

MinStack.prototype.pop = function() {
    if(this.currentIndex === 0) {
        return false;
    } 
    var value = this.storage[this.currentIndex - 1];
    delete this.storage[this.currentIndex - 1];
    this.min.pop();
    this.currentIndex--;
    return value;
}

MinStack.prototype.peek = function() {
    return this.storage[this.currentIndex - 1];
}