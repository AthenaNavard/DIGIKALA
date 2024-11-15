const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// اتصال به دیتابیس
mongoose.connect('mongodb://localhost:27017/userAuthAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    const User = mongoose.model('User', new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }));

    // ایجاد کاربران نمونه
    const salt = await bcrypt.genSalt(10);
    const hashedPassword1 = await bcrypt.hash('123456', salt);
    const hashedPassword2 = await bcrypt.hash('456789', salt);

    const user1 = new User({ username: 'sara', password: hashedPassword1 });
    const user2 = new User({ username: 'zahra', password: hashedPassword2 });

    await user1.save();
    await user2.save();

    console.log('Users added successfully!');
    process.exit();
})
.catch(err => {
    console.log("Error:", err);
});
