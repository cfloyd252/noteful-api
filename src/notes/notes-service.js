'use strict';

const NotesService = {
  getNotes(db) {
    return db
      .from('notes')
      .select('*');
  },

  insertNote(db, note) {
    return db
      .from('notes')
      .insert(note)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  deleteNote(db, noteId) {
    return db
      .from('notes')
      .where('id', noteId)
      .delete();
  }
};

module.exports = NotesService;