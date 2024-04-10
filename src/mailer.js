const nodemailer = require('nodemailer');

const user = process.env.USER || null;
const password = process.env.PASSWORD || null;

const transport = nodemailer.createTransport({
  pool: true,
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: user,
    pass: password,
  },
});

module.exports = transport;
