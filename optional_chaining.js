const order = {
  id: 233,
  totalPrice: 22500,
  user: {
    id: 22,
    name: "Bob",
    referrer: {
      id: 15,
      name: "Bill",
      referrer: {
        id: 11,
        name: "Daniel",
        referrer: null,
      },
    },
  },
};
console.log(order.user.name);

console.log(order.user.referrer?.name);
console.log(order.user.referrer?.referrer?.name);

let userV = order.user;
while (userV) {
  console.log(userV.name);
  userV = userV.referrer;
}
