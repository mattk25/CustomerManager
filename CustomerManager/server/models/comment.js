/**
 * Created by matt on 11/3/13.
 */
var commentSchema = Schema({
    _id      : Number,
    text    : String,
    vote    : Number,
    rating  : Number,

    replies : [{type: Schema.Types.objectId, ref: 'Comment'}],
    postDate : {type: Date, default: Date.now},
    author  : [{type: Schema.Types.ObjectId, ref: 'User'}],
    references: [{type: Schema.Types.ObjectId ,ref: 'Reference'}]

});

exports.commentSchema = commentSchema;
module.exports = mongoose.model('Comment', commentSchema);