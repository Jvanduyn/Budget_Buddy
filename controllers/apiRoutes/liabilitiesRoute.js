const router = require('express').Router();
const { Liabilities } = require('../models');

router.get('/auto_loan', async (req, res) => {
    const auto_loan = await auto_loan.findAll().catch((err) => {
        res.json(err);
    });
    res.json(auto_loan);
});

router.get('/mortgage_rent', async (req, res) => {
    const personal_loan = await personal_loan.findAll().catch((err) => {
        res.json(err);
    });
    res.json(personal_loan);
});

router.get('/credit_card', async (req, res) => {
    const credit_card = await credit_card.findAll().catch((err) => {
        res.json(err);
    });
    res.json(credit_card);
});

router.get('/student_loan', async (req, res) => {
    const student_loan = await student_loan.findAll().catch((err) => {
        res.json(err);
    });
    res.json(student_loan);
});

router.get('/utilities', async (req, res) => {
    const utilities = await utilities.findAll().catch((err) => {
        res.json(err);
    });
    res.json(utilities);
});

router.post('/', async (req, res) => {
    try {
        const newLiability = await Liabilities.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLiability);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const liabilityData = await Liabilities.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!liabilityData) {
            res.status(404).json({ message: 'Required input field' });
            return;
        }
        res.status(200).json(liabilityData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;