let price;
let message;

let deliveryCountry = prompt('Пожалуйста укажите страну!');

deliveryCountry = deliveryCountry.toLowerCase();

switch (deliveryCountry) {
  case 'китай': {
    price = '100';
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
  
  case 'чили': {
    price = '250';
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  case 'австралия': {
    price = '170';
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
   
  case 'индия': {
    price = '80';
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  case 'ямайка': {
    price = '120';
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message);
    break;
  }
    
  default:
    alert('В вашей стране доставка не доступна');
  
}

