var express= require('express');
var router= express.Router();

//GET homepage

router .get('/',function(req,res)
{
    res.render("homepage");
});

// GET about and hobbies pages
router.get('/:page',function(req,res,next){
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