const db = require('../db/models');

exports.init = () => {
    try {
        db.sequelize.sync();
    } catch (err) {
        console.log(err);
        console.log('Cant connect to database');
    }
};
