const mongoose = require('mongoose');
//orderid
//vendorid
//userid
//timestamp
//vendor code
//# of guests
//user location (used to calculate ETA)
const OrderSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    default: "1"
  },
  userId: {
    type: String,
    default: "beta-user"
  },
  numberOfGuests: {
    type: String,
    default: 0
  },
  promoCode: {
    type: String,
    default: 0
  },
  userLat: {
    type: String,
    default: 0
  },
  userLong: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: String,
    default: 0
  }
});

module.exports = mongoose.model('Order', OrderSchema);
