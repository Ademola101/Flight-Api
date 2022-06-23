const Flights = require("../models/Flight")
const getRandom = () => {
    return Math.floor(Math.random() * (100 - 1) + 1 )
  }
  
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.allFlight = (req,res) => {
    res.json(Flights.exampleModel)
}

exports.addFlight = (req, res) => {
    const body = req.body
    const newFlight = {
        id : getRandom(),
        title: body.title,
        time : body.time,
        price: body.price,
        date: new Date 

    }
    Flights.exampleModel = Flights.exampleModel.concat(newFlight);
    res.json(Flights.exampleModel)
};

exports.getOneFlight = (req, res) => {
    const id = Number(req.params.id);
    const flight =  Flights.exampleModel.filter(flight => flight.id === id );
    if (flight) {
        res.json(flight)
    }
    else {
        res.json.status(404).end()
    }
}
