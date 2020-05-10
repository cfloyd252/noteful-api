'use strict';

const express = require('express');
const NotesService = require('./notes-service');

const notesRouter = express.Router();
const jsonBodyParser = express.json();

notesRouter
  .route('/')
  .get((req, res) => {
    NotesService.getNotes(
      req.app.get('db')
    )
      .then((notes) => {
        return res.json(notes);
      });
  })
  .post(jsonBodyParser, (req, res) => {
    const { folder_id, name, content } = req.body;

    const newNote = {
      folder_id,
      name,
      content,
    };

    NotesService.insertNote(
      req.app.get('db'),
      newNote
    )
      .then((newNote) => {
        return res.status(201).json(newNote);
      });
  });

notesRouter
  .route('/:note_id')
  .delete((req, res) => {
    const { note_id } = req.params;

    NotesService.deleteNote(
      req.app.get('db'),
      note_id
    )
      .then(() => {
        res.json('hello');
      });
  });
module.exports = notesRouter;