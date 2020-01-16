const axios = require('axios');
const express = require('express');
const app = express();
const port = 80;

app.get('/search', function(req, res) {
    let query = req.query.queryStr;
    let url = `https://1i6h45wdb5.execute-api.ap-northeast-2.amazonaws.com/test/kilhan`;

    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});

var server = app.listen(port);
