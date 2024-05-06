// Create web server using express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Comments array
const comments = [
  { id: 1, author: 'John', text: 'This is a comment' },
  { id: 2, author: 'Jack', text: 'This is another comment' }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  res.json(comment);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,