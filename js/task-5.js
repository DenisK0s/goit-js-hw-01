let price;

const countryName = prompt('Пожалуйста укажите страну!');

const message = `Доставка в ${countryName} будет стоить ${price} кредитов`;

switch (countryName) {
  case 'Китай':
    price = '100 кредитов';
    break;
  
  case 'Чили':
    price = '250 кредитов';
    break;
  
  case 'Австралия':
    price = '170 кредитов';
    break;
  
  case 'Индия':
    price = '80 кредитов';
    break;
  
  case 'Ямайка':
    price = '120 кредитов';
    break;
  
  default:
    alert('В вашей стране доставка не доступна');
  
}

alert(message);