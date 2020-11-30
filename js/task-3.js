
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userPass = prompt('Пожалуйста введите пароль!');

if (userPass === null) {
  message = 'Отменено пользователем!';
} else if (userPass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
