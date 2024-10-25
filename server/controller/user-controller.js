const User = require('../models/user');

const signupUser = async (req, res) => {
    const { name, username, password } = req.body;
    
    try {
        const user = new User({ name, username, password });
        await user.save();
        res.status(201).json({ isSuccess: true, msg: 'User registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ isSuccess: false, msg: error.message });
    }
};

module.exports = { signupUser };
