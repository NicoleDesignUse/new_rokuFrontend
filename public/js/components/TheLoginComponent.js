export default {
    name: 'TheLoginComponent',
    template: `
    <div class="login-container">
  <h1 class="login-header">Sign In</h1>
  <form>
    <label class="sr-only" for="inlineFormInputName">Username</label>
    <input ref="username" v-model="username" type="text" class="form-control login-input" id="inlineFormInputName" placeholder="username" required>

    <label class="sr-only" for="inlineFormPassword">Password</label>
    <input  ref="password" v-model="password" type="password" class="form-control login-input" id="inlineFormPassword" placeholder="password" required>

    <div class="signup-container">
    <button  @click="tryLogIn" type="submit" class="btn btn-primary signUp">Sign In</button>
    </div>
  </form>

  <div class="signup-container">
    <span class="signup-text">New to Roku?</span>
    <a href="#" class="signup-link">Sign up now</a>
  </div>
</div>
  `,

  data() {
    return {
      password: '',
      username: '',
      authenticated: false,
      signUp: false
    }
  },

  methods: {

    trySignUp() {
      debugger;
    },
   tryLogIn() {
    //check to see if there are a username and password
    //and make sure there' no extra white space

    if (this.username.trim().length == 0) {
      //this means the username unput is empty
      //the trim() method gets rid of any white space before or after text
      console.log('username is empty, plz mark the field and let the user know');
      this.$refs['username'].classList.add('missing-field');
      return;
    }else if (this.password.trim().length == 0) {
      //this means the username unput is empty
      //the trim() method gets rid of any white space before or after text
      console.log('password is empty, plz mark the field and let the user know');
      this.$refs['password'].classList.add('missing-field');
      return;
    }

    // end the input checks and remove marked fields css classes
    this.$refs['username'].classList.remove('missing-field');
    this.$refs['password'].classList.remove('missing-field');

    //try writing a temp fetch call to the back end login service
    console.log('login script should be good to go');

    //create a user object with theusername and password
    //and then pass that to the back end validation service

    let user = {
      username: this.username,
      password: this.password
    }

    // let formData = new FormData();

    // formData.append("username", this.username);
    // formData.append("password", this.password);
    //gonna work on the formdata next week

    fetch('/ums/login', {
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-type':'application/json'
        //'Content-type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.message == 'no user') {
        // check for no user, and then provide a signup button
        this.signUp = true;

      }else if (data.message == 'wrong password') {
        //password didnt match, try again
        this.$refs['password'].classList.add('missing-field');

      } else {
        this.$emit('setauthenticated');
        //save the user data locally on our system
        window.localStorage.setItem('user', JSON.stringify(data.message.user));
        this.$router.push({name: 'allusers'});
      }
    })
    .catch(error => console.error(error))
   }
   //end fetch call
  }
}