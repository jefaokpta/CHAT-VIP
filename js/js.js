var params = new URLSearchParams(window.location.href);
var room;
var moderator = false;

params.forEach(p => { // se o participante vem de fora do VIP a sala precisa constar na URL
    room = p;
});

if(localStorage.getItem('vipRoom')){ // se o participante vem do VIP
    room = localStorage.getItem('vipRoom');
    moderator = true;
}

if (!room) { // se só caiu no endereco
        alert('SALA NAO IDENTIFICADA, ADEUS');
        window.location = 'https://www.vipsolutions.com.br';
    }

window.onload = () => {
    domain = 'meet.jit.si';

    options = {
        roomName: room,
        //width: 700,
        height: 720,
        configOverwrite: {
            remoteVideoMenu: { disableKick: !moderator }, // NAO CHUTA OUTROS
            disableRemoteMute: !moderator // NAO MUTA OUTROS
        },
        interfaceConfigOverwrite: moderator? interfaceConfigModerator: interfaceConfigGuest,
        parentNode: document.querySelector('#meet'),
    };

    api = new JitsiMeetExternalAPI(domain, options);

    // api.executeCommands({
    //     displayName: 'JEFONES'
    // });
    //api.executeCommand('displayName', 'JEFFAO');

    api.on('readyToClose', () => {
        console.log('Nao se va!!!!!!!!!!!!');
        api.dispose();
        localStorage.removeItem('vipRoom');
        window.location = 'https://www.vipsolutions.com.br';
    });

    setTimeout(() => {
        console.log('SETANDO SENHA');
        api.executeCommand('password', 'jefao123');
    }, 60000);
};
