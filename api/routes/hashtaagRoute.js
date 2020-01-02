'use strict';
module.exports = function(app) {
  var hashtaag = require('../controllers/hashtaagController');

  // todoList Routes
  app.route('/state/:stateName')
    .get(hashtaag.list_stateDetails);

    app.route('/town/:townName')
    .get(hashtaag.list_townDetails);


  app.route('/district/:districtName')
    .get(hashtaag.list_districtDetails);
};