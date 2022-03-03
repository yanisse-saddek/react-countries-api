const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 8000;
var dataCountries= require('./dataCountries')

app.use(cors());


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.get(`/country/:country`, (req, res) => {
    var request = []
    var getCountry = req.param("country")
    var countryUp = getCountry.charAt(0).toUpperCase() + getCountry.slice(1);
    dataCountries.Countries.map(country=>{
        if(country.name == countryUp){
            request.push(country)
            console.log('okyy')
        }else{
            console.log(country.name)
        }
    })
    res.send(request);
});


app.listen(port, () => {
    console.log('Server app listening on port ' + port);
}); 