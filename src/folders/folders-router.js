'use strict';

const express = require('express');
const FoldersService = require('./folders-service');

const foldersRouter = express.Router();
const jsonBodyParser = express.json();

foldersRouter
  .route('/')
  .get((req, res) => {
    FoldersService.getFolders(
      req.app.get('db')
    )
      .then((notes) => {
        return res.json(notes);
      });
  })
  .post(jsonBodyParser, (req, res) => {
    const { name } = req.body;

    const newFolder = {
      name,
    };

    FoldersService.insertFolder(
      req.app.get('db'),
      newFolder
    )
      .then((newFolder) => {
        return res.status(201).json(newFolder);
      });
  });

module.exports = foldersRouter;