const { validationResult } = require('express-validator');

// проверка ошибок в запросе пользователя
const validationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, msg: 'В запросе обнаружены ошибки валидации', errors: errors.array({ onlyFirstError: true }) });
  }
  next();
};

module.exports = { validationErrors };
