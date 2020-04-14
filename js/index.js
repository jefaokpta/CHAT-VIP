

function criaSala(){
    input = document.querySelector('#meetingName');
    room = '100-'+ input.value.replace(/ /g, '-');
    localStorage.setItem('vipRoom', room);
    location.href = 'meeting.html?sala=' + room;
}