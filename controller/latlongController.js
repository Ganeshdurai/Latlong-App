var Latlong = require('../model/latlong');

exports.postLatlong = function(req, res) {
  console.log("req.body",req.body);
  // console.log("req.body-->",req.body);
  // var latlong = new Latlong({
  //   latLong: req.body.latValue
  // });
  // latlong.save(function(err) {
  //   if (err)
  //   res.send(err);

    // res.json({ "Located at" : req.body.latValue });
     res.json({ "Located at Latitude" : req.body.latValue, "Located at longitude": req.body.longValue, "DeviceId":req.body.deviceid});
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