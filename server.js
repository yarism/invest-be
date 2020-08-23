const express = require('express');
const axios = require('axios');
const app = express();
const apicache = require('apicache');
const cors = require('cors');

const cache = apicache.middleware;

app.use(cors());

app.get('/', cache('5 minutes'), function (req, res) {
    return axios.get('https://avanza.se/_mobile/market/orderbooklist/5321,5369,5247,5245')
      .then((response) => {
        if(response.status === 200) {
          return res.send(response.data);
        }
    }, (error) => console.log(err) );

});

app.listen(process.env.PORT || 8080);