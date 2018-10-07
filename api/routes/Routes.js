'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/Controller');

  app.route('/')
    .get(todoList.add_ip_to_list)

  app.route('/prev')
    .get(todoList.return_prev_ip_address);

  app.route('/total')
    .get(todoList.return_total_prevs)

  app.route('/stats')
    .get(todoList.return_statistics)
};