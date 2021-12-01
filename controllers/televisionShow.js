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
exports.televisionShow_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await TelevisionShow.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.televisionShow_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await TelevisionShow.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle televisionShow update form on PUT. 
exports.televisionShow_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await TelevisionShow.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.ts_name)  
               toUpdate.ts_name = req.body.ts_name; 
        if(req.body.ts_runtime) toUpdate.ts_runtime = req.body.ts_runtime; 
        if(req.body.ts_broadcastchannel) toUpdate.ts_broadcastchannel = req.body.ts_broadcastchannel; 
        console.log(toUpdate)
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


 // Handle a show one view with id specified by query 
 exports.televisionShow_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await TelevisionShow.findById( req.query.id) 
        res.render('televisionShowsdetail',  
{ title: 'Television Shows Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a televisionShow. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.televisionShow_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('televisionShowcreate', { title: 'Television Show Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a televisionShow. 
// query provides the id 
exports.televisionShow_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await TelevisionShow.findById(req.query.id) 
        res.render('televisionShowupdate', { title: 'TelevisionShow Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.televisionShow_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await TelevisionShow.findById(req.query.id) 
        res.render('televisionShowdelete', { title: 'televisionShow Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 