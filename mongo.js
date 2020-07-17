const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/iwpDB",{useNewUrlParser:true});


const bookingSchema = new mongoose.Schema({
  checkin:Date,
  checkout:Date,
  Adults:Number,
  NoRooms:Number
});

const Booking=mongoose.model("Booking",bookingSchema);
