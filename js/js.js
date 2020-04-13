var params = new URLSearchParams(window.location.href);
var room;
params.forEach(p => {
    room = p;
});
console.log('SALA!!!!!  -  '+room)
if(localStorage.getItem('vipRoom')){
    room = localStorage.getItem('vipRoom');
}

if (!room) {
        alert('SALA NAO IDENTIFICADA, ADEUS');
        window.location = 'https://www.vipsolutions.com.br';
    }

window.onload = () => {
    domain = 'meet.jit.si';

    options = {
        roomName: room,
        //width: 700,
        height: 800,
        interfaceConfigOverwrite: interfaceConfig,
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

    // setTimeout(() => {
    //     console.log('SETANDO SENHA');
    //     api.executeCommand('password', 'jefao123');
    // }, 60000);
};
