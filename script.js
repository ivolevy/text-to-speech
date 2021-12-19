window.addEventListener('load', function(){
    //let name = prompt('whats ur name');
    localStorage.setItem('user-name', name);
    let username = this.localStorage.getItem('user-name')
    let finalText = document.querySelector('.name').innerHTML = 'Hi '+ username + ', type what u want to be speech!';  
       
})

    let start = document.getElementById('start')
    let pause = document.getElementById('pause') 
    let resume = document.getElementById('resume')
    let stopped = document.getElementById('stop')
    let clear = document.getElementById('clear')

    start.addEventListener('click', function(){
        let voice = document.getElementById('voice').value;
        let txt = document.getElementById('text').value;

        if(voice == '')
        {   
            responsiveVoice.speak('select a voice first', 'UK English Male');
        } else if (txt == ''){
            responsiveVoice.speak('Enter text first', 'UK English Male');
        } else {
            responsiveVoice.speak(txt, voice);
        }
    

})

    pause.addEventListener('click', function(){
        responsiveVoice.pause();
})

    resume.addEventListener('click', function(){
        responsiveVoice.resume();
})

    stopped.addEventListener('click', function(){
        responsiveVoice.cancel();
})
    clear.addEventListener('click', function(){
        let txt = document.getElementById('text').value = '';
})