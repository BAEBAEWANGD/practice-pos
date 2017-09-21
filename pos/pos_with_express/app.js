const express = require('express');
const app = express();
const fs = require('fs');

app.post('/print_demo', (req,res) => {
	console.log('hope');
	let data = '';
	res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});
	res.on('data',(data) => {
		data += data;
		console.log(data + 'hhhhhh');
	})
	res.write(data);
	res.end('end');
	// if(req.Accept == 'text/plain'){
	// 	res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});
	// 	res.end('chenggong');
	// }else if(req.Accept == 'application/xml'){
	// 	//xml
	// }else if(req.Accept == 'application/json'){
	// 	//json
	// }
});
app.get('/',(req,res) =>{
	console.log('cdhs');
})
app.listen(2017,(err) =>{
	if(err){
		console.log(err.message);
	}else{
		console.log('server start');
	}
})