/**
 * Created by gaskar on 10/20/13.
 */
module.exports = function (app) {

    // user routes
    var cards = require('../app/controllers/cards');

    app.all('/cards/getCards', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    app.post('/cards/create', cards.create);
    app.get('/cards/getCardsByDate', cards.getCardsByDate);
    app.all('/cards/getCards', cards.getCards);
}