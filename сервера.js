const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Папка с статичными файлами

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Пример простого API для получения категорий товаров
app.get('/api/categories', (req, res) => {
  const categories = ['Электроника', 'Спортинвентарь', 'Инструменты', 'Товары для детей', 'Товары для животных'];
  res.json(categories);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
