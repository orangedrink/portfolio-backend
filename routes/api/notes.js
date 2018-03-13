var keystone = require('keystone');

exports = module.exports = async function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-XSRF-TOKEN");
	var notes = keystone.list('Note');
	var notesData = await notes.model.find({...req.query, state: 'published'});
	res.apiResponse(notesData);
}