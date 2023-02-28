export default {
    name: 'TheAllUsersComponent',

    template: `
    <section>
        <h1>All Users Shopuld Show Up Here</h1>
        <h2>Who's Using Roku?</h2>
    </section>
    `,

    created() {
        //console.log('all users component is mounted');

        fetch('/ums/users')
        .then (res => res.json())
        .then (data => console.log(data))
        .catch (error => console.log(error))
    }
}