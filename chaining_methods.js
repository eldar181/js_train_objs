"use strict";

const product = {
  title: "Mouse",
  price: 2200,
  setTitle(title) {
    this.title = title;
    return this;
  },
  setPrice(price) {
    this.price = price;
    return this;
  },
};
console.log(product);
product.setTitle = "Laptop";
product.setPrice = 55000;
console.log(product);
