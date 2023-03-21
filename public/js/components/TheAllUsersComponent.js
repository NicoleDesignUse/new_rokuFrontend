import SingleUser from './TheSingleUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template: `
    <section class="user-panel">

        <h2>Who's Using Roku?</h2>

        <section>
        <user v-for="user in users" :user="user"></user>
        </section>
    </section>
    `,

    created() {
        //console.log('all users component is mounted');

        fetch('/ums/users')
        .then (res => res.json())
        .then (data => {
            console.log(data);
            //push our users into vue data object 
            this.users = data;
        })
        .catch (error => console.log(error));
    },


    data() {
        return {
            users: []
        }
    },

    components: {
        user: SingleUser
    }
}