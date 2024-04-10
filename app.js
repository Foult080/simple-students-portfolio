require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

// обработка маршрутов с действиями
app.use('/api', require('./src'));

// добавляем директорию с версткой
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

// константа с портом
const PORT = process.env.PORT || 5000;

// прослушиевание порта
app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
