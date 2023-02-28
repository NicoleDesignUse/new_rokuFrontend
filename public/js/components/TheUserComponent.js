export default {
    name: 'TheAllUsersComponent',

    created() {
        //get all our users from the database - everyone with a profile
        //connected to Roku

        //we would then render a profile panel for each user using a sub-component
        //inside of this main component
    },

    template: `
    <section>
        <h1>This is the all users component</h1>
        <p>some info place in here</p>
    </section>
    `,

    methods: {
        navToUserHome() {
            //navigate to the user's home page (parents / kids view)
            //we will pass along the user object that goes with the user 'panel 1'
            //we click on
        }
    }
}