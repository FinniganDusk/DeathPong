

// ==================================================================


var interval;


// ==================================================================


Template.gamesMain.created = function () {
	// setup ticker to update the time
	interval = Meteor.setInterval(
		function() {
			Session.set("curTime", new moment().toDate());
			console.log('tick');
		}, 
		1000 
	);
};


Template.gamesMain.destroyed = function () {
	// ...
	console.log('gamesMain.destroyed');
};


Template.gamesMain.helpers({
	getCurrentTime: function () {
		return Session.get('curTime');
	}
});


Template.gamesMain.events({
	'click #startGameButton': function () {
		console.log('startGameButton');
	}
});


// ==================================================================


Template.gamesList.events({
	'click': function () {
		// ...
	}
});

Template.gamesList.helpers({
	activeGames: function () {
		return games.find({});
	}
});


// ==================================================================


Template.gamesListEntry.events({
	'click': function () {
		// ...
	}
});

Template.gamesListEntry.helpers({

	showCreated: function () {
		return moment(this.created).fromNow();
	},

	showRemaining: function () {
		var now = moment(Session.get('curTime'));
		var d = now.diff(this.created);
		console.log(d);

		if( d < 60 ) {
			console.log('under a min');
			return now.diff(this.created, 'seconds');
		}
		else if( d < 1800 ) {
			console.log('under half hour');
			return now.diff(this.created, 'minutes');
		}

		console.log('longer');
		return now.diff(this.created, 'seconds');
	}

});


// ==================================================================

 