let price;
let message;

let deliveryCountry = prompt('Пожалуйста укажите страну!');

if (deliveryCountry !== null) {
  deliveryCountry = deliveryCountry.toLowerCase();
}

switch (deliveryCountry) {
  case 'китай': {
    price = '100';
    deliveryCountry = 'Китай';
    message = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
  
  case 'чили': {
    price = '250';
    deliveryCountry = 'Чили';
    message = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  case 'австралия': {
    price = '170';
    deliveryCountry = 'Австралия';
    message = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
   
  case 'индия': {
    price = '80';
    deliveryCountry = 'Индия';
    message = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  case 'ямайка': {
    price = '120';
    deliveryCountry = 'Ямайка';
    message = `Доставка в ${deliveryCountry} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  default:
    alert('В вашей стране доставка не доступна');
  
}

