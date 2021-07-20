class Ui {
    constructor() {
        this.show = document.getElementById('profile');
    }

    // Display Profile

    showProfile(user) {
        this.show.innerHTML = `<div class="row">
        <div class="col-md-4 card border-primary mb-3 mb-lg-0">
            <div class="mb-3"><img class="img-fluid" src="${user.avatar_url}"></div>
            <div class="mb-3 fs-4"><span class="badge bg-dark">${user.name === null ? 'Name not specified on GitHub' : user.name}</span></div>
            <div class="mb-3"><a href="${user.html_url}" class="btn btn-sm btn-info fs-3" target="_blank">View
                    on Github</a></div>
        </div>
        <div class="col-md-8">
                <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 d-flex justify-content-evenly fs-3">
                <span class="badge bg-success mb-2 mb-lg-0">Followers : ${user.followers} </span>
                <span class="badge bg-danger mb-2 mb-lg-0">Following : ${user.following}</span>
                <span class="badge bg-warning mb-2 mb-lg-0">Public Repos : ${user.public_repos}</span>
                <span class="badge bg-secondary mb-2 mb-lg-0">Public Gists : ${user.public_gists}</span>
            </nav>
         

            <ul class="list-group fs-4">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">Bio :</span>
                    <small>${user.bio === null ? 'He haven\'nt set any bio yet' : user.bio}</small>

                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">Company :</span>
                    ${user.company === null ? 'Your Crush don\'t wanna reveal this field' : user.company}

                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">Site/Blog :</span>
                    <a href="${user.blog === null ? '' : user.blog}" target="_blank">${user.blog === null ? 'Your Crush don\'t wanna reveal this field' : user.blog}</a>
                    

                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">Email :</span>
                    ${user.email === null ? 'Your Crush don\'t wanna reveal this field' : user.email}

                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge bg-primary rounded-pill">Twitter Username :</span>
                    <a href="https://twitter.com/${user.twitter_username === null ? '' : user.twitter_username}" target="_blank">${user.twitter_username === null? 'Your Crush don\'t wanna reveal this field' : user.twitter_username}</a>

                </li>

            </ul>

        </div>
    </div> 
    <div class="card-footer" id="repos">
    <h2 class="text-center">Some Latest Ripositories</h2>
    </div>
    `;

    }

    //display Repos

    showRepos(user) {
        const repos = document.getElementById('repos');

        const list = document.createElement('ul');
        list.className = 'list-group repo-list';

     
        let output = '';
        user.forEach(data => {
            
            output += `<li class="list-group-item d-flex justify-content-between align-items-center fs-4">
            <a href="${data.html_url}" target="_blank">${data.name}</a>
            <div>
                <span class="badge bg-success mb-2 mb-lg-0">Stars : ${data.stargazers_count}</span>
                <span class="badge bg-danger mb-2 mb-lg-0">Forks : ${data.forks_count}</span>
                <span class="badge bg-warning mb-2 mb-lg-0">Watchers : ${data.watchers_count}</span>
                <span class="badge bg-info mb-2 mb-lg-0">Language : ${data.language === null ? 'It isn\'t recognizable' : data.language}</span>
            </div>
            </li>
            `
        });
      list.innerHTML = output;
      repos.appendChild(list);

      
    }

    // show alert

    showAlert(message){

        // clear results

        this.clearProfile();

        // clear previous alert
        this.clearAlert();

        //making alert and appending it

        const div = document.createElement('div');
        div.className = 'alert alert-dismissible alert-danger';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-close';
        button.setAttribute('data-bs-dismiss','alert');
        const strong = document.createElement('strong');
        strong.innerHTML = message;
        div.appendChild(button);
        div.appendChild(strong);
        const parent = document.querySelector('.search-container');
        const next = document.querySelector('.serach-card');
        parent.insertBefore(div,next);

        // clear alert 2.5s
       
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }


    // clear alert

    clearAlert(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
       
    }

    // clear profiles

    clearProfile() {
        this.show.innerHTML = '';
    }
}