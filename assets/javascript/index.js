const messageFlag = document.querySelectorAll('.message-flag');
messageFlag.forEach(flag =>{
    if(flag.innerText!=1){
        flag.style.display = 'none';
    }
});