

function criaSala(){
    let input = document.querySelector('#meetingName');
    const room = '100-'+ input.value.replace(/ /g, '-');
    localStorage.setItem('vipRoom', room);

    const meetingPassword = document.querySelector('#meetingPassword');
    if (meetingPassword.value) {
        localStorage.setItem('passwordRoom', meetingPassword.value);
    }

    location.href = 'meeting.html?sala=' + room;
}
