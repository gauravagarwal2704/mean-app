const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
//const API = 'https://jsonplaceholder.typicode.com';
// const API = '';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get('http://www.mocky.io/v2/593674641000002011f99c5e')
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
