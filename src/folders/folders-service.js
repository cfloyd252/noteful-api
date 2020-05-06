'use strict';

const FolderServices = {
  getFolders(db) {
    return db
      .from('folders')
      .select('*');
  },

  insertFolder(db, folder) {
    return db
      .from('folders')
      .insert(folder)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
};

module.exports = FolderServices;