const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  pool: true,
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: 'email пользователя',
    pass: 'сформированный пароль',
  },
});

module.exports = transport;
