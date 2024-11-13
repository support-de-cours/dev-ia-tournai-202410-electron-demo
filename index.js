// Import des librairies Electron
const { 
    app, 
    BrowserWindow,
    ipcMain,
    Notification,
    Menu
} = require('electron');

// Import du Server.js
const server = require('./server');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,         // Activer l'intégration Node.js
            contextIsolation: false,        // Désactiver l'isolation du contexte
        }
    })
  
    // win.loadFile('index.html') // Ouvre le fichier index.html à la racine de l'application

    // Exemple de WebView
    // win.loadURL(`https://google.com`)

    win.loadURL(`http://localhost:${server.port}`),

    // Création du Menu principal
    createMenu();
}

const createMenu = () => {
    const template = [
        {
            label: "Menu 1",
            submenu: [
                {
                    label: "Bye Bye",
                    role: 'quit'
                }
            ]
        },
        {
            label: "Menu 2",
            submenu: []
        },
        {
            label: "Affichage",
            submenu: [
                {
                    label: "Dev Tools",
                    role: 'toggleDevTools'
                },
                {
                    label: "FullScreen",
                    role: 'toggleFullscreen'
                }
            ]
        },
        {
            label: 'Édition',
            submenu: [
                { role: 'undo', label: 'Annuler' },
                { role: 'redo', label: 'Rétablir' },
                { type: 'separator' },
                { role: 'cut', label: 'Couper' },
                { role: 'copy', label: 'Copier' },
                { role: 'paste', label: 'Coller' }
            ]
        },
    
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow()
})

ipcMain.on('show-notif', (event, title, body) => {
    new Notification({title, body}).show();
})