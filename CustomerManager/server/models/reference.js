/**
 * Created by matt on 11/3/13.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId

var referenceSchema = Schema({

    title   : String,
    url     : String,
    type    : String,
    source  : String,
    text    : String,
    vote    : Number,
    rating  : Number,

    subDate : {type: Date, default: Date.now},
    author  : [{type: Schema.Types.ObjectId, ref: 'User'}],
    user    : [{type: Schema.Types.ObjectId, ref: 'User'}],
    book    : [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

exports.referenceSchema = referenceSchema;
module.exports = mongoose.model('Reference', referenceSchema);