const { check } = require('express-validator');
const { validationErrors } = require('./middlewares');
const transport = require('./mailer');
const router = require('express').Router();
const version = require('../package.json').version;

// маршрут для проверки работы сервиса
router.get('/health', async (req, res) => res.status(200).json({ msg: 'Сервис работает стабильно', version }));

// маршрут для информирования
router.post(
  '/inform-user',
  [check('name', 'Укажите имя заказчика услуг').not().isEmpty(), check('contacts', 'Укажите контакт для связи').not().isEmpty()],
  validationErrors,
  async (req, res) => {
    try {
      const { name, contacts, msg } = req.body;
      const message = {
        from: process.env.USER, // Адрес почты, с которой ведется отправка писем из файла .env
        to: process.env.ADMIN_EMAIL, //Адрес почты, на которую вы хотите получать письмо из файла .env
        subject: 'Сообщение от сервиса с портфолио',
        html: `<h3>С вами хотят связаться</h3><p>Ниже вы найдете информацию о запросе:</p><ul><li>Имя: ${name}</li><li>Контакт для связи: ${contacts}</li><li>Сообщение: ${msg}</li></ul>`,
      };
      //await transport.sendMail(message);
      return res.status(201).json({ msg: 'Ваше запрос был отправлен, в скором времени мы с вами свяжемся' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Ошибка сервера', error: error.message });
    }
  }
);

module.exports = router;
