const throttle = (func, delay) => {
  let wait = false;
  return function () {
    if (!wait) {
      const context = this;
      const args = arguments;
      func.apply(context, args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay)
    }
  }
}
