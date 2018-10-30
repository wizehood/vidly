# Vidly
Simple NodeJS/Express API for managing movie rentals. This project is a showcase based on [NodeJS master class tutorial](https://www.udemy.com/nodejs-master-class) by Mosh Hamedani. 

## Features:
* route handling using `express`
* NoSQL database using `mongodb`
* request validation using `joi`
* database and file logging using `winston`
* authentication and authorization using `jwt` and `bcrypt`
* unit and integration tests using `jest` and `supertest`

## The prerequisites:
* install NodeJS environment at https://nodejs.org/en
* install MongoDB database at https://www.mongodb.com/mongodb-4.0
* install Compass (a MongoDB client interface) at https://www.mongodb.com/download-center/compass
* inside project folder run `npm install` (note: package `nodemon` is recommended to install, it tracks all file changes and makes automatic updates with no need to stop the app)
* in your command line interface (CLI) set environment variable 'NODE_ENV' to `development` or `test` (depending on whether you want to just run the API or use tests)
* in your CLI set environment variable 'jwtPrivateKey' to value at will, this represents private key needed to generate authentication tokens
* type `nodemon` or `npm test` to start the API (development or testing environment)

## Notes:
App is deployed and can be tested via Postman (or similar HTTP client interface) at https://guarded-anchorage-27714.herokuapp.com

For sure there are npm packages that get improved and published on daily basis. 
Therefore, I am open to all suggestions on how to optimize and make this app even better.  

Cheers!
Phil
