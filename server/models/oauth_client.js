/**
 * Created by matt on 11/6/13.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env],
    utils = require('utils'),
    Schema = mongoose.Schema;

var OAuthClientSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },

    name: String,
    clientKey: String,
    clientSecret: String
});

/**
* Statics
 */
OAuthClientSchema.statics = {
    load: function(id,cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

/**
 *Pre-Save hook
 */
OAuthClientSchema.pre('save',function(next) {
    if(!this.isNew) return next();
    this.clientKey = utils.uid(16);
    this.clientSecret = utils.uid(32);
    next();
});

mongoose.model('OAuthClient', OAuthClientSchema);