//initiate github class object
const github = new GitHub;
//initiate Ui class object
const ui = new Ui;

// grap input result
const searchUser = document.getElementById('user-name');

//adding event listner on it
searchUser.addEventListener('keyup',(e)=>{
    const inputText = e.target.value;
    
    if(inputText !== ''){

     github.getUsers(inputText)
     .then(data => {
         if(data.profile.message === 'Not Found'){
            ui.showAlert('Oops! No user found by this username.')

         }else{
        
           ui.showProfile(data.profile);
           ui.showRepos(data.repo);
         }
        }
        );

    } else{
        ui.clearProfile();
    }
})