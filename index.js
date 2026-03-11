import express from 'express';

const app = express();
const ARRAY = [1, 2, 3, 4, 5];

// СОЗДАНИЕ МАРШРУТА (КОРЕНЬ)
app.get('/', (req, res) => {
    console.log('going to /');
    res.send(`
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Котов Павел ИСиП-2-23</title>
</head>
<body>
    <h1>Сервер работает</h1>
    <p>Данный сервер возвращает разные данные по разным роутам.</p>
    <a href="/get-data">Посмотреть массив данных</a>
</body>
</html>
    `);
});

// СОЗДАНИЕ МАРШРУТА (/get-data)
app.get('/get-data', (req, res) => {
    res.json({
        code: 200,
        data: {
            message: "send array",
            array: ARRAY
        }
    });
});

const PORT = 1234;

// ПРОСЛУШКА ПОРТА
app.listen(PORT, () => {
    console.log('server listen in', PORT);
});
