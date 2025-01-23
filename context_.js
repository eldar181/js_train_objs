"use strict";

const user = {
  name: "Eldar",
  _role: "ADMIN",
  hasAccess() {
    return this._role === "ADMIN";
  },
};

console.log(user);
console.log(user.hasAccess());
