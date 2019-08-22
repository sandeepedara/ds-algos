//implementing queue using objects

var Queue = function (capacity) {
    this._count = 0;
    this._storage = {};
    this._capacity = capacity;
}

Queue.prototype.enqueue = function (value) {
    if(this._capacity === this._count) {
        return "Max capacity reached";
    }
    this._storage[this._count] = value;
    return ++this._count;
}

Queue.prototype.dequeue = function () {
    if(this._count === 0) {
        return false;
    }
    var self = this;
    var value = this._storage[0];
    Object.keys(this._storage).forEach(function(index) {
        self._storage[+index] = self._storage[+index + 1];
    });
    delete this._storage[this._count - 1];
    this._count--;
    return value;
}

Queue.prototype.peek = function () {
    return this._storage[this._count - 1];
}

Queue.prototype.count = function () {
    return this._count;
}

Queue.prototype.contains = function (toFind) {
    var self = this;
    var _found = false;
    Object.keys(this._storage).forEach(function (index) {
        if(self._storage[index] == toFind) {
            _found = true;
        }
    });
    return _found;
}

Queue.prototype.until = function (toFind) {
    var self = this;
    var _foundAt = -1;
    Object.keys(this._storage).forEach(function (index) {
        if(self._storage[index] == toFind) {
            _foundAt = +index + 1;
        }
    });
    return _foundAt;
}

var q1 = new Queue();
