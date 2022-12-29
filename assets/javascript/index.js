const messageFlag = document.querySelectorAll('.message-flag');
messageFlag.forEach(flag =>{
    if(flag.innerText!=1){
        flag.style.display = 'none';
    }
});

const cross = document.querySelector('.cross');
let chatPannel = document.querySelector('.chat-pannel');
let displayProfile = document.querySelector('div#display-profile');
let userProfile = document.querySelector('section.user-profile');
let availableContact = document.querySelector('.available-chat');
displayProfile.addEventListener('click', event => {
    chatPannel.classList.add('view');
    availableContact.classList.add('view');
    userProfile.classList.add('view');
});
cross.addEventListener('click', event=>{
    displayProfile.classList.remove('view');
    userProfile.classList.remove('view');
    availableContact.classList.remove('view');
    chatPannel.classList.remove('view');
});