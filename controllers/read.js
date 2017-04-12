var Person = require("../models/person");

module.exports = function(req, res, next){
    Person.findOne({_id : req.params.id}, function(err, user){
        if (err) throw err;
        console.log("Here is your searching result");
        res.json({userinfos: user});
    });
};