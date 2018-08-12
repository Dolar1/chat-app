//intiating the request...
		var socket = io();

		socket.on('connect', function(){
			console.log('connected to server');

			// socket.emit('createEmail',{
			// 	to: 'jen@gmaail.com',
			// 	text: 'hey this is jen'
			// })

			socket.emit('createMessage', {
				from : 'dolar',
				text : 'yeah really'
			})
		});

		socket.on('disconnect', function(){
			console.log('disconnected by the user');
		});

		// socket.on('newEmail', function(email){
		// 	console.log('New Email', email);
		// });

		socket.on('newMessage', function(message){
			console.log('its a new meassage', message);
		});