// JavaScript (Vanilla) !!! Pas du NodeJS ou Electron

// IPC Inter Process Communication
const { ipcRenderer } = require('electron') 

// Attrape le Bouton HTML
const btnNotif = document.querySelector('[rel=js-notif]');

console.log(btnNotif);


// Ecoute le click sur le bouton
btnNotif?.addEventListener('click', event => {

    // alert('Click OK');
    ipcRenderer.send('show-notif', 'Titre de la notification', 'Message de la notification');

});
