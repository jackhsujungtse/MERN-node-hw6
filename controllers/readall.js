var Person = require ("../models/person");

module.exports = function(req,res,next){
    Person.find({}, function(err, users){
        if(err) throw err;
        console.log("Here are all users!");
        res.json({userinfos: users});
    });
};