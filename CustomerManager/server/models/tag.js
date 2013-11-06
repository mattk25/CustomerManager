/**
 * Created by matt on 11/3/13.
 */
var tagSchema = Schema({
    _id     : Number,
    name    : String,
    subject : String,
    desc    : String,
    slug    : String,

    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    references: [{type: Schema.Types.ObjectId ,ref: 'Reference'}]

});

exports.tagSchema = tagSchema;
module.exports = mongoose.model('Tag', tagSchema);