var login = new Vue({
    el: '#login',
    data: {
       
      
    },
    methods: {
        login() {
            alert('Welcome to ' + this.username);
         document.writeln('Hi'+ ''+ this.username + '!');
            
        },
        cancel()
        {
            window.location.reload();
            
        }
     
    }
  })