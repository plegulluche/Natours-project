const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1- middlewares
app.use(morgan('dev'));
app.use(express.json());
// for serving static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 🤟');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2 -ROUTE HANDLER FUNCTION ( callback function)

// 3- routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4- start the server

module.exports = app;
