const params = new URLSearchParams(window.location.href);
let room;
let moderator = false;

params.forEach(p => { // se o participante vem de fora do VIP a sala precisa constar na URL
    room = p;
});

if(localStorage.getItem('vipRoom')){ // se o participante vem do VIP
    room = localStorage.getItem('vipRoom');
    localStorage.removeItem('vipRoom');
    moderator = true;
}

if (!room) { // se só caiu no endereco
        alert('SALA NAO IDENTIFICADA, ADEUS');
        window.location = 'https://www.vipsolutions.com.br';
    }

window.onload = () => {
    const domain = 'meet-test.vipsolutions.com.br';

    const options = {
        roomName: room,
        height: 720,
        configOverwrite: moderator ? configsModerator : configsGuest,
        interfaceConfigOverwrite: {
            JITSI_WATERMARK_LINK: 'https://www.jpbx.com.br',
        },
        parentNode: document.querySelector('#meet'),
    };

    const api = new JitsiMeetExternalAPI(domain, options);

    api.on('readyToClose', () => {
        console.log('Nao se va!!!!!!!!!!!!');
        api.dispose();
        window.location = 'https://www.vipsolutions.com.br';
    });
    
    if (localStorage.getItem('passwordRoom')) {
        setTimeout(() => {
            console.log('SETANDO SENHA');
            api.executeCommand('password', localStorage.getItem('passwordRoom'));
            localStorage.removeItem('passwordRoom');
        }, 30000);
    }
};
