var express = require('express'); 
var router = express.Router(); 

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
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

/* GET detail televisionShow page */ 
router.get('/detail', televisionShow_controller.televisionShow_view_one_Page); 

/* GET create televisionShow page */ 
router.get('/create', secured, televisionShow_controller.televisionShow_create_Page); 

/* GET create update page */ 
router.get('/update', secured, televisionShow_controller.televisionShow_update_Page); 

/* GET create televisionShow page */ 
router.get('/delete', secured, televisionShow_controller.televisionShow_delete_Page); 
 
 
module.exports = router; 
