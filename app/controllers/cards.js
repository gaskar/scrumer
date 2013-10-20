/**
 * Created by gaskar on 10/20/13.
 */
var mongoose = require('mongoose')
    , Card = mongoose.model('Card');

exports.create = function(data){
    var card = new Card(data);

    card.save(function(err){
        if(err){
            console.log(err);
            return;
        }

    })
};

exports.getCardsByDate = function(req, res){
};

exports.getCards = function(req, res){
    Card.find(function(err, cards){
        res.send(cards);
    });
};