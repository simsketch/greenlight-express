const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const db = 'mongodb://elon:poqll555@ds223542.mlab.com:23542/greenlight';
const db_dev = 'mongodb://elon:poqll555@ds139632.mlab.com:39632/greenlight_dev';
const cors = require('cors');
const port  = process.env.PORT || 8080;

mongoose.connect(db_dev);
mongoose.Promise = global.Promise;

// const routes = require('./routes')(app);
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes')(app);
// app.use(bodyParser.json());
app.use(cors());
// API routes
// const routes = require('./routes');
// app.use('/', routes);
// app.use('/', require('./routes'));
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
    // res.sendFile(path.resolve(__dirname, './index.html'));
  //  next();
});
// app.get('/', (req, res) => res.send('Hello from Express!'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
  });
  
module.exports = app;