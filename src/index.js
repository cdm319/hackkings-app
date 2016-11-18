import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import request from 'request';

import config from './config';

const app = express();
app.use(bodyParser.json());

// Routes
app.get('/hello', (req, res, next) => {
    res.status(200).json({message: 'Hello, World!'});
});

app.get('/hello/:name', (req, res, next) => {
    const name = req.params.name;
    res.status(200).json({message: `Hello, ${name}!`});
});

app.get('/customers', (req, res, next) => {
    request(`http://api.reimaginebanking.com/customers?key=${config.nessieApiKey}`, (err, response, body) => {
        if (!err) {
            const bodyJson = JSON.parse(body);

            const users = bodyJson.map((obj) => {
                return {
                    name: `${obj.first_name} ${obj.last_name}`
                };
            });

            res.status(200).send(users);
        } else {
            next(err);
        }
    });
});

// Error Handlers
app.use((req, res, next) => {
    const err = new Error();
    err.message = 'Not Found';
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: {err}
    });
});

// Boot up HTTP server
app.server = http.createServer(app);
app.server.listen(3000);

export default app;
