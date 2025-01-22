"use strict";

const anotherKey = "created at";
const anotherValue = 1995;
const language = {
  name: "Javascript",
  [getKey()]: getValue(),
};

function getKey() {
  return "created at";
}
function getValue() {
  return 1995;
}
console.log(language);
