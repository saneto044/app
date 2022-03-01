const express = require('express');
const cors = require('cors');

const app = express()

//CONFIG JSON RESPONSE
    app.use(express.json());
//Salve CORS
    app.use(cors({credentials:true , origin: 'http://localhost:3000'}));
//Public folder for image
    app.use(express.static(__dirname + '/public'));
//Routes


app.listen(5000)