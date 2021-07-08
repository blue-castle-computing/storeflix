// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user information
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user - asyncronous, returns a promise of a credential handled in .then
  // password > 6 chars. When signed up, the user can be seen in the firebase console authentication
  // auth is the instance of the firebase auth feature in index.htmll
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form - get the id '#modal-signup from index.html modal id
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    });
  });

  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log('user signed out');
    })
  });

 // login
 const loginForm = document.querySelector('#login-form');
 loginForm.addEventListener('submit', (e) => {
   e.preventDefault();

   // get user info
   const email = loginForm['login-email'].value;
   const password = loginForm['login-password'].value;

   // log the user in, asynch, promise, then, callback function inside
   auth.signInWithEmailAndPassword(email, password).then((cred) => {
     console.log(cred.user);
     // close the login modal & reset the form - uses materialse lib
     const modal = document.querySelector('#modal-login');
     M.Modal.getInstance(modal).close();
     loginForm.reset();
   });
 });