var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name:{type:String}
});

var User = mongoose.model('User', userSchema);

exports.seedUsers = function() {
    User.find({}).exec(function(error, collection) {
        if(collection.length === 0) {
            // tu jakiś seed
            User.create({
                
            });
        }
    });
}