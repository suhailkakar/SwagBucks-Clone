module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/offers', notes.create);

    // Retrieve all Notes
    app.get('/offers', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/offers/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/offers/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/offers/:noteId', notes.delete);
}
