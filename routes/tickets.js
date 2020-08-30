var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// router.get('/', flightsCtrl.index);
// router.get('/new', flightsCtrl.new);
// router.get('/:id', flightsCtrl.show);
// router.post('/', flightsCtrl.create);
// router.delete('/:id', flightsCtrl.delete);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;
