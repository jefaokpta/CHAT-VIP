window.onload = () => {
    domain = 'meet.jit.si';
    options = {
        roomName: '100-VIP-CHAT',
        //width: 700,
        height: 800,
        interfaceConfigOverwrite: interfaceConfig,
        parentNode: document.querySelector('#meet'),
    };

    api = new JitsiMeetExternalAPI(domain, options);
};
