const auth = require('../middleware/auth');
const validator = require('../middleware/validator');
const { Movie, validate } = require('../models/movie');
const { Genre } = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('title');
    res.send(movies);
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found');

    res.send(movie);
});

router.post('/', [auth, validator(validate)], async (req, res) => {
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    const movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    await movie.save();

    res.send(movie);
});

router.put('/:id', [auth, validator(validate)], async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.name,
        genre: {
            _id: req.body.genre.id,
            name: req.body.genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    },
        {
            new: true
        });

    if (!movie) return res.status(404).send('The movie with the given ID was not found');

    res.send(movie);
});

router.delete('/:id', auth, async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found');

    res.send(movie);
});

module.exports = router;