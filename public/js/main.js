// imports always go at the top
import LogInPage from './components/TheLoginComponent.js';
//import UsersComponent from './components/TheUserComponent.js';
import AllUserPage from './components/TheAllUsersComponent.js';
import DefaultHome from './components/TheHomePage.js';
import KidsHome from './components/TheKidsHomePage.js';
//import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue; //import the createApp method from the Vue library

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
       // { 
       //    path: '/', //brower location bar looks like this
       //     name: 'login', //for programmatiuc navigation
       //   component: LogInPage // the component to render
       // },

       { 
        path: '/', //brower location bar looks like this
        name: 'login', //for programmatiuc navigation
        component: LogInPage // the component to render
        },

        { 
            path: '/', //brower location bar looks like this
            name: 'allusers', //for programmatiuc navigation
            component: AllUserPage // the component to render
        },

        {
            path: '/home',
            name: 'home',
            component: DefaultHome
        },

        {
            path: '/kidshome',
            name: 'kidshome',
            component: KidsHome
        },
        // { 
        //     path: '/users', //brower location bar looks like this
        //     name: 'users', //for programmatiuc navigation
        //     component: UsersComponent // the component to render
        // },

        //put a catch-all for broken routes at the very bottom of your routes stack
        //if vue router cant match a give route, itll display a generic error component
        // { 
        //     path: '/:pathMatch(.*)*', //brower location bar looks like this
        //     name: 'error', //for programmatiuc navigation
        //     component: ErrorPage // the component to render
        // }
    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
//   const app = Vue.createApp({
//     methods: {
//         tryRouterPush() {
//             //programmatic routing
//             this.$router.push({
//                 name: 'users'
//             })
//         }
//     }
//   });
const app = Vue.createApp({

    mounted() {
        //cgecj fir a orevuiys kigub ub kicakstirafe
        if (window.localStorage.getItem('user')) {
            this.authenticated = true;
            this.$router.push({name: 'allusers'});
        }
    }, 

    data() {
        return {
            authenticated: false
        }
    },

    methods: {
        logUserOut() {
            this.authenticated = false;
            window.localStorage.removeItem('user');

            this.$router.push({name: 'login'});
        },

        loggedIn() {
            this.authenticated = true;
        }
    }
  });
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);
  
  app.mount('#app');