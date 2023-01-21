const express = require('express');
const tagsRouter = express.Router();

const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  const { tag } = req.params;

  try {
    const taggedPosts = await getPostsByTagName(tag);

    res.send ({ taggedPosts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;