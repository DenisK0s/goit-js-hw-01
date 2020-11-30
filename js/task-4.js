// Вариант 1

// let credits = 23580;
// const pricePerDroid = 3000;

// let droidsQuantity = +prompt('Пожалуйста укажите желаемое количество!');

// const totalPrice = droidsQuantity * pricePerDroid; 

// const currentCreditsBalance = credits - totalPrice;

// const message = `Вы купили ${droidsQuantity} дроидов, на счету осталось ${currentCreditsBalance} кредитов.`;

// if (droidsQuantity === 0) {
//   console.log('Отменено пользователем!');
// } else if (totalPrice > credits) {
//   console.log('Недостаточно средств на счету!');
// } else {
//   alert(message);
// }

// Вариант 2

let credits = 23580;
const pricePerDroid = 3000;

let droidsQuantity = +prompt('Пожалуйста укажите желаемое количество!');

const totalPrice = droidsQuantity * pricePerDroid; 

if (droidsQuantity === 0) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  credits -= totalPrice;
  alert(`Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`);
}








