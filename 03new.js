"use strict";

function User(name) {
  this.name = name;

  return 12;
}

function fakeNew(construct, ...rest) {
  const _obj = {}; // 1
  _obj.__proto__ = construct.prototype; // 2
  const returnedValue = construct.apply(_obj, rest); // 3
  if (typeof returnedValue === "object") {
    return returnedValue;
  } // 4
  return _obj;
}

const user = new User("Martun");
const user1 = fakeNew(User, "Martun");

console.group("new");
console.log(user);
console.log(user.__proto__ === User.prototype);
console.groupEnd();

console.group("fake new");
console.log(user1);
console.log(user1.__proto__ === User.prototype);
console.groupEnd();
