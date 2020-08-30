const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create        
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({flight: flight._id}, function (err, tickets) {
            res.render('tickets/new', {
                title: 'Add Ticket',
                tickets,
                flight
            })
        })
    })
}

function create (req, res) {
    req.body.flight=req.params.id;
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.create(req.body, function(err) {
            if (err) console.log('Failed to Create');
            res.redirect(`/flights/${flight._id}`);
        });
    })
    
}