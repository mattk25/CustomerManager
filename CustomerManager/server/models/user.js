/**
 * Created by matt on 11/3/13.
 */
var userSchema = Schema({
    _id     : Number,
    name    : String,
    email   : String,
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    regDate : {type: Date, default: Date.now},

    friendRequest: [{type: Schema.Types.ObjectId, ref: 'User'}],
    friends : [{type: Schema.Types.ObjectId, ref: 'User'}],
    tags    : [{type: Schema.Types.ObjectId, ref: 'Tag'}]

});

exports.userSchema = userSchema;
module.exports = mongoose.model('User' ,userSchema);