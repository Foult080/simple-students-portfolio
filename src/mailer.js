const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  pool: true,
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: 'user@mail.ru', //email пользователя
    pass: 'password', //'сформированный пароль'
  },
});

module.exports = transport;
