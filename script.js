fetch("https://code.responsivevoice.org/responsivevoice.js?key=YOUR_UNIQUE_KEY"
)

window.addEventListener('load', function(){
   // let name = prompt('whats ur name');
    localStorage.setItem('user-name', name);
    let username = this.localStorage.getItem('user-name')
    document.querySelector('.name').innerHTML = 'Hi '+ username + ', type what u want to be speeched!';  
    
   
})

