import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();
app.use(bodyParser.json());

// Routes
app.get('/hello', (req, res, next) => {
    res.status(200).json({message: 'Hello, World!'});
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
