const total = 50;
const ordered = 30;

const orderStatus = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер'; 

console.log(orderStatus);

// OPTION - 2

// const total = 50;
// const ordered = 70;

// const success = 'Заказ оформлен, с вами свяжется менеджер';
// const error = 'На складе недостаточно товаров!';


// const orderStatus = ordered > total ? error : success; 

// console.log(orderStatus);

// OPTION - 3 

// const total = 50;
// const ordered = 30;
// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

