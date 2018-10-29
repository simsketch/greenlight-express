const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Restaurant X"
  },
  email: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/150x150"
  },
  capacity: {
    type: String,
    default: ""
  },
  price: {
    type: String,
    default: "$$"
  },
  cuisine: {
    type: String,
    default: "American"
  },
  balance: {
    type: Number,
    default: 0
  },
  lat: Number,
  long: Number,
  timestamp: String,
});

module.exports = mongoose.model('Vendor', VendorSchema);
