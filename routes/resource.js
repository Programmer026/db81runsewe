var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var televisionShow_controller = require('../controllers/televisionShow'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// televisionShow ROUTES /// 
 
// POST request for creating a televisionShow.  
router.post('/televisionShows', televisionShow_controller.televisionShow_create_post); 
 
// DELETE request to delete televisionShow. 
router.delete('/televisionShows/:id', televisionShow_controller.televisionShow_delete); 
 
// PUT request to update televisionShow. 
router.put('/televisionShows/:id', 
televisionShow_controller.televisionShow_update_put); 
 
// GET request for one televisionShow. 
router.get('/televisionShows/:id', televisionShow_controller.televisionShow_detail); 
 
// GET request for list of all televisionShow items. 
router.get('/televisionShows', televisionShow_controller.televisionShow_list); 
 
module.exports = router; 
