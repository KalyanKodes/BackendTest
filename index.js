// server.js

const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// API to greet the user
app.get('/greet', (req, res) => {
    res.send('Hello!');
});

// API to return shopping cart details
app.get('/test', (req, res) => {
    const shoppingCart = {
        items: [
            { id: 1, name: 'Apple', quantity: 2, price: 1.5 },
            { id: 2, name: 'Banana', quantity: 5, price: 0.5 },
            { id: 3, name: 'Orange', quantity: 3, price: 1.0 }
        ],
        total: 10.0 // Total price of the cart
    };
    res.json(shoppingCart);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
