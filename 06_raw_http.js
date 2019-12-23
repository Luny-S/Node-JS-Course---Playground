const https = require('https');

const url =  "https://api.mapbox.com/geocoding/v5/mapbox.places/Wroc%C5%82aw.json?access_token=pk.eyJ1Ijoib2xlazEzMCIsImEiOiJjazQxM3VnenowN3dyM21wb2tyd2NpY2NlIn0.qvlyEFThYjINM4nPf-QBNA&limit=1";

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

    request.on('error', (error) => {
        console.log('An error', error);
    });
});

request.end();

