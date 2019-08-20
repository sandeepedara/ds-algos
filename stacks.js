//Stack using string to storage.
const Stack = function () {
	this.storage = "";
}

Stack.prototype.push = function (value) {
 this.storage = this.storage + "~" + value 
 return this.storage.split("~").length - 1;
}

Stack.prototype.pop = function () {
	if(this.storage === "") {
		return false;
	}
	let indexOf = this.storage.lastIndexOf('~');
	let toPop = this.storage.slice(indexOf + 1);
	this.storage = this.storage.slice(0, indexOf);
	return toPop;
}

Stack.prototype.length = function () {
 return this.storage.split("~").length - 1;
}

