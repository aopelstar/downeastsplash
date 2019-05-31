const express = require('express')
require('dotenv').config();


const app = express();

app.use( express.static( `${__dirname}/../build` ) );

const port = 8675;
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})