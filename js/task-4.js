
let credits = 23580;
const pricePerDroid = 3000;

let droidsQuantity = +prompt('Пожалуйста укажите желаемое количество!');

const totalPrice = droidsQuantity * pricePerDroid; 

const currentCreditsBalance = credits - totalPrice;

const message = `Вы купили ${droidsQuantity} дроидов, на счету осталось ${currentCreditsBalance} кредитов.`;

if (droidsQuantity === 0) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  alert(message);
}










