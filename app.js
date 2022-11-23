const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRouter = require('./api/userRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App started running on port:${PORT}`);
});
