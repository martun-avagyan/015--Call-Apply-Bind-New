Function.prototype.customCall = function customCall(self, ...rest) {
  self._function = this;
  return self._function(...rest);
};

function fn(arg1, arg2, arg3) {
  console.log(this.name);
}
const user = {
  name: "Martun",
};
fn.call(user, 1, 2, 3);
fn.customCall(user, 1, 2, 3);
