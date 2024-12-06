//для запуска в консоли node server.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON и URL-encoded данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Массив для хранения 
let users = [];
let autos = []; 
let washes = []; 
let orders = [];
let slots = [];

//////// ПОЛЬЗОВАТЕЛЬ

// Создать пользователя
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.status(201).json(user);
});
// Обновить пользователя по id
app.put('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User  not found.' });
    }

    const updatedUser  = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser ;

    res.status(200).json(updatedUser );
});

// Удалить пользователя по id
app.delete('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User  not found.' });
    }

    users.splice(userIndex, 1);
    res.status(204).send(); 
});
// Получить всех пользователей
app.get('/user', (req, res) => {
    res.status(200).json(users);
});

//////////АВТО

// Обработчик для получения списка всех автомобилей
app.get('/auto', (req, res) => {
    res.status(200).json(autos);
});

// Обработчик для добавления нового автомобиля
app.post('/auto', (req, res) => {
    const auto = req.body;
    auto.id = autos.length + 1; 
    autos.push(auto);
    res.status(201).json(auto);
});

// Обработчик для обновления автомобиля по id
app.put('/auto/:id', (req, res) => {
    const autoId = parseInt(req.params.id);
    const autoIndex = autos.findIndex(a => a.id === autoId);
    if (autoIndex !== -1) {
        autos[autoIndex] = { ...autos[autoIndex], ...req.body };
        res.status(200).json(autos[autoIndex]);
    } else {
        res.status(404).json({ message: "Автомобиль не найден" });
    }
});

// Обработчик для удаления автомобиля по ID
app.delete('/auto/:id', (req, res) => {
    const autoId = parseInt(req.params.id);
    const autoIndex = autos.findIndex(a => a.id === autoId);
    if (autoIndex !== -1) {
        autos.splice(autoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Автомобиль не найден" });
    }
});

//////АВТОМОЙКИ

// Обработчик для получения списка всех автомоек
app.get('/wash', (req, res) => {
    res.status(200).json(washes);
});

// Обработчик для добавления новой автомойки
app.post('/wash', (req, res) => {
    const wash = req.body;
    wash.id = washes.length + 1; 
    washes.push(wash);
    res.status(201).json(wash);
});

// Обработчик для обновления автомойки по ID
app.put('/wash/:id', (req, res) => {
    const washId = parseInt(req.params.id);
    const washIndex = washes.findIndex(w => w.id === washId);
    if (washIndex !== -1) {
        washes[washIndex] = { ...washes[washIndex], ...req.body };
        res.status(200).json(washes[washIndex]);
    } else {
        res.status(404).json({ message: "Автомойка не найдена" });
    }
});

// Обработчик для удаления автомойки по ID
app.delete('/wash/:id', (req, res) => {
    const washId = parseInt(req.params.id);
    const washIndex = washes.findIndex(w => w.id === washId);
    if (washIndex !== -1) {
        washes.splice(washIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Автомойка не найдена" });
    }
});

///////ЗАКАЗЫ

app.get('/order', (req, res) => {
    res.status(200).json(orders);
});

// Создать новый заказ
app.post('/order', (req, res) => {
    const newOrder = {
        id:  orders.length + 1,
        User_id: req.body.User_id,
        Wash_id: req.body.Wash_id,
        Auto_id: req.body.Auto_id,
        Service: req.body.Service,
        Amount: req.body.Amount,
        Is_Paid: req.body.Is_Paid,
        Date: req.body.Date,
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Получить заказ по ID
app.get('/order/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: "Заказ не найден" });
    }
});

// Обновить заказ по ID
app.put('/order/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        const updatedOrder = {
            id: orderId,
            User_id: req.body.User_id,
            Wash_id: req.body.Wash_id,
            Auto_id: req.body.Auto_id,
            Service: req.body.Service,
            Amount: req.body.Amount,
            Is_Paid: req.body.Is_Paid,
            Date: req.body.Date,
        };
        orders[orderIndex] = updatedOrder;
        res.status(200).json(updatedOrder);
    } else {
        res.status(404).json({ message: "Заказ не найден" });
    }
});

// Удалить заказ по ID
app.delete('/order/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        res.status(204).send(); 
    } else {
        res.status(404).json({ message: "Заказ не найден" });
    }
});
// Оплата заказа
app.post('/order/:id/pay', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.Is_Paid = true; 
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: "Заказ не найден" });
    }
});

//////расписание

app.get('/slots', (req, res) => {
    res.status(200).json(slots);
});

app.post('/slots', (req, res) => {
    const newSlot = req.body;
    newSlot.id=slots.length+1;
    slots.push(newSlot);
    res.status(201).json(newSlot);
});


app.put('/slots/:id', (req, res) => {
    const slot = slots.find(s => s.id === parseInt(req.params.id));
    if (!slot) return res.status(404).send('Слот не найден.');

    Object.assign(slot, req.body);
    res.status(200).json(slot);
});

app.delete('/slots/:id', (req, res) => {
    const slotIndex = slots.findIndex(s => s.id === parseInt(req.params.id));
    if (slotIndex === -1) return res.status(404).send('Слот не найден.');

    slots.splice(slotIndex, 1);
    res.status(204).send();
});

app.post('/slots/:id/reserve', (req, res) => {
    const slot = slots.find(s => s.id === parseInt(req.params.id));
    if (!slot) return res.status(404).send('Слот не найден.');

    if (!slot.Is_Free) {
        return res.status(400).send('Слот уже занят.');
    }

    slot.Is_Free = false; 
    res.status(200).json(slot);
});

// Загрузка Swagger документации
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Настройка Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
});