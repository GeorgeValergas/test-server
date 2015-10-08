var express = require('express');
var router = express.Router();

/* GET home page. */

var dbLOL = {
	"dude@man.com" : {
		loggedIn: false
	},
	"chick@lady.com" : {
		loggedIn: false
	}
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request Viewer',body:"" });
});

router.post('/login',function(req,res,next) {
	console.log("hit login");
	console.log(req.body);
	// res.json( {title: 'Login Request',body:req.body});
	console.log(req.body.username)
	if (dbLOL[req.body.username]) {
		dbLOL[req.body.username].loggedIn = true;
		res.json({"status":"loggedIn"});
	} else {
		res.json({"status":"Invalid username"});
	}
});

router.post('/logout',function(req,res,next) {
	// console.log(req.body);
	// res.json( {title: 'Login Request',body:req.body});
	if (dbLOL[req.body.username]) {
		dbLOL[req.body.username].loggedIn = false;
		res.json({"status":"loggedOut"});
	}
	res.json({"status":"Invalid username"});
});

module.exports = router;
