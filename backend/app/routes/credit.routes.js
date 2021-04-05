module.exports = (app) => {
    const notes = require('../controllers/credit.controller.js');

    // Create a new Note
    app.post('/credit', notes.create);

    // Retrieve all Notes
    app.get('/credit', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/credit/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/credit/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/credit/:noteId', notes.delete);
}
