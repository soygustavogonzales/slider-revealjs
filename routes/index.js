var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{admin:false});
});
router.get('/slides/:slide',function(req,res,next){
	res.render('sliders/'+req.params.slide,{admin:false,room:req.params.slide})
})
router.get('/slides/:slide/admin', function(req, res, next) {
	console.log(req.params.slide);
  res.render('sliders/'+req.params.slide,{admin:true,room:req.params.slide});
});
module.exports = router;
