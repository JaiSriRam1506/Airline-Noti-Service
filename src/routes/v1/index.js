const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

const ticketRoutes=require('./ticket-routes')

router.get('/info', InfoController.info);

router.use('/tickets', ticketRoutes);

module.exports = router;