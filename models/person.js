var mongoose = require('mongoose');
mongoose.connect('mongodb://alwaywrong:jackjack@ds155160.mlab.com:55160/node-test');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  lastname  : String,
  age       : Number,
  occupation: String
});
module.exports = mongoose.model('Person', personSchema);
