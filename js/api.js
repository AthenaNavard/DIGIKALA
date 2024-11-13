const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// ایجاد اپلیکیشن Express
const app = express();
const port = 3000;

// استفاده از middleware
app.use(cors());
app.use(bodyParser.json());

// اتصال به دیتابیس MongoDB
mongoose.connect('mongodb://localhost:27017/userAuthAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("MongoDB connection error:", err));

// تعریف مدل User
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}));

// مسیر برای ثبت‌نام
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Error registering user", error: err });
    }
});

// مسیر برای ورود
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ایجاد توکن
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        return res.status(500).json({ message: "Error logging in", error: err });
    }
});

// شروع سرور
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

async function handleLoginRegister(action) {
    const username = prompt("Enter username");
    const password = prompt("Enter password");

    if (action === 'register') {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        alert(data.message);
    } else if (action === 'login') {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        alert(data.message);
        if (data.token) {
            console.log("Token:", data.token); // ذخیره توکن برای استفاده‌های بعدی
        }
    }
}