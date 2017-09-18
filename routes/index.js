var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/api/get-weather-for-week', function(req, res, next) {
    var zipCode = req.query.zipcode;
    var country=req.query.country;
    var start= req.query.startDate;
    var end = req.query.endDate;
    var output;
    var url = 'https://api.weathersource.com/v1/4065bd05a424f6e4e12e/postal_codes/'+zipCode+','+country+'/history.json?period=day&timestamp_between='+end+'T08:00-07:00,'+start+'T23:00-07:00&fields=all';
    request(url, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        output=body;
        res.json({success:true,data:output});
    });
});
module.exports = router;
