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
let mobileChat = document.querySelector('section.user-profile-and-chat-pannel');
displayProfile.addEventListener('click', event => {
    chatPannel.classList.add('view');
    // chatPannel.classList.remove('chat-pannel');
    availableContact.classList.add('view');
    userProfile.classList.add('view');
});
cross.addEventListener('click', event=>{
    displayProfile.classList.remove('view');
    userProfile.classList.remove('view');
    availableContact.classList.remove('view');
    chatPannel.classList.remove('view');
});
let chats = document.querySelectorAll('.chat-profile-mobile');
// let textAreaElement = document.getElementsById('sender-message').autofocus;
chats.forEach(chat =>{
    chat.addEventListener('click',event =>{
        mobileChat.classList.toggle('display-mobile');
        // mainElement.classList.add('display-mobile');
    });
});

// textAreaElement.autofocus = true;