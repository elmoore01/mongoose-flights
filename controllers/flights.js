const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights);
        res.render('flights/index', { flights, title: 'All Flights' });
    }).sort( {departs: 'ascending'} );
}
function create(req, res) {
    console.log(req.body);
    if (!req.body.departs) delete req.body.departs;
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new')
        res.redirect('/flights');
    });
}
function newFlight(req, res) {
    
    res.render('flights/new', { title: 'Add Flight' });
}