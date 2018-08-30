var mongoose = require('mongoose');

var LatlongSchema = new mongoose.Schema({
	latValue: { type: Number, unique: true, required: true }
})
module.exports = mongoose.model('LatLong', LatlongSchema);