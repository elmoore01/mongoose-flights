const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    delete: deleteFlight,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights, title: 'All Flights' });
    });
}
function create(req, res) {
    if (!req.body.departs) delete req.body.departs;
    const flight = new Flight(req.body);
    console.log(req.body);
    flight.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/flights/new')
        res.redirect('/flights');
    });
}
function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/flights');
    })
}

function show(req, res) {
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {flight, title: 'Flight Details'});
    })
}