const Flights = require("../models/Flight")

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.allFlight = (req,res) => {
    res.json(Flights.exampleModel)
}

