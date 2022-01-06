const express = require('express');
require('dotenv').config();
const PeopleRoute = require('./routes/People');
const connection = require('./connection');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/people', PeopleRoute)








const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})