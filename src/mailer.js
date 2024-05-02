const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  pool: true,
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: process.env.USER, // email пользователя из файла .env
    pass: process.env.PASSWORD, // сформированный пароль из файла .env
  },
});

module.exports = transport;
