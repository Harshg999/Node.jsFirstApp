var express= require('express');
var router= express.Router();

//GET homepage

router.get('/:page',function(req ,res,next){
    if(req.params.page==""){
        res.render("homepage");
    }
    else{
        next();
    }
    
},function(req,res,next){
    if(req.params.page=="about"){
        res.render("about");
    }
    else{
        next();
    }
},function(req,res){
    if(req.params.page=="hobbies"){
        res.render("hobbies");
    }
});
module.exports=router;