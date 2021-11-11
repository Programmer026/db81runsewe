var TelevisionShow = require('../models/televisionShow'); 
 
// List of all televisionShows 
exports.televisionShow_list = async function(req, res) { 
    try{ 
        theTelevisionShows = await TelevisionShow.find(); 
        res.send(theTelevisionShows); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.televisionShow_view_all_Page = async function(req, res) { 
    try{ 
        theTelevisionShows = await TelevisionShow.find(); 
        res.render('televisionShows', { title: 'TelevisionShows Search Results', results: theTelevisionShows }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific televisionShow. 
exports.televisionShow_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: televisionShow detail: ' + req.params.id); 
}; 
 
// Handle televisionShow create on POST. 
exports.televisionShow_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new TelevisionShow(); 
    document.ts_name = req.body.ts_name; 
    document.ts_runtime = req.body.ts_runtime; 
    document.ts_broadcastchannel = req.body.ts_broadcastchannel; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// Handle televisionShow delete form on DELETE. 
exports.televisionShow_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: televisionShow delete DELETE ' + req.params.id); 
}; 
 
// Handle televisionShow update form on PUT. 
exports.televisionShow_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: televisionShow update PUT' + req.params.id); 
}; 