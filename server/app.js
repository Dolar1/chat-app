const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');

// console.log(__dirname + '/../public');
// console.log(publicPath);

app.use(express.static(publicPath));


const port = process.env.PORT || 9000 ;

app.listen(port, (req, res)=>{

	console.log(`server started on ${port}`);

});