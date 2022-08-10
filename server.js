'use strict';

require( 'dotenv' ).config();

const express = require( 'express' );
const app = express();

const cors = require( 'cors' );
app.use( cors() );

const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://127.0.0.1:27017/books' );


const handleGetBooks = require( './handleGetBooks' );


const PORT = process.env.PORT || 3001;
app.listen( PORT, () => console.log( `listening on ${PORT}` ) );

app.get( '/test', ( _request, response ) => {
  response.send( 'test request received' );
} );

app.get( '/', ( _request, response ) => {
  response.send( 'Hello World!' );
} );


app.get( '/books', handleGetBooks );