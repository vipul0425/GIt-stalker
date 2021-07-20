class GitHub {
    constructor(){
        this.client_id = "523c186bd476e84e0c63";
        this.client_secrets =  'e34d5fbea27d2d4de8ce74d0035e536571cbc281';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUsers(user){
        
        // fetching user profile info

        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`);

        // fetching repos

        const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secrets}`);
        
        const profile = await profileRes.json();
        const repo = await repoRes.json();

        return{
            profile,  //note: here we are returning object but as the value and key name is same so we can write a single name as per the es6 standards.
            repo
        }
    }
}