# Vidly
Simple NodeJS/Express API for managing movie rentals. Project is built on NodeJS/Express framework.
This project is a showcase based on [NodeJS master class tutorial](https://www.udemy.com/nodejs-master-class) by Mosh Hamedani. 

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
* inside project folder run `npm install`
* in your command line interface set environment variable NODE_ENV to `development` or `test` (depending on whether you want to just run the API or use tests). note: I recommend installing `nodemon`, the package that tracks all file changes and makes automatic updates with no need to stop the app
* type `nodemon` or `npm test` to start the API (development or testing environment)

## Notes:
For sure there are npm packages that get improved and published on daily basis. 
Therefore, I am open to all suggestions on how to optimize and make this app even better.  

Cheers!
Phil
