const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Create Flights'});
}
function create(req, res) {
    const flight = new Flight(req.body);
    flight.user = req.user._id;
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flights);
        res.redirect(`/flights/${flight._id}`);
    });
}