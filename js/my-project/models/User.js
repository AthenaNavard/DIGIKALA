const mongoose = require('mongoose');

// تعریف مدل User
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}));

module.exports = User;  // ارسال مدل برای استفاده در سایر فایل‌ها
