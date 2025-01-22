"use strict";

const user = {
  name: "Eldar",

  introduce() {
    console.log(`Hello my name is ${this.name}`);
  },
};

console.log(user);
user.introduce();
