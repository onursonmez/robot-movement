const express = require('express');
const Robot = require('../models/Robot');

const router = express.Router();

router.get('/position', async (req, res) => {
    const robot = await Robot.findOne().sort({ _id: -1 });
    res.json(robot || { x: 0, y: 0 });
});

router.post('/position', async (req, res) => {
    try {
        // Belirli bir _id ile güncelleme yap, yoksa yeni bir kayıt oluştur
        const robot = await Robot.findOneAndUpdate(
            { _id: req.body._id },  // Güncellemek için koşul
            req.body,               // Güncellenen veriler
            { new: true, upsert: true } // new: true, güncellenmiş belgeyi döndürür; upsert: true, belge yoksa yeni bir kayıt oluşturur
        );

        res.json(robot);
    } catch (error) {
        console.error('Error saving robot:', error);
        res.status(500).json({ error: 'An error occurred while saving the robot.' });
    }
});


module.exports = router;