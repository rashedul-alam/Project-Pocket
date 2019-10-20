var express = require('express');
var db = require('./../models/db');

var router = express.Router();

router.get('/', function(request, response){

		var sql = "select * from user";
		db.getResults(sql, function(results){
			if(request.cookies['username'] != null){
				response.render('home/index', {users: results});		
			}else{
				response.redirect('/logout');
			}
		});		
});

module.exports = router;



