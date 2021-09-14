
Array.prototype.FilterCall = function (callback, context) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this))
      newArr.push(this[i]);
  }
  return newArr;
}
