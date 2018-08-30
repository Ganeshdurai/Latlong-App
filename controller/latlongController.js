var Latlong = require('../model/latlong');

exports.postLatlong = function(req, res) {
  // console.log("req.body-->",req.body);
  // var latlong = new Latlong({
  //   latLong: req.body.latValue
  // });
  // latlong.save(function(err) {
  //   if (err)
  //   res.send(err);

    res.json({ "Located at" : req.body.latValue });
  // });
};
exports.getLatlong = function(req,res){
	Latlong.find(function(err,latlong){
		if(err){
			res.send(err);
		}
		res.json(latlong);
	});
};