Router.configure({
	// LayoutTemplate
	layoutTemplate: 'walletLayout'
});

Router.route('/', function(){
	//set redirect assosiated with '/'
	this.redirect('/dashboard');
});

// Set mapping between URL and Route template.
Router.route('/dashboard', {name: 'dashboard'});
//Router.route('/send', {name: 'send'});
Router.route('/search', {name: 'search'})

Router.route('/crowdfunding', {name: 'crowdfunding'})
