var express= require('express');
var router= express.Router();

//GET hobbies page

router.get("/hobbies",function(req,res,next){
    res.render("hobbies");
});
module.exports=router;