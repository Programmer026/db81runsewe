var express = require('express');
const televisionShow_controller = require('../controllers/televisionShow');
var router = express.Router();

/* GET home page. */
router.get('/', televisionShow_controller.televisionShow_view_all_Page);

module.exports = router;
