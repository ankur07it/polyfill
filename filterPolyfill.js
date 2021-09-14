
Array.prototype.FilterCall = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this))
      newArr.push(this[i]);
  }
  return newArr;
}
