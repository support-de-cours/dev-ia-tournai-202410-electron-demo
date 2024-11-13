const express = require('express');
const ejs = require('ejs');
const path = require('path');
const PORT = require('./utils/port');
const app = express();

// Express Settings
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);

// Public assets
app.use(express.static(path.join(__dirname, 'public'))); // site.com/test.txt

// Router
app.get('/', (request, response) => {
    response.render('demo'); // Rend le fichier /templates/demo.html
});

// Server Start
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));
exports.port = PORT;