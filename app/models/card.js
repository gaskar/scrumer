/**
 * Created by gaskar on 10/20/13.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var CardSchema = new Schema({
    created: { type: Date, default: Date.now },
    creator: String,
    description: String,
    toDo: [],
    done: [],
    toBeCompleted: []
});

mongoose.model('Card', CardSchema);