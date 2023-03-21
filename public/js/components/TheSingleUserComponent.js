export default {
    name: 'TheUserComponent',

    props: ['user'],

    template: `
    <div @click="navToHomePage" class="card rounded userpanel">
        <div class="card-body text-center">
            <img :src='"images/" + user.avatar' class="rounded-circle img-fluid">
            <p>{{user.username}}</p>
        </div>
    </div>
    `,

    methods: {
        navToHomePage() {
            console.log('this user has this level:', this.user.permissions);
            //let targetHome = 'home';

            //every user has permissions as part of their data (this is coming from the databases)
            //its set in the permissions column/permissions field
            //we can use that data to figure out what home page they should have access to - its like a rating
            //if the access level is less than 3, then theyre not an adult and shouldnt see the adult home page
            // if its greater than 3, then they get access to everything. bc they are an adult.
            
            // if(this.user.permissions < 4) {
            //     targetHome = 'kidshome';
            // } else {
            //     targetHome = 'home'
            // }

            let targetHome = (this.user.permissions < 4) ? "kidshome" : "home";
            this.$router.push({ name: targetHome });
        }
    }
}