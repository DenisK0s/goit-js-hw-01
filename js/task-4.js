const credits = 23580;
const pricePerDroid = 3000;
let = message;
let = totalPrice;
let = currentBalabce;


const droidQuantity = Number(prompt('Пожалуйста укажите желаемое количество!'));

currentBalabce = credits - droidQuantity;  

if (droidQuantity === null) {
  message = 'Отменено пользователем!';
} else if (droidQuantity === Number) {
  totalPrice = pricePerDroid * droidQuantity;
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice <= credits) {
  currentBalabce = credits - droidQuantity;
  message = `Вы купили ${droidQuantity} дроидов, на счету осталось ${currentBalabce} кредитов.`;
}

alert(message);