const mongoose = require('mongoose');

module.exports = function(req, res, next){
    if (!mongoose.Type.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID.');

    next();
}