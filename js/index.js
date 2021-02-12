

function criaSala(){
    input = document.querySelector('#meetingName');
    room = '100-'+ input.value.replace(/ /g, '-');
    localStorage.setItem('vipRoom', room);

    meetingPassword = document.querySelector('#meetingPassword');
    if (meetingPassword.value) {
        localStorage.setItem('passwordRoom', meetingPassword.value);
    }

    location.href = 'meeting.html?sala=' + room;
}