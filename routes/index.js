exports.index = function(req, res)  {
	res.render('default', {
	title: 'Home'
	});
}

exports.about = function(req, res)  {
	res.render('default', {
		title: 'About Us'
	});
}