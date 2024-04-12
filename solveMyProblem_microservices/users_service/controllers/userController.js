const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');
const jwtSecretKey = require('../utils/jwtKey'); // Import the JWT secret key


exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Received username:', username);
        console.log('Received password:', password);

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Received username:', username);
        console.log('Received password:', password);

        const user = await User.findOne({ where: { username } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: '1h' }); // Use the JWT secret key
        res.json({ token });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
