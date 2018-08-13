const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/../public');
// console.log(publicPath);


const app = express();
//we r creating a server via ccore functionaality of node and then we r passing app as a function parmeter
//then at APP.LISTEN method we call it server.listen coz we have given app aas an argument to server earlier only
const server = http.createServer(app);

var io = socketIO(server);


app.use(express.static(publicPath));


//this is what i not yet pushed to github
io.on('connection', (socket)=>{
	console.log('new user created');



	socket.emit('newMessage' ,{
			from : 'admin',
			text : 'welcome to the chat room',
			createdAt : new Date().getTime()
		});


		socket.broadcast.emit('newMessage', {
			from : 'admin',
			text : 'new user joined',
			createdAt : new Date().getTime()
		})



	// socket.emit('newMessage' ,{
	// 	from: 'dolar',
	// 	text: 'see u tmrw',
	// 	createdAt: 123123, 
	// });

	// socket.emit('newEmail', {
	// 	//in this object format we could give it anything as we need to emit the data to the client side
	// 	from: 'dolarsingh111@gmial.com',
	// 	text: 'hey itz dolar here',
	// 	on: 'today'
	// });



	socket.on('createEmail', (newEmail)=>{
		console.log('createEmail', newEmail);
	});

	socket.on('createMessage', (message)=>{
		console.log('the message from the client tp the server' , message);

		io.emit('newMessage',{
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});

		
		

		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// });
	});

	socket.on('disconnect', ()=>{
		console.log('disconnected from the server');
	});
});


const port = process.env.PORT || 9000 ;

server.listen(port, (req, res)=>{
	console.log(`server started on ${port}`);
});