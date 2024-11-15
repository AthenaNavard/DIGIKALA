const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');  // وارد کردن مدل User

const router = express.Router();

// مسیر برای ثبت‌نام
router.post('/register', async (req, res) => {
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
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "شما کاربر سایت نیستید" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        // اگر کاربر sara باشد و رمز درست باشد
        if (username === 'sara' && isMatch) {
            return res.status(200).json({ message: "تبریک شما وارد شدید" });
        } else {
            return res.status(400).json({ message: "شما کاربر سایت نیستید" });
        }
    } catch (err) {
        return res.status(500).json({ message: "خطا در ورود", error: err });
    }
});

module.exports = router;  // ارسال مسیرها برای استفاده در server.js
