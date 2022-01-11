Function.prototype.customApply = function customCall(self, arr) {
  self._function = this;
  return self._function(arr);
};

function fn(arg1, arg2, arg3) {
  console.log(this.name);
}
const user = {
  name: "Martun",
};
fn.apply(user, [1, 2, 3]);
fn.customApply(user, [1, 2, 3]);
